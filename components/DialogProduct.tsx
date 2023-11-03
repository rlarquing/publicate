import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, Easing } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { Line } from "./Line";
import { DefaultBadge, RatingBadge } from "./RatingBadge";

let { height, width } = Dimensions.get("window");

export const DialogProduct = ({ open, setOpen, avatar, image, rate, title, available, homeService, name, address, description, time, price, backColor }: any) => {
  const navigation = useNavigation();

  const bottom = useRef(new Animated.Value((height - 80))).current;
  const top = useRef(new Animated.Value((height - 80))).current;
  console.log("Hola: ", name);

  // const productsList = products.map((item: any, index: number) =>
  //   <ProductCard style={styles.section} key={index} image={item.image} title={item.price} description={item.description} />
  // );

  useEffect(() => {
    setOpen(true);
    Animated.timing(bottom, {
      toValue: 0,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [bottom]);

  const closeEvt = () => {
    Animated.timing(bottom, {
      toValue: top,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setOpen(false);
  };

  return (
    <Animated.View style={[styles.page, {
      transform: [{
        translateY: open ? bottom : top,
      }],
      backgroundColor: backColor
    }]} >
      <View style={styles.back} ></View>
      <View style={styles.container} >
        <View style={styles.header} >
          <TouchableOpacity style={styles.goBackBtn} onPress={() => { closeEvt() }}>
            <Text style={styles.returnText}>Regresar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.carousel}>
            <View style={styles.imageBox}>
              <Image style={styles.image} source={image} />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <TouchableOpacity style={[styles.circle, { opacity: 0.5 }]} onPress={() => console.log("Hola 1")} />
              <TouchableOpacity style={styles.circle} onPress={() => console.log("Hola 2")} />
              <TouchableOpacity style={[styles.circle, { opacity: 0.5 }]} onPress={() => console.log("Hola 3")} />
            </View>
          </View>
          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: "100%" }}>
              <Line size={"100%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={COLORS.primary} top={8} marginBottom={25} />
              <DefaultBadge size={90} weight={25} color={COLORS.primary} value={price} marginLeft={"auto"} textSize={10} right={0} top={0} />
            </View>
            <View style={styles.description}>
              <Text style={[styles.text, { marginBottom: 10, minHeight: 80 }]}>{description}</Text>
              <Text style={styles.label}>DISPONIBLE: {available ? available : "No"}</Text>
              <Text style={styles.label}>DOMICILIO: {homeService ? "Si" : "No"}</Text>
              <View style={[styles.section, { marginTop: 10, backgroundColor: COLORS.orange, height: 30 }]}>
                <Text style={{ marginLeft: "auto", marginRight: "auto" }}>Vienen más unidades en camino</Text>
              </View>
              <Line size={"100%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={COLORS.primary} top={-5} />
              <Text style={styles.label}>DISTRIBUIDO POR:</Text>
              <View style={styles.scrollArea}>
                <View style={styles.cardContent}>
                  <View style={styles.leftSide}>
                    <View style={styles.miniCardAvatar}>
                      <Image style={styles.avatar} source={avatar} />
                    </View>
                    <RatingBadge size={50} weight={25} color={COLORS.primary} value={rate} top={65} iconSize={12} textSize={10} />
                  </View>
                  <View style={styles.middleSide}>
                    <Text style={styles.cardTitle}>{name}</Text>
                    <Text style={styles.address}>{address}</Text>
                  </View>
                  <View style={styles.rightSide}>
                    <Text style={styles.time}>{time}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Animated.View >
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: '85%',
    backgroundColor: COLORS.white,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    position: 'absolute',
    zIndex: 700,
    marginVertical: 0,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 0,
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    top: 0,
    bottom: 0,
    borderWidth: 1,
    borderColor: COLORS.white,
    paddingBottom: 30,
    ...SHADOWS.card
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    position: 'absolute',
    zIndex: 700,
    margin: 0,
    padding: 0,
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    top: 10,
    bottom: 0,
    borderWidth: 1,
    borderColor: COLORS.white,
    paddingBottom: 30,
    ...SHADOWS.card
  },
  page: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    position: 'absolute',
    zIndex: 700,
    margin: 0,
    padding: 0,
    top: 0,
    left: -1,
    bottom: 0,
    paddingBottom: 30
  },
  wrapper: {
    flex: 1,
    width: "85%",
    top: 0,
    position: "relative",
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: SIZES.base,
    paddingRight: SIZES.base,
    textAlign: 'center',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 300
  },
  header: {
    flex: 1,
    width: '100%',
    height: 50,
    maxHeight: 50,
    top: 0,
    zIndex: 300,
    // backgroundColor: '#FF0000'
  },
  title: {
    width: '100%',
    color: COLORS.primary,
    height: 30,
    top: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: height > 700 ? 18 : 16,
    fontWeight: '400',
    textShadowColor: COLORS.shadow,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2.22,
    fontFamily: FONTS.title,
  },
  label: {
    width: '100%',
    color: COLORS.light.textGray,
    height: 25,
    textAlign: 'left',
    alignItems: "center",
    justifyContent: "center",
    fontSize: height > 700 ? 16 : 14,
    fontWeight: '800',
    fontFamily: FONTS.regular
  },
  background: {
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    top: 0,
    width: '100%',
    height: '100%',
    padding: 0,
    opacity: 0.5
  },
  bottomWave: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: 280,
    position: "absolute",
    zIndex: 100,
    bottom: -120
  },
  bottomWaveImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
  },
  goBackBtn: {
    width: 80,
    height: 80,
    top: 15,
    left: 15,
    zIndex: 300,
  },
  goBackIcon: {
    width: 48,
    height: 48,
  },
  text: {
    fontFamily: FONTS.regular,
    fontWeight: "400",
    fontSize: height > 700 ? 14 : 12,
    zIndex: 900,
    width: '100%',
    color: COLORS.black
  },
  list: {
    top: 0,
    width: "95%",
    backgroundColor: COLORS.white,
    height: 150,
    position: "absolute",
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: COLORS.light.borderColor,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  item: {
    fontFamily: FONTS.regular,
    color: COLORS.black,
    paddingHorizontal: 10,
    paddingBottom: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light.borderColor,
  },
  checkbox: {
    margin: 8,
    borderColor: COLORS.white
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    position: "relative"
  },
  scrollArea: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  scrollItems: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    bottom: 0,
    marginBottom: 20,
    height: "auto",
    marginHorizontal: 10
  },
  avatar: {
    width: 78,
    height: 78,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50
  },
  description: {
    position: "relative",
    top: 0,
    justifyContent: "flex-start",
    width: "100%",
    height: 300
  },
  returnText: {
    fontFamily: FONTS.regular,
    fontWeight: "400",
    color: COLORS.dark.orange,
    fontSize: height > 700 ? 14 : 12,
    zIndex: 900,
  },
  showMoreBtn: {
    marginRight: 0,
    marginLeft: "auto",
    width: 80,
    zIndex: 300,
  },
  image: {
    width: "100%",
    height: height > 700 ? 140 : 96,
    marginLeft: "auto",
    marginRight: 0,
    position: "relative",
    zIndex: 200
  },
  imageBox: {
    top: 0,
    width: "100%",
    height: "auto",
    borderWidth: 5,
    borderColor: COLORS.white,
    position: "relative",
    marginBottom: 10,
    ...SHADOWS.dark
  },
  carousel: {
    flex: 1,
    maxHeight: 190,
    top: 0,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  information: {
    flex: 1,
    width: "100%",
    height: "auto",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: COLORS.red
  },

  miniCardImageBox: {
    width: "100%",
    height: 150,
    top: 0,
    position: "absolute",
    zIndex: 500
  },
  miniCardImage: {
    width: "100%",
    height: height > 700 ? 140 : 96,
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
    borderLeftWidth: 1,
    borderLeftColor: COLORS.light.borderColor,
    paddingLeft: 5
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    verticalAlign: "top",
    alignContent: "flex-start"
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
    color: COLORS.black,
    lineHeight: 18,
    textAlign: "center"
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
  circle: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginHorizontal: 5
  }
});