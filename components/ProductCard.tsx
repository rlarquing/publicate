import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";
import { FavoriteBadge } from "./RatingBadge";

const deviceHeight = Dimensions.get('window').height;

const ProductCard = ({ handlePress, title, image, description, rate }: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={handlePress} activeOpacity={1}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image style={styles.image} source={image} />
            <FavoriteBadge size={24} color={COLORS.primary} value={rate} left={"70%"} top={"60%"} />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: "85%",
    top: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5
  },
  cardContainer: {
    flex: 1,
    width: 150,
    height: "auto",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginRight: 10
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 270,
    maxHeight: 270,
    backgroundColor: "#FDFDFD",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-start",
    top: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: SIZES.base,
    padding: SIZES.medium,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 7,
    // position: "absolute",
    zIndex: 200
  },
  imageBox: {
    width: "100%",
    height: 180,
    top: 0,
    position: "absolute",
    zIndex: 500
  },
  image: {
    width: "100%",
    height: 180,
    top: 0,
    marginLeft: "auto",
    marginRight: 0,
    marginBottom: 10,
    zIndex: 200
  },
  leftSide: {
    width: "70%"
  },
  rightSide: {
    width: "30%"
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    verticalAlign: "top",
    alignContent: "flex-start"
  },
  cardTitle: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "900"
  },
  description: {
    width: "100%",
    fontFamily: FONTS.regular,
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.black,
    lineHeight: 12,
    textAlign: "left"
  },
  avatar: {
    width: 86,
    height: 86,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 5,
    borderColor: COLORS.white,
    borderRadius: 50,
    zIndex: 300
  },
});


export default ProductCard;