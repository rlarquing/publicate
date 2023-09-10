import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, Easing } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

let { height, width } = Dimensions.get("window");

const Dialog = ({ children, handleBack, title }) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const bottom = useRef(new Animated.Value((height - 80))).current;
  const top = useRef(new Animated.Value((height - 80))).current;

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
        <TouchableOpacity style={styles.goBackBtn} onPress={() => { closeEvt(); handleBack() }}>
          <Image source={assets.go_back_icon} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
      <View style={styles.bottomWave}>
        <Image style={styles.bottomWaveImage} source={assets.bottom_wave} />
      </View>
      <Image style={styles.background} source={assets.gradient_background} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    zIndex: 300,
    margin: 0,
    padding: 0,
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    top: 60,
    bottom: 0,
    paddingBottom: 30,
    ...SHADOWS.card
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
    width: 48,
    height: 48,
    top: 5,
    left: 20,
    zIndex: 300,
  },
  goBackIcon: {
    width: 48,
    height: 48,
  }
});


export default Dialog;