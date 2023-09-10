import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import { LoginLayout, DefaultButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, SmallButton } from "../components";
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

                    navigation.navigate("Home");
        //         }
        //     }
        // }
    }

    // useEffect(() => {
        // let user = sqliteStorage.getLoggedInUser();
        // if (user && user.token) {
            // navigation.navigate('Home');
        // }
    // });

    return (
        <LoginLayout children={
            <ScrollView style={styles.container}>
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

                <View style={styles.wrapper}>
                    <Image style={styles.image} source={require("../assets/icon.png")} />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Correo electrónico"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Contraseña"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    {deviceHeight > 700 && <DefaultButton
                        text={'ACCEDER'}
                        handlePress={loginEvent}
                        icon={assets.login_white_icon}
                        iconSize={24}
                        fontSize={10}
                        size={180}
                        btnBorderColor={COLORS.white}
                        backgroundColor={COLORS.primary}
                        textColor={COLORS.white}
                        activeOpacity={0.5}
                    />}
                    {deviceHeight <= 700 && <SmallButton
                        text={'ACCEDER'}
                        handlePress={loginEvent}
                        icon={assets.login_white_icon}
                        iconSize={20}
                        fontSize={10}
                        size={140}
                        btnBorderColor={COLORS.white}
                        backgroundColor={COLORS.primary}
                        textColor={COLORS.white}
                        activeOpacity={0.5}
                    />}
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>¿Has olvidado la contraseña?</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpText}>
                        <Text style={{ fontSize: deviceHeight > 700 ? 14 : 11 }}>Si aún no tienes una cuenta, </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.signUp}>regístrate aquí.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        } />
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
        flex: 1,
    },
    wrapper: {
        width: "90%",
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        marginTop: '20%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: SIZES.base,
        paddingBottom: SIZES.large,
        borderRadius: SIZES.base,
        ...SHADOWS.card
    },
    image: {
        marginTop: deviceHeight > 700 ? -72 : -90,
        marginBottom: deviceHeight > 700 ? 40 : 20,
        width: deviceHeight > 700 ? 128 : 96,
        height: deviceHeight > 700 ? 128 : 96
    },
    inputView: {
        backgroundColor: COLORS.light.inputBackground,
        borderRadius: 30,
        borderColor: COLORS.light.borderColor,
        borderWidth: 1,
        width: "80%",
        height: deviceHeight > 700 ? 45 : 35,
        marginBottom: deviceHeight > 700 ? 20 : 10,
        alignItems: "flex-start",
        color: COLORS.light.textGray,
    },
    TextInput: {
        height: deviceHeight > 700 ? 50 : 30,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize: deviceHeight > 700 ? 14 : 12
    },
    forgot_button: {
        height: 30,
        marginBottom: deviceHeight > 700 ? 30 : 20,
        marginTop: 10,
        fontSize: deviceHeight > 700 ? 14 : 12
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: COLORS.primary,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginText: {
        color: COLORS.white
    },
    signUpText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        verticalAlign: "middle"
    },
    signUp: {
        color: COLORS.link,
        fontSize: deviceHeight > 700 ? 14 : 11
    },
});

export default Login;