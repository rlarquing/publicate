import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, assets } from "../constants";

const deviceHeight = Dimensions.get('window').height;

export const DefaultInput = ({ text, placeholder, textColor, handleTyping, size, textSize, icon, iconColor, iconSize, marginBottom, type, ...props }: any) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
        <View style={[styles.inputView, { width: size, marginBottom: marginBottom, ...props }]}>
            <Image style={[styles.iconInput, { tintColor: iconColor ? iconColor : COLORS.black }]} width={iconSize ? iconSize : 20} height={iconSize ? iconSize : 20} source={icon} />
            <TextInput
                style={[styles.textInput, { color: textColor ? textColor : COLORS.black, fontSize: textSize }]}
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholderTextColor}
                secureTextEntry={type && type === "password" ? showPassword : false}
                onChangeText={(text) => handleTyping(text)}
                textContentType={type}
                cursorColor={COLORS.primary}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {type && type === "password" && <Image style={styles.iconAction} width={iconSize ? iconSize : 20} height={iconSize ? iconSize : 20} source={showPassword ? assets.hide_password_icon : assets.show_password_icon} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: COLORS.light.inputBackground,
        borderRadius: 8,
        borderColor: COLORS.light.inputBorder,
        borderWidth: 1,
        width: "90%",
        height: deviceHeight > 700 ? 38 : 34,
        alignItems: "flex-start",
        color: COLORS.light.textGray,
        display: "flex",
        flexDirection: "row"
    },
    textInput: {
        flex: 1,
        padding: 5,
        marginLeft: 15,
        fontSize: deviceHeight > 700 ? 16 : 14,
        color: COLORS.light.textSecondary,
        fontFamily: FONTS.regular,
        fontWeight: "300"
    },
    iconInput: {
        width: 20,
        height: 20,
        left: 10,
        top: 8,
        tintColor: COLORS.light.textGray
    },
    iconAction: {
        width: 20,
        height: 20,
        right: 10,
        top: 8,
        tintColor: COLORS.light.textGray
    }
});