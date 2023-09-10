import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS, SIZES } from "../constants";

export const DefaultLink = ({ text, textColor, imgUrl, imgSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: SIZES.base,
        paddingBottom: SIZES.base,
        paddingRight: 0,
        ...props,
      }}
      onPress={handlePress}
    >
      {imgUrl && <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: imgSize, height: imgSize }}
      />}
      <Text style={{
        color: textColor ? textColor : COLORS.white,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontWeight: '500',
        paddingLeft: SIZES.large,
        paddingRight: 0,
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 1,
        paddingBottom: 8,
        width: '85%',
        ...props,
      }}>{text}</Text>
    </TouchableOpacity>
  );
};
