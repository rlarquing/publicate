import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, Card, DialogBusiness } from "../components";
import { Layout } from "../layouts";
import ProductCard from "../components/ProductCard";
import { DialogProduct } from "../components/DialogProduct";
// import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Home = () => {
    const [avatarCard, setAvatarCard] = useState('');
    const [nameCard, setNameCard] = useState('');
    const [titleCard, setTitleCard] = useState('');
    const [imageCard, setImageCard] = useState('');
    const [addressCard, setAddressCard] = useState('');
    const [timeCard, setTimeCard] = useState('');
    const [productsCard, setProductsCard] = useState('');
    const [descriptionCard, setDescriptionCard] = useState('');
    const [rateCard, setRateCard] = useState('');
    const [priceCard, setPriceCard] = useState('');
    const [availableCard, setAvailableCard] = useState('');
    const [homeServiceCard, setHomeServiceCard] = useState('');

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showDialogBusiness, setShowDialogBusiness] = useState(false);
    const [showDialogProduct, setShowDialogProduct] = useState(false);

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
            time: "Horario: 7:30 AM - 05:30 PM",
            rate: 4.6,
            products: [
                {
                    name: "Pizza napolitana",
                    available: 4,
                    homeService: true,
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    name: "Paquete de fresas",
                    image: assets.business4,
                    price: "$600",
                    available: 100,
                    homeService: true,
                    description: "Paquete de fresas importadas de excelente calidad.",
                }]
        }
        , {
            avatar: assets.welcome_image,
            name: "La Panameña",
            image: assets.business4,
            address: "Calle Libertad #62",
            time: "Horario: 7:30 AM - 05:30 PM",
            rate: 4.3,
            products: [
                {
                    name: "Pizza napolitana",
                    available: 4,
                    homeService: true,
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    name: "Paquete de croquetas",
                    image: assets.business2,
                    price: "$300",
                    available: 4000,
                    homeService: false,
                    description: "Paquete de croquetas de pescados de mar.",
                }]
        },
        {
            avatar: assets.people_table,
            name: "Dulcería Dolores",
            image: assets.business2,
            address: "Calle Maceo #72 e A y B",
            time: "Horario: 7:30 AM - 05:30 PM",
            rate: 3.2,
            products: [
                {
                    name: "Paquete de croquetas",
                    image: assets.business2,
                    price: "$300",
                    available: 4000,
                    homeService: false,
                    description: "Paquete de croquetas de pescados de mar.",
                },
                {
                    name: "Paquete de fresas",
                    image: assets.business4,
                    price: "$600",
                    available: 100,
                    homeService: true,
                    description: "Paquete de fresas importadas de excelente calidad.",
                }]
        },
        {
            avatar: assets.logo,
            name: "Panaderia Express",
            image: assets.business6,
            address: "Celle D #24 e Simon Reyes y Maceo",
            time: "Horario: 7:30 AM - 05:30 PM",
            rate: 2.8,
            products: [
                {
                    name: "Pizza napolitana",
                    available: 4,
                    homeService: true,
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    name: "Paquete de fresas",
                    image: assets.business4,
                    price: "$600",
                    available: 100,
                    homeService: true,
                    description: "Paquete de fresas importadas de excelente calidad.",
                }]
        }
    ];

    const productsData = [
        {
            name: "Pizza napolitana",
            image: assets.business1,
            price: "$150",
            available: 4,
            homeService: true,
            description: "Pizza napolitana de queso campesino.",
            business: {
                avatar: assets.avatar,
                name: "Nestor Pizzas",
                image: assets.business1,
                address: "Calle M #83 e Simon Reyes",
                time: "Horario: 7:30 AM - 05:30 PM",
                rate: 4.6
            }
        },
        {
            name: "Paquete de croquetas",
            image: assets.business2,
            price: "$300",
            available: 4000,
            homeService: false,
            description: "Paquete de croquetas de pescados de mar.",
            business: {
                avatar: assets.people_table,
                name: "Dulcería Dolores",
                image: assets.business2,
                address: "Calle Maceo #72 e A y B",
                time: "Horario: 7:30 AM - 05:30 PM",
                rate: 3.2
            }
        },
        {
            name: "Paquete de fresas",
            image: assets.business4,
            price: "$600",
            available: 100,
            homeService: true,
            description: "Paquete de fresas importadas de excelente calidad.",
            business: {
                avatar: assets.logo,
                name: "Panaderia Express",
                image: assets.business6,
                address: "Celle D #24 e Simon Reyes y Maceo",
                time: "Horario: 7:30 AM - 05:30 PM",
                rate: 2.8
            }
        }
    ];

    const productsList = productsData.map((item: any, index: number) =>
        <ProductCard
            style={styles.section}
            key={index}
            image={item.image}
            title={item.price}
            description={item.description}
            handlePress={() => {
                setTitleCard(item.name);
                setImageCard(item.image);
                setPriceCard(item.price);
                setAvailableCard(item.available);
                setHomeServiceCard(item.homeService);
                setDescriptionCard(item.description);

                setNameCard(item.business.name);
                setAvatarCard(item.business.avatar);
                setAddressCard(item.business.address);
                setTimeCard(item.business.time);
                setRateCard(item.business.rate);
                setShowDialogProduct(true);
            }}
        />
    );

    const businessList = data.map((item: any, index: number) =>
        <Card
            key={index}
            avatar={item.avatar}
            title={item.name}
            image={item.image}
            address={item.address}
            time={item.time}
            rate={item.rate}
            handlePress={() => {
                setNameCard(item.name);
                setAvatarCard(item.avatar);
                setImageCard(item.image);
                setAddressCard(item.address);
                setTimeCard(item.time);
                setProductsCard(item.products);
                setRateCard(item.rate);
                setShowDialogBusiness(true);
            }}
        />
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
                    rate={rateCard}
                    time={timeCard}
                    products={productsCard}
                    backColor={COLORS.orange}
                    open={showDialogBusiness}
                    setOpen={setShowDialogBusiness}
                />}
                {showDialogProduct && <DialogProduct
                    title={titleCard}
                    name={nameCard}
                    avatar={avatarCard}
                    image={imageCard}
                    address={addressCard}
                    description={descriptionCard}
                    rate={rateCard}
                    time={timeCard}
                    available={availableCard}
                    homeService={homeServiceCard}
                    price={priceCard}
                    backColor={COLORS.orange}
                    open={showDialogProduct}
                    setOpen={setShowDialogProduct}
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
                            <View style={styles.sectionHeader}>
                                <Text style={styles.label}>Productos:</Text>
                                <TouchableOpacity style={styles.showMoreBtn} onPress={() => { }}>
                                    <Text style={styles.showMoreText}>Mostrar más</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.scrollArea}>
                                <ScrollView horizontal={true}>
                                    <View style={styles.scrollItems}>
                                        {productsList}
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={[styles.sectionHeader, { marginBottom: 5 }]}>
                                <Text style={styles.label}>Negocios:</Text>
                            </View>
                            {businessList}

                            <TouchableOpacity style={[styles.showMoreBtn, { marginLeft: "auto", marginRight: "auto" }]} onPress={() => { }}>
                                <Text style={styles.showMoreText}>Mostrar más</Text>
                            </TouchableOpacity>
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
        paddingTop: 20,
        position: "relative",
        height: "auto",
        bottom: 0
    },
    content: {
        position: "relative",
        minHeight: deviceHeight,
        bottom: 0,
        padding: 0,
        paddingBottom: 80,
    },
    section: {
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        position: "relative"
    },
    scrollArea: {
        top: 0,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        borderBottomColor: COLORS.light.borderColor,
        borderBottomWidth: 1,
        marginBottom: 30,
        paddingBottom: 5
    },
    scrollItems: {
        top: 10,
        display: "flex",
        flexDirection: "row",
        width: "auto",
        padding: SIZES.large
    },
    sectionHeader: {
        display: "flex",
        flexDirection: 'row',
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        width: "90%",
        position: "relative"
    },
    showMoreText: {
        fontFamily: FONTS.regular,
        fontWeight: "400",
        color: COLORS.dark.orange,
        fontSize: deviceHeight > 700 ? 14 : 12,
        zIndex: 900,
    },
    showMoreBtn: {
        width: 80,
        zIndex: 300,
    },
    label: {
        flex: 1,
        width: '100%',
        color: COLORS.light.textGray,
        height: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
        alignItems: "center",
        justifyContent: "center",
        fontSize: deviceHeight > 700 ? 18 : 16,
        fontWeight: '800',
        fontFamily: FONTS.regular
    }
});

export default Home;