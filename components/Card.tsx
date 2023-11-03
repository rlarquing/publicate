import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";
import { Line } from "./Line";
import { RatingBadge } from "./RatingBadge";

const deviceHeight = Dimensions.get('window').height;

const Card = ({ handlePress, avatar, title, image, address, time, rate }: any) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity style={styles.cardContainer} onPress={handlePress} activeOpacity={1}>
        <View style={styles.avatarBox}>
        <Image style={styles.avatar} source={avatar} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image style={styles.image} source={image} />
            <RatingBadge size={75} weight={35} color={COLORS.primary} value={rate} left={"70%"} top={"60%"}/>
            <Text style={styles.cardTitle}>{title}</Text>
            <Line size={"100%"} weight={1} />
            <Text style={styles.address}>{address}</Text>
            <Text style={styles.time}>{time}</Text>
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
    bottom: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    height: "auto",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.white,
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-start",
    top: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: SIZES.base,
    padding: SIZES.large,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // position: "absolute",
    zIndex: 200
  },
  imageBox: {
    width: "100%",
    height: 150,
    top: 0,
    position: "absolute",
    zIndex: 500
  },
  image: {
    width: "100%",
    height: deviceHeight > 700 ? 140 : 96,
    top: 20,
    marginLeft: "auto",
    marginRight: 0,
    marginBottom: 30,
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
    color: COLORS.black
  },
  address: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    fontWeight: "400",
    color: COLORS.black,
    lineHeight: 12,
    textAlign: "justify"
  },
  time: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.black,
    lineHeight: 18,
    textAlign: "justify"
  },
  avatar: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50
  },
  avatarBox: {
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
    zIndex: 300,
    ...SHADOWS.dark
  },
});


export default Card;