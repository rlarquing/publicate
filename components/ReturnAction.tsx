import React from "react";
import { Dimensions, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get('window').height;

interface btnProps {
    label?: string | number,
    route?: string,
    params?: {},
    props?: [];
}

export const ReturnAction = ({
    label = "Regresar",
    route,
    params,
    ...props
}: any) => {
    const navigation = useNavigation();

    const returnEvent = () => {
        route ? params ? navigation.navigate(route, params) : navigation.navigate(route) : navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={returnEvent}>
                <Text style={[styles.text, { ...props }]}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "auto",
        position: "absolute",
        zIndex: 900
    },
    text: {
        fontFamily: FONTS.regular,
        fontWeight: "400",
        color: COLORS.dark.orange,
        fontSize: deviceHeight > 700 ? 14 : 12,
        zIndex: 900,
    },
});