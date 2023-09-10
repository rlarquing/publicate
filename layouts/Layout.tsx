import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    BackHandler
} from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from '../components/FocusedStatusBar';
import NavigationBar from '../components/NavigationBar';
import { CustomAlert, ALERT_TYPE, ICON_COLOR } from "../components/CustomAlert";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Layout = ({ children }: any) => {
    const navigation = useNavigation();
    const [visibleAlertSalir, setVisibleAlertSalir] = useState(false);

    const showAlertSalir = () => {
        setVisibleAlertSalir(true);
    };

    useEffect(function didMount() {
        const backAction = () => {
            showAlertSalir();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.black} />

            <CustomAlert
                type={ALERT_TYPE.YES_OR_CANCEL_ALERT}
                showAlert={visibleAlertSalir}
                setShowAlert={setVisibleAlertSalir}
                title={'Monedero de TransPago'}
                message={'¿Quieres salir de la aplicación?'}
                iconProps={{
                    name: 'md-help',
                    size: 36,
                    color: "#FFFFFF",
                    background: ICON_COLOR.WARNING
                }}
                btnProps={[
                    {
                        btnBorderColor: COLORS.white,
                        icon: assets.logout_white_icon,
                        iconSize: 20,
                        size: 100,
                        textSize: 14,
                        textColor: COLORS.white,
                        backgroundColor: COLORS.red
                    },
                    {
                        btnBorderColor: COLORS.white,
                        icon: assets.return_icon,
                        iconSize: 20,
                        size: 100,
                        textSize: 14,
                        textColor: COLORS.white,
                        backgroundColor: COLORS.primary
                    }
                ]}
                actions={{
                    yes: 'Si',
                    yesCallback: () => {
                        sqliteStorage.removeAllUsers();
                        BackHandler.exitApp();
                    },
                    cancel: 'No'
                }}
            />

            <View style={styles.topWave}>
                <Image style={styles.logo} source={assets.logo} />
                <Image style={styles.topWaveImage} source={assets.layout_top_wave} />
                <Text style={styles.title}>MONEDERO DE TRANSPAGO</Text>
            </View>
            <View style={styles.container}>
                {children}
            </View>
            <View style={styles.bottomWave}>
                <Image style={styles.bottomWaveImage} source={assets.bottom_wave} />
            </View>
            <NavigationBar />
            <Image style={styles.background} source={assets.gradient_background} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight - 110,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 300,
        margin: 0,
        paddingBottom: 0,
        paddingTop: 0,
        borderTopLeftRadius: SIZES.extraLarge,
        borderTopRightRadius: SIZES.extraLarge,
        top: 0,
        bottom: 0,
        ...SHADOWS.card
    },
    topWave: {
        width: deviceWidth,
        height: 130,
        zIndex: 100,
        top: 0
    },
    topWaveImage: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
    },
    bottomWave: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: deviceWidth,
        height: 280,
        position: "absolute",
        zIndex: 100,
        bottom: 0
    },
    bottomWaveImage: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
    },
    title: {
        flex: 1,
        width: 120,
        color: COLORS.light.textDarkGray,
        height: 30,
        top: 65,
        marginLeft: '66%',
        marginBottom: 10,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: deviceHeight > 700 ? 14 : 10,
        fontWeight: '900',
        textShadowColor: COLORS.shadow,
        textShadowOffset: {
            width: 0,
            height: 1,
        },
        textShadowRadius: 2.22,
    },
    image: {
        marginTop: 0,
        marginBottom: 0,
        width: 216,
        height: 256,
    },
    logo: {
        marginLeft: 30,
        marginTop: 50,
        width: deviceHeight > 700 ? 180 : 140,
        height: deviceHeight > 700 ? 54 : 42,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        top: 0,
        width: '100%',
        height: '100%',
        padding: 0
    },
});

export default Layout;