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
import { DefaultButton, SmallButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, Line, DobleButton, PlanCard } from "../components";
import { RegisterLayout } from "../layouts";
import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const PlanDetails = ({ route }: any) => {
    const navigation = useNavigation();

    const { accountType, planType } = route.params;

    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [planImage, setPlanImage] = useState(assets.standing_people);
    const [planImageSize, setPlanImageSize] = useState({ max: 270, min: 150 });
    const [planOptions, setPlanOptions] = useState(Array<string>);
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

    const returnEvent = () => {
        navigation.navigate('Plan', { type: accountType });
    }

    const updatePlanInfo = () => {
        if (accountType) {
            switch (planType) {
                case 2:
                    setPrice('$500');
                    setType('Pro');
                    setPlanImage(assets.people_table);
                    setPlanImageSize({ max: 250, min: 130 });
                    setPlanOptions([
                        "Gestionar sus productos y servicios.",
                        "Agregar etiquetas a sus productos y servicios para facilitar su búsqueda.",
                        "Adicionar hasta 50 productos y 20 servicios.",
                        "Adicionar su información extendida de vendedor.",
                        "Acceso a estadísticas de sus productos y servicios."
                    ]);
                    break;
                case 3:
                    setPrice('$1000');
                    setType('Premiun');
                    setPlanImage(assets.business_man);
                    setPlanImageSize({ max: 270, min: 150 });
                    setPlanOptions([
                        "Gestionar sus productos y servicios.",
                        "Agregar etiquetas a sus productos y servicios para facilitar su búsqueda.",
                        "Adicicionar todos sus productos y servicios.",
                        "Adicionar su información extendida de vendedor.",
                        "Acceso a múltiples estadísticas de sus productos y servicios.",
                        "Visualizacion mejorada y facilidades de acceso a sus productos y servicios.",
                        "Acceso a un Chat interno para que los clientes lo contacten directamente.",
                        "Y mucho más ...",
                    ]);
                    break;
                default:
                    setPrice('$250');
                    setType('Básico');
                    setPlanImage(assets.standing_people);
                    setPlanImageSize({ max: 280, min: 160 });
                    setPlanOptions([
                        "Gestionar sus productos y servicios.",
                        "Agregar etiquetas a sus productos y servicios para facilitar su búsqueda.",
                        "Adicionar hasta 10 productos y 5 servicios.",
                        "Adicionar su Información básica de vendedor.",
                    ]);
                    break;
            }
        } else {
            switch (planType) {
                case 2:
                    setPrice('$200');
                    setType('Pro');
                    setPlanImage(assets.people_table);
                    setPlanImageSize({ max: 250, min: 130 });
                    setPlanOptions([
                        "Productos recomendados.",
                        "Búsqueda avanzada de productos.",
                        "Información extendida del vendedor.",
                        "Clasificación de los productos por las etiquetas."
                    ]);
                    break;
                case 3:
                    setPrice('$250');
                    setType('Premiun');
                    setPlanImage(assets.business_man);
                    setPlanImageSize({ max: 270, min: 150 });
                    setPlanOptions([
                        "Productos recomendados con análisis inteligente.",
                        "Búsqueda avanzada de productos, incluida la búsqueda por etiquetas.",
                        "Información extendida del vendedor.",
                        "Clasificación de los productos por las etiquetas.",
                        "Lista de compras inteligente.",
                        "Chat interno para contactar directamente al vendedor.",
                        "Y mucho más ...",
                    ]);
                    break;
                default:
                    setPrice('$150');
                    setType('Básico');
                    setPlanImage(assets.standing_people);
                    setPlanImageSize({ max: 280, min: 160 });
                    setPlanOptions([
                        "Productos recomendados.",
                        "Búsqueda de productos.",
                        "Información básica del vendedor."
                    ]);
                    break;
            }
        }
    }

    useEffect(() => {
        updatePlanInfo();
    }, [accountType, planType]);

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
                <View style={styles.page}>
                    <View style={styles.content}>
                        <PlanCard
                            planType={planType}
                            type={type}
                            price={price}
                            planImage={planImage}
                            planImageSize={planImageSize}
                            planOptions={planOptions}
                            returnEvent={returnEvent}
                        />
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
        fontFamily: FONTS.regular
    },
    page: {
        top: 0,
        paddingTop: 40,
        position: "relative",
        height: "auto"
    },
    content: {
        position: "relative",
        height: "100%",
        top: 0,
        bottom: 10,
        padding: 0,
        // paddingBottom: SIZES.large
    }
});

export default PlanDetails;