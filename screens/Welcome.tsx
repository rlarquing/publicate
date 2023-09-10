import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    BackHandler
} from "react-native";
import { assets, COLORS, SIZES } from "../constants";
import { FocusedStatusBar, CustomAlert, ALERT_TYPE, ICON_COLOR } from "../components";
import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Welcome = () => {
    const navigation = useNavigation();
    const [visibleAlertSalir, setVisibleAlertSalir] = useState(false);

    const continueEvent = () => {
        navigation.navigate("Login");
    }

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

        setTimeout(() => {
            // navigation.navigate("Login");
        }, 5000);
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.accent }}>
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
                        size: 120,
                        textColor: COLORS.white,
                        backgroundColor: COLORS.red
                    },
                    {
                        btnBorderColor: COLORS.white,
                        icon: assets.return_icon,
                        iconSize: 20,
                        size: 130,
                        textColor: COLORS.white,
                        backgroundColor: COLORS.primary
                    }
                ]}
                actions={{
                    yes: 'Si',
                    yesCallback: () => {
                        // const inicialState = {
                        //     token: '',
                        //     isAutenticated: false
                        // }
                        // setUser(inicialState);
                        BackHandler.exitApp()
                    },
                    cancel: 'No'
                }}
            />

            <View style={styles.header}>
                <Image style={styles.logo} source={assets.inline_logo} />
                <Text style={styles.slogan}>Bulevar virtual de negocios privados</Text>
            </View>
            <View style={styles.container}>
                <Image style={styles.image} source={assets.welcome_image} />
                <View style={styles.continueBox}>
                    <Text style={styles.welcomeText}>Publicate es una app que busca agrupar los negocios privados en una plataforma con visibilidad nacional e internacional para que los clientes puedan acceder de forma fácil a sus productos y servicios. </Text>
                    <TouchableOpacity style={styles.continueBtn} onPress={continueEvent} activeOpacity={0.5}>
                        <Text style={styles.btnText}>Continuar</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.image2} source={assets.welcome_image2} />
            </View>
            <View style={styles.yellowBox}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 300,
        padding: SIZES.base,
        paddingBottom: SIZES.large,
        borderRadius: SIZES.base,
        top: 150,
    },
    image: {
        marginTop: 0,
        marginBottom: 0,
        width: deviceHeight > 700 ? 319 : 0,
        height: deviceHeight > 700 ? 299 : 0,
        marginLeft: "auto",
        marginRight: "auto",
        position: "absolute",
        zIndex: 300
    },
    image2: {
        top: -50,
        width: deviceHeight > 700 ? 350 : 0,
        height: deviceHeight > 700 ? 350 : 0,
        marginLeft: "auto",
        marginRight: "auto",
        position: "absolute",
        zIndex: 100
    },
    continueBox: {
        top: 250,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        height: deviceHeight > 700 ? 275 : 0,
        backgroundColor: "#FFFFFFEE",
        borderRadius: 20,
        padding: SIZES.large,
        zIndex: 200
    },
    continueBtn: {
        top: 50,
        width: "90%",
        borderRadius: 8,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: COLORS.primary,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: "row"
    },
    btnText: {
        color: COLORS.white,
        marginLeft: 20,
        fontFamily: "Helvetica",
        fontSize: 20,
        fontWeight: "400"
    },
    btnIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 50,
        borderColor: COLORS.white,
        borderWidth: 2,
        left: -2,
        top: 0,
        position: 'absolute',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        verticalAlign: "middle",
        textAlign: 'justify',
        justifyContent: "center",
    },
    btnIcon: {
        width: 16,
        height: 16
    },
    signUpText: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        verticalAlign: "middle",
        color: "#054409",
        textAlign: 'justify',
        justifyContent: "center",
        fontSize: 12,
        paddingHorizontal: SIZES.small,
        left: 10
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        top: 0,
        width: 325,
        height: 325,
        padding: 0,
        marginLeft: "auto",
        marginRight: "auto"
    },
    header: {
        width: deviceWidth,
        height: 280,
        zIndex: 100,
        top: 50,
    },
    logo: {
        marginBottom: 0,
        width: 191,
        height: 47,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
    },
    slogan: {
        color: "#333333",
        fontSize: 16,
        fontFamily: "HelveticaLight",
        width: "100%",
        textAlign: "center",
        marginTop: 10
    },
    welcomeText: {
        marginTop: 35,
        color: "#333333",
        fontSize: 16,
        fontFamily: "Helvetica",
        textAlign: "justify",
        fontWeight: "500"
    },
    yellowBox: {
        width: deviceWidth,
        backgroundColor: COLORS.dark.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        height: "30%",
        position: "absolute"
    }
});

export default Welcome;