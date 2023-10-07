import React from "react";
import { View, Dimensions, Text, StyleSheet, ScrollView, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { DefaultButton, SmallButton } from "./Button";

const deviceHeight = Dimensions.get('window').height;

export const PlanCard = ({
    planOptions,
    returnEvent,
    type,
    price,
    planType,
    planImage,
    planImageSize,
    ...props
}: any) => {
    const optionList = planOptions.map((item: string, index: number) =>
        <Text style={[styles.description, planType ? planType === 3 ? styles.descriptionPremiun : planType === 2 ? styles.descriptionPro : styles.descriptionBasic : styles.descriptionBasic]} key={index}>
            {index + 1}- {item}
        </Text>
    );

    return (
        <View style={planType ? planType === 3 ? styles.cardPremiun : planType === 2 ? styles.cardPro : styles.card : styles.card}>
            <View style={styles.cardBody}>
                <View style={styles.leftSide}>
                    <ScrollView>
                        <View style={styles.cardContent}>
                            <View style={styles.cardInfo}>
                                <Text style={[styles.cardTitle, planType ? planType === 3 ? styles.cardTitlePremiun : planType === 2 ? styles.cardTitlePro : styles.cardTitleBasic : styles.cardTitleBasic]}>{type}</Text>
                                <View style={styles.price}>
                                    <Text style={[styles.priceValue, { color: planType ? planType === 3 ? COLORS.orange : planType === 2 ? COLORS.yellow : COLORS.brown : COLORS.brown }]}>{price}</Text>
                                    <Text style={[styles.priceText, { color: planType ? planType === 3 ? COLORS.orange : planType === 2 ? COLORS.yellow : COLORS.brown : COLORS.brown }]}>/mes</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.rightSide}>
                    <Image style={[styles.image, { top: -120, height: deviceHeight > 700 ? planImageSize.max : planImageSize.min }]} source={planImage} />
                </View>
            </View>
            <View style={[styles.descriptionBox, { marginTop: planType ? planType === 3 ? 5 : planType === 2 ? 5 : 15 : 15 }]}>
                <ScrollView>
                    <View style={{ bottom: 0 }}>
                        {optionList}
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.actions, { backgroundColor: planType ? planType === 3 ? COLORS.dark.brown : planType === 2 ? COLORS.light.superblue : COLORS.orange : COLORS.orange }]}>
                {deviceHeight > 700 && <DefaultButton
                    text={'Regresar'}
                    handlePress={returnEvent}
                    textSize={20}
                    size={"100%"}
                    btnBorderColor={COLORS.white}
                    backgroundColor={COLORS.dark.orange}
                    textColor={COLORS.white}
                    activeOpacity={0.5}
                />}
                {deviceHeight <= 700 && <SmallButton
                    text={'Regresar'}
                    handlePress={returnEvent}
                    textSize={14}
                    size={"100%"}
                    btnBorderColor={COLORS.white}
                    backgroundColor={COLORS.black}
                    textColor={COLORS.white}
                    activeOpacity={0.5}
                />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Basic
    card: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        backgroundColor: "#e2c44c",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        top: 0,
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
        borderColor: COLORS.white,
        borderWidth: 2
    },
    // Pro
    cardPro: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        backgroundColor: COLORS.dark.superblue,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        top: 0,
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
        borderColor: COLORS.white,
        borderWidth: 2
    },
    // Premiun
    cardPremiun: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "100%",
        backgroundColor: "#242424",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        top: 0,
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
        borderColor: COLORS.light.borderColor,
        borderWidth: 2,
        zIndex: 300
    },
    image: {
        width: "100%",
        marginLeft: "auto",
        marginRight: 0,
        zIndex: 200
    },
    descriptionBox: {
        position: "relative",
        height: "100%",
        top: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        verticalAlign: "middle",
        textAlign: "left",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        paddingHorizontal: SIZES.large,
        paddingBottom: SIZES.base,
        paddingTop: 20
    },
    leftSide: {
        width: "50%",
        height: "auto"
    },
    rightSide: {
        width: "50%",
        height: "auto"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        verticalAlign: "top",
        alignContent: "flex-start"
    },
    cardTitleBasic: {
        color: COLORS.dark.orange,
        textShadowColor: COLORS.dark.borderColor
    },
    cardTitlePro: {
        color: COLORS.yellow,
        textShadowColor: COLORS.dark.orange
    },
    cardTitlePremiun: {
        color: COLORS.orange,
        textShadowColor: COLORS.brown
    },
    cardTitle: {
        fontFamily: FONTS.title,
        fontSize: 24,
        color: COLORS.yellow,
        elevation: 7,
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 2.22,
    },
    cardInfo: {
        top: 10,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start"
    },
    cardBody: {
        top: 0,
        width: "100%",
        height: 150,
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        alignContent: "flex-start",
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.base,
        margin: 0,
        padding: 0
    },
    descriptionBasic: {
        color: COLORS.brown,
        fontSize: 18
    },
    descriptionPro: {
        color: COLORS.white,
        fontSize: 16
    },
    descriptionPremiun: {
        color: COLORS.yellow,
        fontSize: 16,
        lineHeight: 25
    },
    description: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        fontWeight: "400",
        color: COLORS.divider,
        lineHeight: 24,
        textAlign: "left",
        left: 0,
        position: "relative"
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
    actions: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        bottom: 0,
        top: "auto",
        position: "absolute",
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.large,
        backgroundColor: COLORS.black,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    actionsPro: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        bottom: 0,
        top: "auto",
        position: "absolute",
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.large,
        backgroundColor: COLORS.black,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    actionsPremiun: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        bottom: 0,
        top: "auto",
        position: "absolute",
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.large,
        backgroundColor: COLORS.black,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});