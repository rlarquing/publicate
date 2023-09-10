import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { DefaultButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, SmallButton, Line } from "../components";
import { useNavigation } from "@react-navigation/native";
import { RegisterLayout } from "../layouts";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Plan = ({ route }: any) => {
    const navigation = useNavigation();
    const {
        type
    } = route.params;

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
        <RegisterLayout children={
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
                    <Image style={styles.logo} source={type ? assets.cash_icon : assets.money_icon} />
                </View>
                <View style={styles.page}>
                    <View style={styles.question}>
                        <Text style={{ fontSize: deviceHeight > 700 ? 18 : 14 }}>Seleccione el Plan que se adapte a sus necesidades y presupuesto.</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.content}>
                            <View style={styles.card}>
                                <View style={styles.leftSide}>
                                    <View style={styles.cardContent}>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.cardTitle}>Básico</Text>
                                            <View style={styles.price}>
                                                <Text style={[styles.priceValue, { color: "#3B9F10" }]}>{type ? "$1500" : "$150"}</Text>
                                                <Text style={[styles.priceText, { color: "#3B9F10" }]}>/mes</Text>
                                            </View>
                                        </View>
                                        <Line size={"100%"} weight={1} />
                                        {deviceHeight > 700 && <DefaultButton
                                            text={'Continuar'}
                                            handlePress={loginEvent}
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
                                            handlePress={loginEvent}
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
                                    <Image style={[styles.image, { height: deviceHeight > 700 ? 125 : 90, top: 5 }]} source={assets.standing_people} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.leftSide}>
                                    <View style={styles.cardContent}>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.cardTitle}>Pro</Text>
                                            <View style={styles.price}>
                                                <Text style={[styles.priceValue, { color: "#1E8F33" }]}>{type ? "$1500" : "$200"}</Text>
                                                <Text style={[styles.priceText, { color: "#1E8F33" }]}>/mes</Text>
                                            </View>
                                        </View>
                                        <Line size={"100%"} weight={1} />
                                        {deviceHeight > 700 && <DefaultButton
                                            text={'Continuar'}
                                            handlePress={loginEvent}
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
                                            handlePress={loginEvent}
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
                                    <Image style={[styles.image, { height: deviceHeight > 700 ? 100 : 90, top: 15 }]} source={assets.people_table} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.leftSide}>
                                    <View style={styles.cardContent}>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.cardTitle}>Premiun</Text>
                                            <View style={styles.price}>
                                                <Text style={[styles.priceValue, { color: "#27611D" }]}>{type ? "$1500" : "$250"}</Text>
                                                <Text style={[styles.priceText, { color: "#27611D" }]}>/mes</Text>
                                            </View>
                                        </View>
                                        <Line size={"100%"} weight={1} />
                                        {deviceHeight > 700 && <DefaultButton
                                            text={'Continuar'}
                                            handlePress={loginEvent}
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
                                            handlePress={loginEvent}
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
                                    <Image style={[styles.image, { top: 2 }]} source={assets.business_man} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
        top: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SIZES.extraLarge,
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.base,
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
        width: deviceHeight > 700 ? 170 : 96,
        height: deviceHeight > 700 ? 117 : 96,
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
        width: "90%",
        height: deviceHeight > 700 ? 120 : 90,
        marginLeft: "auto",
        marginRight: 0,
        zIndex: 200
    },
    question: {
        position: "relative",
        top: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        verticalAlign: "middle",
        fontFamily: FONTS.regular,
        fontWeight: "300",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10
    },
    leftSide: {
        width: "75%"
    },
    rightSide: {
        width: "25%"
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
    cardInfo: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        alignItems: "flex-end",
        marginBottom: 20
    },
    description: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        fontWeight: "400",
        color: COLORS.black,
        lineHeight: 18,
        textAlign: "justify"
    },
    page: {
        top: 75,
        position: "relative",
        height: "auto",
    },
    content: {
        position: "relative",
        height: "auto",
        padding: 0,
        paddingTop: 10,
        paddingBottom: 200
    },
    price: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: 0
    },
    priceValue: {
        fontFamily: FONTS.title,
        fontSize: 36
    },
    priceText: {
        fontFamily: FONTS.regular,
        fontWeight: "300",
        fontSize: 16,
        bottom: 0,
        top: 20
    }
});

export default Plan;