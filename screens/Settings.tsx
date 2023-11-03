import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { DefaultButton, SmallButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, DefaultInput, DefaultSelect, PickerSelect, DialogSelect, ReturnAction, Line } from "../components";
import { SettingsLayout } from "../layouts";
import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Settings = ({ route }: any) => {
    const navigation = useNavigation();
    // const { accountType, planType } = route.params;

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(assets.standing_people);
    const [ci, setCI] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [municipality, setMunicipality] = useState(0);
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    // Select Dialogs 
    const [showSelectProvinceDialog, setShowSelectProvinceDialog] = useState(false);
    const [showSelectMunicipalityDialog, setShowSelectMunicipalityDialog] = useState(false);

    const registerEvent = async () => {
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

        navigation.navigate("Login");
        //         }
        //     }
        // }
    }
    const [provinceList, setProvinceList] = useState([{ value: 3456, label: "Ciego de Ávila" }, { value: 3743, label: "Camagüey" }]);

    const updatePlanInfo = () => {
        // if (accountType) {
        //     setPrice('$500');
        //     setType('Pro');
        //     setPlanImage(assets.standing_people);
        //     setPlanImageSize({ width: 70, max: 250, min: 130 })
        // } else {
        //     setPrice('$200');
        //     setType('Pro');
        //     setPlanImage(assets.people_table);
        //     setPlanImageSize({ width: 190, max: 240, min: 120 });
        // }
    }

    // useEffect(() => {
    //     updatePlanInfo();
    // }, [accountType, planType]);

    const profileEvent = async () => {
        navigation.navigate("Profile");
    }

    return (
        <SettingsLayout title={"Ajustes"} backRoute={"Home"} children={
            <View style={styles.container}>
                {showLoading && <Loading />}

                {/* Select Dialogs */}
                {showSelectMunicipalityDialog && <DialogSelect
                    title={"Seleccione el Municipio"}
                    value={municipality}
                    setValue={setMunicipality}
                    showDialog={setShowSelectMunicipalityDialog}
                    options={
                        [
                            { label: "Holguin", value: 3277 },
                            { label: "Camaguey", value: 3454 },
                            { label: "Ciego de Avila", value: 3457 },
                            { label: "Moron", value: 3458 },
                        ]
                    }
                />}
                {showSelectProvinceDialog && <DialogSelect
                    title={"Seleccione la Provincia"}
                    value={province}
                    setValue={setProvince}
                    showDialog={setShowSelectProvinceDialog}
                    options={
                        [
                            { label: "Holguin", value: 3277 },
                            { label: "Camaguey", value: 3454 },
                            { label: "Ciego de Avila", value: 3457 },
                        ]
                    }
                />}

                {/* Notifications */}
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

                {/* Screen Content */}
                <ScrollView>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={profileEvent} activeOpacity={0.5}>
                            <View style={styles.header} >
                                <View style={styles.avatarBtn}>
                                    <Image style={styles.avatar} source={assets.business3} />
                                </View>
                                <Text style={styles.title}>
                                    Leandro Campos Rojas
                                </Text>
                                <View style={styles.arrow}>
                                    <Image style={styles.arrow} source={assets.arrow_right_icon} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.list}>
                            <TouchableOpacity style={styles.listItem} onPress={profileEvent} activeOpacity={0.5}>
                                <View style={[styles.iconBox, { backgroundColor: COLORS.brown }]}>
                                    <Image style={styles.icon} source={assets.list_icon} />
                                </View>
                                <Text style={{ backgroundColor: COLORS.white }}>
                                    Ajustar la hora
                                </Text>
                                <View style={styles.arrow}>
                                    <Image style={styles.arrow} source={assets.arrow_right_icon} />
                                </View>
                            </TouchableOpacity>
                            <Line size={"90%"} weight={1} color={COLORS.light.borderColor} marginLeft={"auto"} marginRight={0} />
                            <TouchableOpacity style={styles.listItem} onPress={profileEvent} activeOpacity={0.5}>
                                <View style={[styles.iconBox, { backgroundColor: COLORS.red }]}>
                                    <Image style={styles.icon} source={assets.list_icon} />
                                </View>
                                <Text style={{ backgroundColor: COLORS.white }}>
                                    Moneda
                                </Text>
                                <View style={styles.arrow}>
                                    <Image style={styles.arrow} source={assets.arrow_right_icon} />
                                </View>
                            </TouchableOpacity>
                            <Line size={"90%"} weight={1} color={COLORS.light.borderColor} marginLeft={"auto"} marginRight={0} marginBottom={0}/>
                            <TouchableOpacity style={styles.listItem} onPress={profileEvent} activeOpacity={0.5}>
                                <View style={[styles.iconBox, { backgroundColor: COLORS.green }]}>
                                    <Image style={styles.icon} source={assets.list_icon} />
                                </View>
                                <Text style={{ backgroundColor: COLORS.white }}>
                                    Cambiar plan
                                </Text>
                                <View style={styles.arrow}>
                                    <Image style={styles.arrow} source={assets.arrow_right_icon} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.list}>
                            <TouchableOpacity style={styles.listItem} onPress={profileEvent} activeOpacity={0.5}>
                                <View style={[styles.iconBox, { backgroundColor: COLORS.light.blue }]}>
                                    <Image style={styles.icon} source={assets.list_icon} />
                                </View>
                                <Text style={{ backgroundColor: COLORS.white }}>
                                    Acerca de
                                </Text>
                                <View style={styles.arrow}>
                                    <Image style={styles.arrow} source={assets.arrow_right_icon} />
                                </View>
                            </TouchableOpacity>
                            <Line size={"90%"} weight={1} color={COLORS.light.borderColor} marginLeft={"auto"} marginRight={0} marginBottom={0}/>
                            <TouchableOpacity style={styles.listItem} onPress={profileEvent} activeOpacity={0.5}>
                                <View style={[styles.iconBox, { backgroundColor: COLORS.primary }]}>
                                    <Image style={styles.icon} source={assets.list_icon} />
                                </View>
                                <Text style={{ backgroundColor: COLORS.white }}>
                                    Contactenos
                                </Text>
                                <View style={styles.arrow}>
                                    <Image style={styles.arrow} source={assets.arrow_right_icon} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

        } />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        width: '100%',
        flex: 1,
        fontFamily: FONTS.regular
    },
    content: {
        position: "relative",
        minHeight: deviceHeight,
        bottom: 0,
        padding: 0,
        paddingBottom: 80,
    },
    list: {
        width: '90%',
        top: 0,
        zIndex: 100,
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingRight: 0,
        borderRadius: 20,
        paddingVertical: 10,
        bottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SIZES.base,
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.84,
        elevation: 1
    },
    image: {
        width: 190,
        height: 245,
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 500
    },
    description: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        fontWeight: "400",
        color: COLORS.divider,
        lineHeight: 24,
        textAlign: "justify"
    },
    page: {
        top: 0,
        paddingTop: 0,
        position: "relative",
        height: "auto"
    },
    price: {
        display: "flex",
        flexDirection: "row"
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
    },
    header: {
        flex: 1,
        width: '90%',
        height: 80,
        maxHeight: 80,
        top: 0,
        zIndex: 100,
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        bottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SIZES.extraLarge,
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.84,
        elevation: 1
    },
    title: {
        flex: 1,
        left: 10,
        position: "relative",
        color: COLORS.light.textDarkGray,
        textAlign: 'left',
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        fontSize: deviceHeight > 700 ? 16 : 12,
        fontWeight: '400',
        textShadowColor: COLORS.shadow,
        textShadowOffset: {
            width: 0,
            height: 1,
        },
        textShadowRadius: 2.22
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    },
    avatarBtn: {
        left: 0,
        position: 'relative',
        width: 64,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 4,
        borderColor: COLORS.white,
        borderRadius: 50,
        zIndex: 200,
        ...SHADOWS.dark
    },
    arrow: {
        width: 16,
        height: 16,
        right: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        tintColor: COLORS.black,
        position: "absolute"
    },
    iconBox: {
        marginLeft: 10,
        width: 24,
        maxWidth: 24,
        height: 24,
        right: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.red,
        padding: 10,
        borderRadius: 5
    },
    icon: {
        width: 16,
        height: 16,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        tintColor: COLORS.white,
        position: "absolute",
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    listItem: {
        flex: 1,
        width: '100%',
        top: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "row",
        textAlign: 'left',
        alignItems: "center",
        verticalAlign: "middle",
        justifyContent: "flex-start",
        bottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 5
    },
});

export default Settings;