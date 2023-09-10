import { View, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const Line = ({ size, weight, ...props }: any) => {
    return (
        <View style={[styles.line, { width: size, height: weight, ...props }]} ></View>
    );
};

const styles = StyleSheet.create({
    line: {
        width: "100%",
        height: 1,
        backgroundColor: COLORS.divider,
        marginTop: 5,
        marginBottom: 5,
    }
});