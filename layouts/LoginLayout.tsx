import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Dimensions
} from "react-native";
import { assets, COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../components/FocusedStatusBar";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LoginLayout = ({ children }: any) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.black} />
            <View style={styles.topWave}>
                <Image style={styles.logo} source={assets.logo} />
                <Image style={styles.topWaveImage} source={assets.layout_top_wave} />
                <Text style={styles.title}>MONEDERO DE TRANSPAGO</Text>
            </View>
            <View style={styles.container}>
                {children}
            </View>
            <View style={styles.bottomWave}>
                <Image style={styles.bottomWaveImage} source={assets.bottom_wave} />
            </View>
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
        borderTopLeftRadius: SIZES.extraLarge,
        borderTopRightRadius: SIZES.extraLarge,
        top: 120,
        bottom: 0,
    },
    topWave: {
        width: deviceWidth,
        height: 280,
        position: "absolute",
        zIndex: 100,
        top: 0
    },
    topWaveImage: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
    },
    bottomWave: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: deviceWidth,
        height: 280,
        position: "absolute",
        zIndex: 1,
        bottom: -80,
        opacity: 0.5,
        // backgroundColor: '#FF0000'
    },
    bottomWaveImage: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
    },
    title: {
        flex: 1,
        width: 120,
        color: COLORS.light.textDarkGray,
        height: 30,
        top: 65,
        marginLeft: '66%',
        marginBottom: 10,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: deviceHeight > 700 ? 14 : 10,
        fontWeight: '900',
        textShadowColor: COLORS.shadow,
        textShadowOffset: {
            width: 0,
            height: 1,
        },
        textShadowRadius: 2.22,
    },
    image: {
        marginTop: 0,
        marginBottom: 0,
        width: 216,
        height: 256,
    },
    logo: {
        marginLeft: 30,
        marginTop: 50,
        width: deviceHeight > 700 ? 180 : 140,
        height: deviceHeight > 700 ? 54 : 42,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        top: 0,
        width: '100%',
        height: '100%',
        padding: 0
    },
});

export default LoginLayout;