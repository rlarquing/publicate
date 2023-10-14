import { View, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const Line = ({ size, weight, color, vertical, ...props }: any) => {
    return vertical ? (
        <View style={[styles.verticalLine, { width: weight, height: size, backgroundColor: color ? color : COLORS.divider, ...props }]} ></View>
    ) : (
        <View style={[styles.line, { width: size, height: weight, backgroundColor: color ? color : COLORS.divider, ...props }]} ></View>
    );
};

const styles = StyleSheet.create({
    line: {
        width: "100%",
        height: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    verticalLine: {
        width: 1,
        height: "100%",
        marginLeft: 5,
        marginRight: 5,
    }
});