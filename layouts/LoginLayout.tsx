import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions
} from "react-native";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";

const deviceWidth = Dimensions.get('window').width;

const LoginLayout = ({ children }: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.primary }}>
            <FocusedStatusBar background={COLORS.black} />
            <View style={styles.header}>
                <Text style={styles.logo}>Publicate</Text>
            </View>
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
        top: 120,
        bottom: 0
    },
    header: {
        width: "100%",
        height: 100,
        zIndex: 100,
        top: 0
    },
    image: {
        marginTop: 0,
        marginBottom: 0,
        width: 216,
        height: 256,
    },
    logo: {
        top: 40,
        width: "100%",
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        textAlign: "center",
        color: COLORS.primary,
        fontFamily: "Impact",
        fontSize: 36
    },
    background: {
        top: "35%",
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: COLORS.accent,
        borderTopLeftRadius: SIZES.large,
        borderTopRightRadius: SIZES.large
    },
});

export default LoginLayout;