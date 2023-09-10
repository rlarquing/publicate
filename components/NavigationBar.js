import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import { assets, COLORS, globals } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";


const NavigationBar = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.navIcon, route.name === 'Profile' ?
                {
                    borderBottomWidth: 4,
                    borderBottomColor: COLORS.yellow,
                    borderBottomStartRadius: 2,
                    borderBottomEndRadius: 2
                } : {}]} onPress={() => navigation.navigate("Profile")} activeOpacity={0.5}>
                <Image style={styles.image} source={route.name === 'Profile' ? assets.profile_active : assets.profile} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navHomeIcon} onPress={() => navigation.navigate("Home", { refresh: true })} activeOpacity={0.5}>
                <Image style={styles.image} source={route.name === 'Home' ? assets.home_active : assets.home} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navIcon, route.name === 'Settings' ?
                {
                    borderBottomWidth: 4,
                    borderBottomColor: COLORS.yellow,
                    borderBottomStartRadius: 2,
                    borderBottomEndRadius: 2
                } : {}]} onPress={() => navigation.navigate("Settings")} activeOpacity={0.5}>
                <Image style={styles.image} source={route.name === 'Settings' ? assets.settings_active : assets.settings} />
            </TouchableOpacity>
            {!globals.NETWORK_CONNECTED &&
                <View style={styles.indicator}>
                    <Text style={{ color: COLORS.white, fontSize: 8 }}>No hay conexion!</Text>
                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        verticalAlign: "middle",
        width: "auto",
        height: 40,
        maxHeight: 40,
        zIndex: 900,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.95,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        paddingLeft: 20,
        paddingRight: 20,
        borderTopColor: "#F0F0F0",
        borderTopWidth: 1,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 5,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        backgroundColor: COLORS.orange,
        position: 'absolute',
    },
    indicator: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        verticalAlign: "middle",
        width: "55%",
        height: 15,
        maxHeight: 15,
        zIndex: 80,
        top: -15,
        left: 0,
        marginLeft: 0,
        right: 0,
        opacity: 0.95,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        position: 'absolute',
        backgroundColor: COLORS.red,
    },
    image: {
        width: 32,
        height: 32
    },
    navIcon: {
        width: 32,
        height: 32
    },
    navHomeIcon: {
        width: 55,
        height: 55,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        top: -10,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: COLORS.orange,
        borderWidth: 2,
        zIndex: 100
    }
});

export default NavigationBar;