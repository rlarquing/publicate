import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import { DefaultButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, SmallButton, Line, ReturnAction } from "../components";
import { PlanLayout } from "../layouts";
import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Account = () => {
    const navigation = useNavigation();

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const continueEvent = async (accountType: boolean) => {
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

        navigation.navigate('Plan', { type: accountType });
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
        <PlanLayout children={
            <View style={styles.container}>
                <ReturnAction route={"Login"} marginTop={20} marginLeft={15}/>
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
                    <Image style={styles.logo} source={assets.account_icon} />
                </View>
                <View style={styles.question}>
                    <Text style={{ fontSize: deviceHeight > 700 ? 18 : 14 }}>¿Que tipo de Cuenta vas a crear?</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Cliente</Text>
                            <Text style={styles.description}>Cree una cuenta para acceder a todos los negocios registrados en Publicate, usted podrá encontrar los productos y servicios que desee.</Text>
                            <Line size={"100%"} weight={1} />
                            {deviceHeight > 700 && <DefaultButton
                                text={'Continuar'}
                                handlePress={() => {
                                    continueEvent(false);
                                }}
                                textSize={20}
                                size={"100%"}
                                btnBorderColor={COLORS.white}
                                backgroundColor={COLORS.primary}
                                textColor={COLORS.white}
                                marginTop={5}
                                activeOpacity={0.5}
                            />}
                            {deviceHeight <= 700 && <SmallButton
                                text={'Continuar'}
                                handlePress={() => {
                                    continueEvent(false);
                                }}
                                textSize={14}
                                size={"100%"}
                                marginTop={5}
                                btnBorderColor={COLORS.white}
                                backgroundColor={COLORS.primary}
                                textColor={COLORS.white}
                                activeOpacity={0.5}
                            />}
                        </View>
                    </View>
                    <View style={styles.rightSide}>
                        <Image style={styles.image} source={assets.standing_people} />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Negocio</Text>
                            <Text style={styles.description}>Cree una cuenta para promocionar todos sus porductos y servicios a todos los clientes de Publicate. Vea crecer su negocio y sus ingresos con nuestra platafaroma.</Text>
                            <Line size={"100%"} weight={1} />
                            {deviceHeight > 700 && <DefaultButton
                                text={'Continuar'}
                                handlePress={() => {
                                    continueEvent(true);
                                }}
                                textSize={20}
                                size={"100%"}
                                btnBorderColor={COLORS.white}
                                backgroundColor={COLORS.primary}
                                textColor={COLORS.white}
                                marginTop={5}
                                activeOpacity={0.5}
                            />}
                            {deviceHeight <= 700 && <SmallButton
                                text={'Continuar'}
                                handlePress={() => {
                                    continueEvent(true);
                                }}
                                textSize={14}
                                size={"100%"}
                                marginTop={5}
                                btnBorderColor={COLORS.white}
                                backgroundColor={COLORS.primary}
                                textColor={COLORS.white}
                                activeOpacity={0.5}
                            />}
                        </View>
                    </View>
                    <View style={styles.rightSide}>
                        <Image style={styles.image} source={assets.business_man} />
                    </View>
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
    card: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        backgroundColor: COLORS.white,
        alignItems: "flex-start",
        justifyContent: "center",
        alignContent: "flex-start",
        top: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SIZES.extraLarge,
        padding: SIZES.large,
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
        top: -60,
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
        width: "85%",
        height: deviceHeight > 700 ? 140 : 96,
        top: 10,
        marginLeft: "auto",
        marginRight: 0,
        zIndex: 200
    },
    question: {
        top: 90,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        verticalAlign: "middle",
        fontFamily: FONTS.regular,
        fontWeight: "300",
        marginLeft: "auto",
        marginRight: "auto"
    },
    leftSide: {
        width: "70%"
    },
    rightSide: {
        width: "30%"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        verticalAlign: "top",
        alignContent: "flex-start"
    },
    cardTitle: {
        fontFamily: FONTS.title,
        fontSize: 24,
        color: COLORS.primary
    },
    description: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        fontWeight: "400",
        color: COLORS.black,
        lineHeight: 18,
        textAlign: "justify"
    }
});

export default Account;