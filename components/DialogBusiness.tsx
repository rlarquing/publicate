import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, Easing } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { DefaultInput } from "./Input";
import { Line } from "./Line";

let { height, width } = Dimensions.get("window");

export const DialogBusiness = ({ open, setOpen, avatar, title, image, address, time, backColor, options = [] }: any) => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('');
  const [optionsFilter, setOptionsFilter] = useState(options);
  const [label, setLabel] = useState("");

  const bottom = useRef(new Animated.Value((height - 80))).current;
  const top = useRef(new Animated.Value((height - 80))).current;

  const optionsList = optionsFilter.map((itemObj: any, index: number) =>
    <View style={styles.section} key={index}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => { }}
      >
        {/* <Text style={{ color: value && itemObj.label === JSON.parse(value).label ? COLORS.dark.orange : COLORS.black }}>
          {index + 1}- {itemObj.label}
        </Text> */}
      </TouchableOpacity>
    </View >
  );

  const filterSelect = (newValue: string) => {
    setFilter(newValue);
    if (newValue && newValue !== "") {
      let newValues = options.filter((itemObj: any, index: number) => {
        return itemObj.label.indexOf(filter) !== -1;
      });
      setOptionsFilter(newValues);
    } else {
      setOptionsFilter(options);
    }
  }

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
            <Text style={styles.text}>Regresar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <Image style={styles.avatar} source={avatar} />
          <Text style={styles.title}>{title}</Text>
          <Line size={"95%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={"#F0F0F0"} />
          <ScrollView persistentScrollbar={true}>
            <View style={styles.scrollArea}>
              <View style={styles.scrollItems}>
                {optionsList}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Animated.View>
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
    width: '102%',
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
    width: "85%",
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: SIZES.base,
    paddingRight: SIZES.base,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
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
    flex: 1,
    width: '100%',
    color: COLORS.light.textDarkGray,
    height: 30,
    top: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: height > 700 ? 16 : 12,
    fontWeight: '400',
    textShadowColor: COLORS.shadow,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2.22,
    position: 'absolute'
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
    color: COLORS.dark.orange,
    fontSize: height > 700 ? 14 : 12,
    zIndex: 900,
  },
  list: {
    top: 38,
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
    width: "80%",
    position: "relative"
  },
  scrollArea: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
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
    width: 148,
    height: 148,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: -30,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 8,
    borderColor: COLORS.white,
    borderRadius: 150,
    zIndex: 300,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.42,
    shadowRadius: 2.22
  },
});