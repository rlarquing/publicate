import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import Dialog from "./Dialog";

const About = ({ handleBack }) => {
  const navigation = useNavigation();

  return (
    <Dialog title={'ACERCA DE'} handleBack={handleBack} children={
      <View
        style={styles.page}
      >
        <View
          style={styles.content}
        >
          <Text>Desarrollado por Geomix 2023</Text>
        </View>
      </View>
    }
    />
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    zIndex: 300,
    margin: 0,
    padding: 0,
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    zIndex: 300,
    margin: 0,
    padding: 0,
    top: 0,
    bottom: 0,
  },
});


export default About;