import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Keyboard
} from "react-native";
import { COLORS, SIZES, assets } from "../constants";
import { DefaultButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, SmallButton, DefaultInput, SearchInput } from "../components";
import { LoginLayout } from "../layouts";
import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const loginEvent = async () => {
        // setShowLoading(true);
        // // Comprobar datos contra el API
        // let { msg, data } = await api.login(endpoints.app.login, {
        //     email,
        //     password
        // });
        // setShowLoading(false);

        // if (msg && msg.statusCode) {
        //     console.log('EL DATA: ', msg.message);
        //     setTitleMessage(`ERROR`);
        //     setErrorMessage('No se ha podido autenticar correctamente! Por favor verifique los datos y su conexión.');
        //     // setErrorMessage(msg.message ? msg.message.toString() : 'No se ha podido autenticar correctamente! Por favor verifique los datos y su conexión.');
        //     setShowErrorMessage(true);
        // } else {
        //     let { nombre, apellidos, email, token } = data;
        //     if (token) {
        //         let decode = jwtDecode(token);
        //         // console.log('Contenido del TOKEN: ', decode);
        //         if (decode && decode.id) {
        //             sqliteStorage.openApp(decode.id);
        //             // Guardar los datos en la BD local
        //             sqliteStorage.addUser({
        //                 name: nombre,
        //                 lastname: apellidos,
        //                 email,
        //                 logged: 1,
        //                 userId: decode.id,
        //                 token: token
        //             });
        if (email === "leo@gmail.com" && password === "Abc123") {
            navigation.navigate("Home");
        } else {
            setTitleMessage(`ERROR`);
            setErrorMessage('No se ha podido autenticar correctamente! Por favor verifique los datos y su conexión.');
            // setErrorMessage(msg.message ? msg.message.toString() : 'No se ha podido autenticar correctamente! Por favor verifique los datos y su conexión.');
            setShowErrorMessage(true);
        }
        //         }
        //     }
        // }
    }

    const keyLoginEvent = async (evt: any) => {
        if (evt.nativeEvent.key == "Enter") {
            console.log("key: ", evt);
            if (email === "leo" && password === "Abc123") {
                navigation.navigate("Home");
            } else {
                setTitleMessage(`ERROR`);
                setErrorMessage('No se ha podido autenticar correctamente! Por favor verifique los datos y su conexión.');
                // setErrorMessage(msg.message ? msg.message.toString() : 'No se ha podido autenticar correctamente! Por favor verifique los datos y su conexión.');
                setShowErrorMessage(true);
            }
            Keyboard.dismiss();
        }
    }

    // useEffect(() => {
    // let user = sqliteStorage.getLoggedInUser();
    // if (user && user.token) {
    // navigation.navigate('Home');
    // }
    // });

    return (
        <LoginLayout children={
            <View style={styles.container}>
                {showLoading && <Loading />}

                <CustomAlert
                    type={ALERT_TYPE.OK_ALERT}
                    showAlert={showErrorMessage}
                    setShowAlert={setShowErrorMessage}
                    title={titleMessage}
                    message={JSON.stringify(errorMessage)}
                    iconProps={{
                        name: 'md-information',
                        size: 36,
                        color: "#FFFFFF",
                        background: ICON_COLOR.ERROR
                    }}
                    actions={{
                        ok: 'Aceptar'
                    }}
                    btnProps={[
                        {
                            btnBorderColor: COLORS.white,
                            icon: assets.return_icon,
                            iconSize: 20,
                            size: 120,
                            textSize: 14,
                            textColor: COLORS.white,
                            backgroundColor: COLORS.gray
                        }
                    ]}
                />

                <View style={styles.imageBox} >
                    <Image style={styles.logo} source={assets.logo} />
                    <Image style={styles.image} source={assets.login_image} />
                </View>
                <View style={styles.wrapper}>
                    <SearchInput
                        icon={assets.money_bag_icon}
                        size={"90%"}
                        type={"emailAddress"}
                        marginBottom={deviceHeight > 700 ? 20 : 10}
                        text={email}
                        placeholder={"Correo electrónico"}
                        handleTyping={setEmail}
                        handleKeyPress={keyLoginEvent}
                    />
                    <SearchInput
                        icon={assets.key_icon}
                        size={"90%"}
                        type={"password"}
                        marginBottom={deviceHeight > 700 ? 5 : 2}
                        text={password}
                        placeholder={"Contraseña"}
                        handleTyping={setPassword}
                        handleKeyPress={keyLoginEvent}
                    />
                    <View style={styles.forgotButtonBox}>
                        <TouchableOpacity>
                            <Text style={styles.forgotButton}>¿Olvidaste la contraseña?</Text>
                        </TouchableOpacity>
                    </View>
                    {deviceHeight > 700 && <DefaultButton
                        text={'Acceder'}
                        handlePress={loginEvent}
                        textSize={20}
                        size={"90%"}
                        btnBorderColor={COLORS.white}
                        backgroundColor={COLORS.primary}
                        textColor={COLORS.white}
                        activeOpacity={0.5}
                    />}
                    {deviceHeight <= 700 && <SmallButton
                        text={'Acceder'}
                        handlePress={loginEvent}
                        textSize={14}
                        size={"90%"}
                        btnBorderColor={COLORS.white}
                        backgroundColor={COLORS.primary}
                        textColor={COLORS.white}
                        activeOpacity={0.5}
                    />}
                </View>
                <View style={styles.signUpText}>
                    <Text style={{ fontSize: deviceHeight > 700 ? 14 : 11 }}>Si aún no tienes una cuenta, </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                        <Text style={styles.signUp}>regístrate aquí.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        } />
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        fontFamily: "Helvetica"
    },
    wrapper: {
        width: "85%",
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        top: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: SIZES.base,
        paddingRight: SIZES.base,
        paddingTop: 60,
        paddingBottom: SIZES.extraLarge,
        borderRadius: 20,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 300
    },
    logo: {
        width: deviceHeight > 700 ? 128 : 96,
        height: deviceHeight > 700 ? 128 : 96,
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 300
    },
    imageBox: {
        width: "100%",
        height: 150,
        top: 0,
        position: "absolute",
        zIndex: 500
    },
    image: {
        width: "100%",
        height: deviceHeight > 700 ? 128 : 96,
        top: 50,
        position: "absolute",
        zIndex: 200
    },
    forgotButtonBox: {
        width: "90%",
        textAlign: "right",
        position: "relative",
        height: 30,
        left: "auto",
        right: 0,
        marginBottom: deviceHeight > 700 ? 30 : 20,
        marginTop: 10,
    },
    forgotButton: {
        textAlign: "right",
        height: 30,
        left: "auto",
        right: 0,
        fontSize: deviceHeight > 700 ? 14 : 12
    },
    signUpText: {
        top: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        verticalAlign: "middle",
        marginLeft: "auto",
        marginRight: "auto"
    },
    signUp: {
        color: COLORS.dark.orange,
        fontSize: deviceHeight > 700 ? 14 : 11,
        width: "100%",
        textAlign: "center",
        fontFamily: "Helvetica",
        fontWeight: "300"
    },
});

export default Login;