import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, StyleSheetProperties } from "react-native";
import { assets, COLORS, SIZES, FONTS, SHADOWS } from "../constants";

interface dobleBtnProps {
  leftText: string,
  rightText: string,
  leftTextColor: string,
  rightTextColor: string,
  leftBackgroundColor?: string,
  rightBackgroundColor?: string,
  leftHandlePress: () => void,
  rightHandlePress: () => void,
  size: any,
  leftSize: any,
  rightSize: any,
  leftTextSize: number,
  rightTextSize: number,
  props?: StyleSheetProperties
}

export const DobleButton = ({
  leftText,
  rightText,
  leftTextColor,
  rightTextColor,
  leftBackgroundColor,
  rightBackgroundColor,
  leftHandlePress,
  rightHandlePress,
  size,
  leftSize,
  rightSize,
  leftTextSize,
  rightTextSize,
  ...props
}: any) => {
  const [active, setActive] = useState(false);

  return (
    <View style={[
      styles.dobleBtn,
      {
        width: size,
        ...props
      }]}>
      <TouchableOpacity
        style={[active ? styles.firstBtnActive : styles.firstBtn]}
        onPress={leftHandlePress}
        activeOpacity={0.5}
        onPressIn={() => { setActive(true) }}
        onPressOut={() => { setActive(false) }}
      >
        <Text style={[styles.firstBtnText, { color: leftTextColor, fontSize: leftTextSize ? leftTextSize : 10 }]}>{leftText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[active ? styles.secondBtnActive : styles.secondBtn]}
        onPress={rightHandlePress}
        activeOpacity={0.5}
        onPressIn={() => { setActive(true) }}
        onPressOut={() => { setActive(false) }}
      >
        <Text style={[styles.secondBtnText, { color: rightTextColor, fontSize: rightTextSize ? rightTextSize : 16 }]}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dobleBtn: {
    borderRadius: 8,
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    verticalAlign: "middle",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: COLORS.dark.primary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2.84,
    elevation: 5,
    position: "relative"
  },
  firstBtn: {
    width: "55%",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: "row"
  },
  firstBtnActive: {
    width: "55%",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: "row"
  },
  secondBtn: {
    width: "45%",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2.84,
    elevation: 5,
    display: 'flex',
    flexDirection: "row"
  },
  secondBtnActive: {
    width: "45%",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: -2,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.84,
    elevation: 2,
    display: 'flex',
    flexDirection: "row"
  },
  firstBtnText: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 12,
    fontFamily: "Helvetica",
    fontWeight: "400",
    color: COLORS.black
  },
  secondBtnText: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "400",
    color: COLORS.white
  },
});