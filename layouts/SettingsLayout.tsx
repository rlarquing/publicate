
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    BackHandler
} from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { ReturnAction, NavigationBar, FocusedStatusBar, CustomAlert, ALERT_TYPE, ICON_COLOR } from "../components";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const SettingsLayout = ({ children, title, backRoute }: any) => {
    const navigation = useNavigation();
    const [showExitAlert, setShowExitAlert] = useState(false);

    const showAlertSalir = () => {
        setShowExitAlert(true);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.accent }}>
            <FocusedStatusBar background={COLORS.black} />

            <CustomAlert
                type={ALERT_TYPE.YES_OR_CANCEL_ALERT}
                showAlert={showExitAlert}
                setShowAlert={setShowExitAlert}
                title={'Publicate'}
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
                <ReturnAction route={backRoute} marginTop={15} marginLeft={15} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.pageContainer}>
                    {children}
                </View>
                <View style={styles.backgroundBox}></View>
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
        top: 0,
        bottom: 0,
        ...SHADOWS.card
    },
    pageContainer: {
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
    menuBtn: {
        right: 20,
        top: 15,
        position: 'absolute',
    },
    menuIcon: {
        width: 32,
        height: 32,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    avatarBtn: {
        left: 20,
        top: 15,
        position: 'absolute',
    },
    avatar: {
        width: 46,
        height: 46,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    backgroundBox: {
        borderTopLeftRadius: SIZES.extraLarge,
        borderTopRightRadius: SIZES.extraLarge,
        backgroundColor: COLORS.accent,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        top: "40%",
        width: '100%',
        height: '60%',
        padding: 0
    },
});

export default SettingsLayout;