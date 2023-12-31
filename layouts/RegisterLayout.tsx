import React from "react";
import {
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
    Image
} from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const deviceWidth = Dimensions.get('window').width;

const RegisterLayout = ({ children, type }: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.primary }}>
            <FocusedStatusBar background={COLORS.black} />
            <View style={styles.header}>
                <Image style={styles.logo} source={assets.inline_logo} width={170} height={30} />
            </View>
            {type !== undefined && <Image style={[styles.image, {
                width: type ? 175 : 160,
                height: type ? 130 : 245
            }]}
                source={type ? assets.man_attention : assets.people_table} width={60} height={230}
            />}
            <View style={styles.container}>
                {children}
            </View>
            <View style={styles.background}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: deviceWidth,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 300,
        margin: 0,
        padding: 0,
        top: 160,
        bottom: 0
    },
    header: {
        width: 190,
        height: 47,
        zIndex: 100,
        marginLeft: "auto",
        marginRight: "auto",
        top: 0
    },
    image: {
        top: 45,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto"
    },
    logo: {
        width: "100%",
        height: "100%",
        top: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        position: "absolute",
        top: "auto",
        bottom: 0,
        width: "100%",
        height: "40%",
        flex: 1,
        backgroundColor: COLORS.accent,
        borderTopLeftRadius: SIZES.large,
        borderTopRightRadius: SIZES.large,
        zIndex: 1
    },
});

export default RegisterLayout;