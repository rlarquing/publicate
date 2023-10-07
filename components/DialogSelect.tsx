import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, Easing } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import Checkbox from 'expo-checkbox';
import { DefaultInput } from "./Input";
import { Line } from "./Line";

let { height, width } = Dimensions.get("window");

export const DialogSelect = ({ showDialog, value, setValue, options = [], title }: any) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [optionsFilter, setOptionsFilter] = useState(options);
  const [label, setLabel] = useState("");

  const bottom = useRef(new Animated.Value((height - 80))).current;
  const top = useRef(new Animated.Value((height - 80))).current;

  const emitNewValue = (itemObj: any) => {
    setLabel(itemObj.label);
    // setActive(false);
    // console.log("Hola: ", itemObj, value);
    setValue(JSON.stringify(itemObj));
    showDialog(false);
  }

  const optionsList = optionsFilter.map((itemObj: any, index: number) =>
    <View style={styles.section} key={index}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => emitNewValue(itemObj)}
      >
        <Text style={{ color: value && itemObj.label === JSON.parse(value).label ? COLORS.dark.orange : COLORS.black }}>
          {index + 1}- {itemObj.label}
        </Text>
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
    <Animated.View style={[styles.container, {
      transform: [{
        translateY: open ? bottom : top,
      }],
    }]} >
      <View style={styles.header} >
        <TouchableOpacity style={styles.goBackBtn} onPress={() => { closeEvt() }}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Line size={"95%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={"#F0F0F0"} />
      <View style={styles.wrapper}>
        <ScrollView persistentScrollbar={true}>
          <View style={styles.scrollArea}>
            <View style={styles.scrollItems}>
              <DefaultInput
                icon={assets.money_bag_icon}
                size={"95%"}
                type={"name"}
                marginBottom={height > 700 ? 20 : 10}
                text={filter}
                placeholder={"Buscar..."}
                handleTyping={filterSelect}
              />
              {optionsList}
            </View>
          </View>
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export const DialogSelectMultiple = ({ value, setValue, options = [], title }: any) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [optionsFilter, setOptionsFilter] = useState(options);
  const [label, setLabel] = useState("");
  let optionsChecked: number[] = [];

  const bottom = useRef(new Animated.Value((height - 80))).current;
  const top = useRef(new Animated.Value((height - 80))).current;

  const emitNewValue = (value: boolean, index: number, itemText: string) => {
    setLabel(itemText);
    // setActive(false);
    console.log("Hola: ", optionsChecked)
    if (value) {
      optionsChecked.push(index);
    } else {
      let idx = optionsChecked.indexOf(index);
      optionsChecked.splice(idx, 1);
    }
    console.log("optionsChecked: ", optionsChecked);
  }

  const optionsList = optionsFilter.map((itemObj: any, index: number) =>
    <View style={styles.section} key={index}>
      <Checkbox
        style={styles.item}
        value={optionsChecked.indexOf(index) !== -1}
        onValueChange={(value) => { emitNewValue(value, index, itemObj.value) }}
        color={optionsChecked.indexOf(index) !== -1 ? '#000000' : undefined}
      />
      <Text style={styles.item}>
        {index + 1}- {itemObj.label}
      </Text>
    </View >
  );

  const filterSelect = (newValue: string) => {
    setFilter(newValue);
    if (newValue && newValue !== "") {
      let newValues = options.filter((itemObj: any, index: number) => {
        return itemObj.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
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
    <Animated.View style={[styles.container, {
      transform: [{
        translateY: open ? bottom : top,
      }],
    }]} >
      <View style={styles.header} >
        <TouchableOpacity style={styles.goBackBtn} onPress={() => { closeEvt() }}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Line size={"95%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={"#F0F0F0"} />
      <View style={styles.wrapper}>
        <ScrollView persistentScrollbar={true}>
          <View style={styles.scrollArea}>
            <View style={styles.scrollItems}>
              <DefaultInput
                icon={assets.money_bag_icon}
                size={"95%"}
                type={"name"}
                marginBottom={height > 700 ? 20 : 10}
                text={filter}
                placeholder={"Buscar..."}
                handleTyping={filterSelect}
              />
              {optionsList}
            </View>
          </View>
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
    top: 40,
    bottom: 0,
    paddingBottom: 30,
    ...SHADOWS.card
  },
  wrapper: {
    width: "85%",
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: SIZES.base,
    paddingRight: SIZES.base,
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
});