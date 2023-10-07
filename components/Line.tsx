import { View, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const Line = ({ size, weight, color, ...props }: any) => {
    return (
        <View style={[styles.line, { width: size, height: weight, backgroundColor: color ? color : COLORS.divider, ...props }]} ></View>
    );
};

const styles = StyleSheet.create({
    line: {
        width: "100%",
        height: 1,
        marginTop: 5,
        marginBottom: 5,
    }
});