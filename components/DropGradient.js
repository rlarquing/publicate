import React from "react";
import {
    StyleSheet,
    View,
    Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { assets } from "../constants";

const DropGradient = () => {
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Image
          source={assets.gradient}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%"
          }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        height: 155,
        minHeight: 155,
        top: 0,
        left: 0,
        right: 0,
        opacity: 0.95,
        zIndex: 1,
    },
});

export default DropGradient;