import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { DefaultButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, SmallButton, Line, Card } from "../components";
import { Layout } from "../layouts";
// import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const loginEvent = async () => {
        navigation.navigate("Home");
    }

    // useEffect(() => {
    // let user = sqliteStorage.getLoggedInUser();
    // if (user && user.token) {
    // navigation.navigate('Home');
    // }
    // });

    const businessList = () => {
        <Card />
    }

    return (
        <Layout title={"Recomendaciones"} headerBackground={COLORS.orange} blackColor={true} children={
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

                <View style={styles.question}>
                    <Text style={{ fontSize: deviceHeight > 700 ? 18 : 14 }}>¿Que tipo de Cuenta vas a crear?</Text>
                </View>
                
                <View style={styles.card}>
                    <View style={styles.leftSide}>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Negocio</Text>
                            <Text style={styles.description}>Cree una cuenta para promocionar todos sus porductos y servicios a todos los clientes de Publicate. Vea crecer su negocio y sus ingresos con nuestra platafaroma.</Text>
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

export default Home;