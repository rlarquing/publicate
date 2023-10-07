import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { DefaultButton, CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, SmallButton, Line, Card, DialogBusiness } from "../components";
import { Layout } from "../layouts";
// import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Home = () => {
    const [avatarCard, setAvatarCard] = useState('');
    const [nameCard, setNameCard] = useState('');
    const [imageCard, setImageCard] = useState('');
    const [addressCard, setAddressCard] = useState('');
    const [timeCard, setTimeCard] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showDialogBusiness, setShowDialogBusiness] = useState(false);

    const loginEvent = async () => {
        navigation.navigate("Home");
    }

    // useEffect(() => {
    // let user = sqliteStorage.getLoggedInUser();
    // if (user && user.token) {
    // navigation.navigate('Home');
    // }
    // });

    const data: any = [
        {
            avatar: assets.avatar,
            name: "Nestor Pizzas",
            image: assets.business1,
            address: "Calle M #83 e Simon Reyes",
            time: "Horario: 7:30 AM - 05:30 PM"
        }
        , {
            avatar: assets.welcome_image,
            name: "La Panameña",
            image: assets.business4,
            address: "Calle Libertad #62",
            time: "Horario: 7:30 AM - 05:30 PM"
        },
        {
            avatar: assets.people_table,
            name: "Dulcería Dolores",
            image: assets.business2,
            address: "Calle Maceo #72 e A y B",
            time: "Horario: 7:30 AM - 05:30 PM"
        },
        {
            avatar: assets.logo,
            name: "Panaderia Express",
            image: assets.business6,
            address: "Celle D #24 e Simon Reyes y Maceo",
            time: "Horario: 7:30 AM - 05:30 PM"
        }
    ];

    const businessList = data.map((item: any, index: number) =>
        <Card key={index} avatar={item.avatar} title={item.name} image={item.image} address={item.address} time={item.time} handlePress={() => {
            setNameCard(item.name);
            setAvatarCard(item.avatar);
            setImageCard(item.image);
            setAddressCard(item.address);
            setTimeCard(item.time);
            setShowDialogBusiness(true);
        }} />
    );

    return (
        <Layout title={"Recomendaciones"} headerBackground={COLORS.orange} blackColor={true} children={
            <View style={styles.container}>
                {showLoading && <Loading />}
                {showDialogBusiness && <DialogBusiness
                    title={nameCard}
                    avatar={avatarCard}
                    image={imageCard}
                    address={addressCard}
                    time={timeCard}
                    backColor={COLORS.orange}
                    open={showDialogBusiness}
                    setOpen={setShowDialogBusiness}
                    options={
                        [
                            { label: "Holguin", value: 3277 },
                            { label: "Camaguey", value: 3454 },
                            { label: "Ciego de Avila", value: 3457 },
                            { label: "Moron", value: 3458 },
                        ]
                    }
                />}

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
                    <ScrollView>
                        <View style={styles.content}>
                            {businessList}
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
        fontFamily: "Helvetica",
        paddingTop: 10
    },
    page: {
        position: "relative",
        height: "auto",
        bottom: 0
    },
    content: {
        position: "relative",
        minHeight: deviceHeight,
        bottom: 0,
        padding: 0,
        paddingBottom: 150,
    },
});

export default Home;