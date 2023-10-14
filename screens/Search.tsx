import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Text
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";
import { CustomAlert, ICON_COLOR, ALERT_TYPE, Loading, MiniCard, DialogBusiness, DefaultInput } from "../components";
import { Layout } from "../layouts";
import ProductCard from "../components/ProductCard";
// import { useNavigation } from "@react-navigation/native";
// import jwtDecode from 'jwt-decode';

const deviceHeight = Dimensions.get('window').height;

const Search = () => {
    const [avatarCard, setAvatarCard] = useState('');
    const [nameCard, setNameCard] = useState('');
    const [imageCard, setImageCard] = useState('');
    const [addressCard, setAddressCard] = useState('');
    const [timeCard, setTimeCard] = useState('');
    const [productsCard, setProductsCard] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [titleMessage, setTitleMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showDialogBusiness, setShowDialogBusiness] = useState(false);
    const [filter, setFilter] = useState('');
    const [optionsFilter, setOptionsFilter] = useState([]);

    const loginEvent = async () => {
        navigation.navigate("Home");
    }

    const optionsList = optionsFilter.map((itemObj: any, index: number) =>
        <View style={styles.section} key={index}>
        </View >
    );

    const filterSelect = (newValue: string) => {
        setFilter(newValue);
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
            time: "Horario: \n 7:30 AM \n a \n 5:30 PM",
            rate: 4.6,
            products: [
                {
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    image: assets.business4,
                    price: "$600",
                    description: "Paquete de fresas importadas de excelente calidad."
                }]
        }
        , {
            avatar: assets.welcome_image,
            name: "La Panameña",
            image: assets.business4,
            address: "Calle Libertad #62",
            time: "Horario: \n 7:30 AM \n a \n 5:30 PM",
            rate: 4.3,
            products: [
                {
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    image: assets.business4,
                    price: "$600",
                    description: "Paquete de fresas importadas de excelente calidad."
                }]
        },
        {
            avatar: assets.people_table,
            name: "Dulcería Dolores",
            image: assets.business2,
            address: "Calle Maceo #72 e A y B",
            time: "Horario: \n 7:30 AM \n a \n 5:30 PM",
            rate: 3.2,
            products: [
                {
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    image: assets.business4,
                    price: "$600",
                    description: "Paquete de fresas importadas de excelente calidad."
                }]
        },
        {
            avatar: assets.logo,
            name: "Panaderia Express",
            image: assets.business6,
            address: "Celle D #24 e Simon Reyes y Maceo",
            time: "Horario: \n 7:30 AM \n a \n 5:30 PM",
            rate: 2.8,
            products: [
                {
                    image: assets.business1,
                    price: "$150",
                    description: "Pizza napolitana de queso campesino."
                },
                {
                    image: assets.business4,
                    price: "$600",
                    description: "Paquete de fresas importadas de excelente calidad."
                }]
        }
    ];

    const productsData = [
        {
            image: assets.business1,
            price: "$150",
            description: "Pizza napolitana de queso campesino."
        },
        {
            image: assets.business2,
            price: "$300",
            description: "Paquete de croquetas de pescados."
        },
        {
            image: assets.business4,
            price: "$600",
            description: "Paquete de fresas importadas de excelente calidad."
        }
    ];

    const productsList = productsData.map((item: any, index: number) =>
        <ProductCard style={styles.section} key={index} image={item.image} title={item.price} description={item.description} />
    );

    const businessList = data.map((item: any, index: number) =>
        <MiniCard
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
                setShowDialogBusiness(true);
                setProductsCard(item.products)
            }}
        />
    );

    return (
        <Layout title={"Buscar"} headerBackground={COLORS.dark.gray} blackColor={false} children={
            <View style={styles.container}>
                {showLoading && <Loading />}
                {showDialogBusiness && <DialogBusiness
                    title={nameCard}
                    avatar={avatarCard}
                    image={imageCard}
                    address={addressCard}
                    time={timeCard}
                    products={productsCard}
                    backColor={COLORS.dark.gray}
                    open={showDialogBusiness}
                    setOpen={setShowDialogBusiness}
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
                    <View style={styles.header}>
                        <DefaultInput
                            icon={assets.search}
                            iconColor={COLORS.gray}
                            size={"95%"}
                            type={"name"}
                            text={filter}
                            placeholder={"Buscar..."}
                            handleTyping={filterSelect}
                        />
                    </View>
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
        fontFamily: "Helvetica"
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
        paddingBottom: 180,
    },
    section: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        position: "relative"
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
    scrollArea: {
        top: 0,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        borderBottomColor: COLORS.light.borderColor,
        borderBottomWidth: 1,
        marginBottom: 20
    },
    scrollItems: {
        top: 0,
        display: "flex",
        flexDirection: "row",
        width: "auto",
        padding: SIZES.large
    },
    header: {
        padding: SIZES.extraLarge,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
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

export default Search;