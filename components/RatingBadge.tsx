import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, assets } from "../constants";

export const RatingBadge = ({ size, weight, color, value, iconSize, textSize, ...props }: any) => {
    return (
        <View style={[styles.badge, { width: size, height: weight, backgroundColor: color ? color : COLORS.divider, ...props }]} >
            <Image style={[styles.icon, { width: iconSize ? iconSize : 20, height: iconSize ? iconSize : 20 }]} source={assets.star} />
            <Text style={[styles.rate, { fontSize: textSize ? textSize : 18 }]}>{value}</Text>
        </View>
    );
};

export const DefaultBadge = ({ size, weight, color, value, textSize, ...props }: any) => {
    return (
        <View style={[styles.badge, { width: size, height: weight, backgroundColor: color ? color : COLORS.divider, ...props }]} >
            <Text style={[styles.rate, { fontSize: textSize ? textSize : 18 }]}>{value}</Text>
        </View>
    );
};

export const FavoriteBadge = ({ size, color, value, ...props }: any) => {
    return (
        <View style={[styles.circle, { width: size, height: size, backgroundColor: color ? color : COLORS.divider, ...props }]} >
            <Image style={styles.iconCircle} source={assets.shield_icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        borderRadius: 25,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: "100%",
        height: 1,
        marginTop: "auto",
        marginBottom: "auto",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 600
    },
    circle: {
        borderRadius: 50,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        width: 24,
        height: 24,
        marginTop: 5,
        marginBottom: 5,
        zIndex: 600
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: COLORS.yellow
    },
    iconCircle: {
        marginLeft: "auto",
        marginRight: "auto",
        top: 2,
        width: 20,
        height: 20,
        tintColor: COLORS.yellow
    },
    rate: {
        left: 5,
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontWeight: "600",
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "center",
        textAlign: "center"
    }
});