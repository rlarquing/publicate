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

const Layout = ({ children, title, headerBackground, blackColor }: any) => {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: headerBackground ? headerBackground : COLORS.light.orange }}>
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
                        // sqliteStorage.removeAllUsers();
                        BackHandler.exitApp();
                    },
                    cancel: 'No'
                }}
            />

            <View style={styles.header}>
                <Image style={styles.avatar} source={assets.logo} />
                <Text style={[styles.title, blackColor ? { color: COLORS.black } : { color: COLORS.white }]}>{title}</Text>
                <Image style={[styles.menuIcon, blackColor ? { tintColor: COLORS.black } : { tintColor: COLORS.white }]} source={assets.menu} />
            </View>
            <View style={styles.container}>
                {children}
            </View>
            <NavigationBar />
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
        backgroundColor: COLORS.light.primary,
        borderWidth: 1,
        borderColor: COLORS.white,
        ...SHADOWS.card
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        paddingLeft: 20,
        paddingRight: 20,
        width: deviceWidth,
        height: 80,
        zIndex: 100,
        top: 0
    },
    menuIcon: {
        right: 20,
        width: 32,
        height: 32,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
    },
    title: {
        flex: 1,
        color: COLORS.light.textDarkGray,
        height: 30,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: deviceHeight > 700 ? 24 : 18,
        fontWeight: '900',
        bottom: 0,
        top: 10
    },
    image: {
        marginTop: 0,
        marginBottom: 0,
        width: 216,
        height: 256,
    },
    avatar: {
        left: 20,
        top: 15,
        width: 46,
        height: 46,
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