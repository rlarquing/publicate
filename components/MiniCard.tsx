import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";
import { Line } from "./Line";
import { RatingBadge } from "./RatingBadge";

const deviceHeight = Dimensions.get('window').height;

const MiniCard = ({ handlePress, avatar, title, image, address, time, rate }: any) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity style={styles.cardContainer} onPress={handlePress} activeOpacity={1}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.leftSide}>
              <View style={styles.miniCardAvatar}>
                <Image style={styles.avatar} source={avatar} />
              </View>
              <RatingBadge size={50} weight={25} color={COLORS.primary} value={rate} top={"75%"} iconSize={12} textSize={10} />
            </View>
            <View style={styles.middleSide}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.address}>{address}</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
          <View style={styles.background}></View>
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
    marginBottom: 5
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
    height: 120,
    backgroundColor: COLORS.dark.orange,
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-start",
    top: 0,
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
  background: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    width: "86%",
    height: 120,
    left: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    zIndex: 1,
    marginLeft: 0,
    marginRight: 'auto',
    borderRadius: 20,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  middleSide: {
    width: "50%"
  },
  rightSide: {
    width: "20%",
    height: 90,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    // borderLeftWidth: 1,
    // borderLeftColor: COLORS.light.borderColor,
    // paddingLeft: 5
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    verticalAlign: "top",
    alignContent: "flex-start",
    zIndex: 100
  },
  cardTitle: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.primary,
    textAlign: "center",
    justifyContent: "center"
  },
  address: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    fontWeight: "400",
    color: COLORS.black,
    lineHeight: 12,
    textAlign: "justify",
    paddingHorizontal: 5
  },
  time: {
    top: 0,
    width: "100%",
    fontFamily: FONTS.regular,
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.white,
    lineHeight: 18,
    textAlign: "center"
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
  miniCardAvatar: {
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
    zIndex: 200,
    ...SHADOWS.dark
  },
});


export default MiniCard;