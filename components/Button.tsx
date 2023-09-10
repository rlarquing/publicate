import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { assets, COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, imgSize, handlePress, ...props }: any) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: imgSize, height: imgSize }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Ver más
      </Text>
    </TouchableOpacity>
  );
};

export const SearchButton = ({ fontSize, handlePress, ...props }: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        width: 66,
        height: 66,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image style={styles.image} source={assets.search} />
    </TouchableOpacity>
  );
};

export const RoundedButton = ({ text, textColor, handlePress, icon, iconSize, size, btnBorderColor, textSize, ...props }: any) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={[
        active ? styles.roundedBtnActive : styles.roundedBtn,
        {
          width: size,
          borderColor: btnBorderColor,
          ...props
        }]}
      onPress={handlePress}
      activeOpacity={0.5}
      onPressIn={() => { setActive(true) }}
      onPressOut={() => { setActive(false) }}
    >
      <View style={[styles.btnIconCircle, { borderColor: btnBorderColor }]}>
        <Image style={[styles.btnIcon, { width: iconSize, height: iconSize }]} source={icon} />
      </View>
      <Text style={[styles.btnText, { color: textColor, fontSize: textSize ? textSize : 16 }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const SmallRoundedButton = ({ text, textColor, handlePress, icon, iconSize, size, btnBorderColor, textSize, ...props }: any) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={[
        active ? styles.roundedBtnActive : styles.roundedBtn,
        {
          width: size,
          borderColor: btnBorderColor,
          height: 40,
          borderRadius: 20,
          ...props
        }]}
      onPress={handlePress}
      activeOpacity={0.5}
      onPressIn={() => { setActive(true) }}
      onPressOut={() => { setActive(false) }}
    >
      <View style={[styles.btnIconCircle, { borderColor: btnBorderColor, borderRadius: 20, width: 38, height: 38, }]}>
        <Image style={[styles.btnIcon, { width: iconSize, height: iconSize }]} source={icon} />
      </View>
      <Text style={[styles.btnText, { color: textColor, fontSize: textSize ? textSize : 14 }]}>{text}</Text>
    </TouchableOpacity>
  );
};


export const DefaultButton = ({ text, textColor, handlePress, size, btnBorderColor, textSize, ...props }: any) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={[
        active ? styles.defaultBtnActive : styles.defaultBtn,
        {
          width: size,
          ...props
        }]}
      onPress={handlePress}
      activeOpacity={0.5}
      onPressIn={() => { setActive(true) }}
      onPressOut={() => { setActive(false) }}
    >
      <Text style={[styles.btnText, { color: textColor, fontSize: textSize ? textSize : 16 }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const SmallButton = ({ text, textColor, handlePress, size, btnBorderColor, textSize, ...props }: any) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={[
        active ? styles.defaultBtnActive : styles.defaultBtn,
        {
          width: size,
          height: 28,
          borderRadius: 5,
          ...props
        }]}
      onPress={handlePress}
      activeOpacity={0.5}
      onPressIn={() => { setActive(true) }}
      onPressOut={() => { setActive(false) }}
    >
      <Text style={[styles.btnText, { color: textColor, fontSize: textSize ? textSize : 14 }]}>{text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  roundedBtn: {
    borderRadius: 25,
    height: 50,
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
    borderWidth: 2,
    display: 'flex',
    flexDirection: "row",
  },
  roundedBtnActive: {
    borderRadius: 25,
    height: 50,
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
  defaultBtn: {
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
    flexDirection: "row",
  },
  defaultBtnActive: {
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
  btnText: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    fontFamily: "Helvetica",
    fontWeight: "400"
  },
  btnIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 2,
    left: -2,
    top: -1,
    position: 'absolute',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    verticalAlign: "middle",
    textAlign: 'justify',
    justifyContent: "center",
  },
  btnIcon: {},
});