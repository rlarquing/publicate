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
import { DefaultButton, SmallButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, DefaultInput, DefaultSelect, PickerSelect, DialogSelect, ReturnAction } from "../components";
import { RegisterLayout } from "../layouts";
import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Register = ({ route }: any) => {
    const navigation = useNavigation();
    const { accountType, planType } = route.params;

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

    useEffect(() => {
        updatePlanInfo();
    }, [accountType, planType]);

    return (
        <RegisterLayout type={accountType} children={
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
                <View style={styles.card}>
                    <View style={styles.header} >
                        <ReturnAction route={"Plan"} params={{ type: accountType }} marginTop={15} marginLeft={15} />
                        <Text style={styles.title}>
                            Datos del negocio
                        </Text>
                    </View>
                    <View style={styles.cardBody}>
                        <ScrollView>
                            {accountType ?
                                <View style={{ bottom: 0, marginBottom: 20 }}>
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"name"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={name}
                                        placeholder={"Nombre"}
                                        handleTyping={setName}
                                    />
                                    <DefaultSelect
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"addressState"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={province}
                                        placeholder={"Provincia"}
                                        active={showSelectProvinceDialog}
                                        setActive={setShowSelectProvinceDialog}
                                        handleTyping={setProvince}
                                    />
                                    <DefaultSelect
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"location"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={municipality}
                                        placeholder={"Municipio"}
                                        active={showSelectMunicipalityDialog}
                                        setActive={setShowSelectMunicipalityDialog}
                                        handleTyping={setMunicipality}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"telephoneNumber"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={phone}
                                        placeholder={"Teléfono"}
                                        handleTyping={setPhone}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"fullStreetAddress"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={address}
                                        placeholder={"Direción"}
                                        handleTyping={setAddress}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"emailAddress"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={email}
                                        placeholder={"Correo electrónico"}
                                        handleTyping={setEmail}
                                    />
                                    <DefaultInput
                                        icon={assets.key_icon}
                                        size={"100%"}
                                        type={"password"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={password}
                                        placeholder={"Contraseña"}
                                        handleTyping={setPassword}
                                    />
                                    <DefaultInput
                                        icon={assets.key_icon}
                                        size={"100%"}
                                        type={"password"}
                                        marginBottom={deviceHeight > 700 ? 5 : 2}
                                        text={password}
                                        placeholder={"Reescribir la contraseña"}
                                        handleTyping={setPassword}
                                    />
                                </View>
                                :
                                <View style={{
                                    bottom: 0, marginBottom: 20
                                }}>
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"name"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={name}
                                        placeholder={"Nombre"}
                                        handleTyping={setName}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"middleName"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={lastname}
                                        placeholder={"Apellidos"}
                                        handleTyping={setLastname}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"none"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={ci}
                                        placeholder={"CI"}
                                        handleTyping={setCI}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"addressState"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={province}
                                        placeholder={"Provincia"}
                                        handleTyping={setProvince}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"location"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={municipality}
                                        placeholder={"Municipio"}
                                        handleTyping={setMunicipality}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"name"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={gender}
                                        placeholder={"Género"}
                                        handleTyping={setGender}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"telephoneNumber"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={phone}
                                        placeholder={"Teléfono"}
                                        handleTyping={setPhone}
                                    />
                                    <DefaultInput
                                        icon={assets.money_bag_icon}
                                        size={"100%"}
                                        type={"emailAddress"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={email}
                                        placeholder={"Correo electrónico"}
                                        handleTyping={setEmail}
                                    />
                                    <DefaultInput
                                        icon={assets.key_icon}
                                        size={"100%"}
                                        type={"password"}
                                        marginBottom={deviceHeight > 700 ? 20 : 10}
                                        text={password}
                                        placeholder={"Contraseña"}
                                        handleTyping={setPassword}
                                    />
                                    <DefaultInput
                                        icon={assets.key_icon}
                                        size={"100%"}
                                        type={"password"}
                                        marginBottom={deviceHeight > 700 ? 5 : 2}
                                        text={password}
                                        placeholder={"Reescribir la contraseña"}
                                        handleTyping={setPassword}
                                    />
                                </View>
                            }
                            {deviceHeight > 700 && <DefaultButton
                                text={'Registrar'}
                                handlePress={registerEvent}
                                textSize={20}
                                size={"100%"}
                                btnBorderColor={COLORS.white}
                                backgroundColor={COLORS.primary}
                                textColor={COLORS.white}
                                activeOpacity={0.5}
                                top={"auto"}
                                bottom={0}
                                marginBottom={20}
                            />}
                            {deviceHeight <= 700 && <SmallButton
                                text={'Registrar'}
                                handlePress={registerEvent}
                                textSize={14}
                                size={"100%"}
                                btnBorderColor={COLORS.white}
                                backgroundColor={COLORS.black}
                                textColor={COLORS.white}
                                activeOpacity={0.5}
                                top={"auto"}
                                bottom={0}
                                marginBottom={20}
                            />}
                        </ScrollView>
                    </View>
                </View>
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
    card: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        top: 10,
        bottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SIZES.extraLarge,
        borderRadius: 20,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 300,
    },
    image: {
        width: 190,
        height: 245,
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 500
    },
    cardBody: {
        position: "relative",
        width: "90%",
        height: "100%",
        top: 35,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        borderRadius: 20,
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.base,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        paddingTop: 20,
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
        height: "auto",
        backgroundColor: COLORS.red
    },
    content: {
        position: "relative",
        height: "100%",
        top: 0,
        bottom: 10,
        padding: 0,
        // paddingBottom: SIZES.large
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
      width: '100%',
      height: 50,
      maxHeight: 50,
      top: 0,
      zIndex: 300,
      // backgroundColor: '#FF0000'
    },
    title: {
      flex: 1,
      width: '100%',
      color: COLORS.light.textDarkGray,
      height: 30,
      top: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      alignItems: "center",
      justifyContent: "center",
      fontSize: deviceHeight > 700 ? 16 : 12,
      fontWeight: '400',
      textShadowColor: COLORS.shadow,
      textShadowOffset: {
        width: 0,
        height: 1,
      },
      textShadowRadius: 2.22,
      position: 'absolute'
    },
});

export default Register;