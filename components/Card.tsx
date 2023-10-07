import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS, assets } from "../constants";
import { DefaultButton } from "./Button";

const Card = ({ data, handlePress, handlePay, handleRecharge }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.card}>
          <View style={styles.leftSide}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Cliente</Text>
              <Text style={styles.description}>Cree una cuenta para acceder a todos los negocios registrados en Publicate, usted podrá encontrar los productos y servicios que desee.</Text>
              <Line size={"100%"} weight={1} />
              {deviceHeight > 700 && <DefaultButton
                text={'Continuar'}
                handlePress={loginEvent}
                textSize={20}
                size={"100%"}
                btnBorderColor={COLORS.white}
                backgroundColor={COLORS.primary}
                textColor={COLORS.white}
                marginTop={5}
                activeOpacity={0.5}
              />}
              {deviceHeight <= 700 && <SmallButton
                text={'Continuar'}
                handlePress={loginEvent}
                textSize={14}
                size={"100%"}
                marginTop={5}
                btnBorderColor={COLORS.white}
                backgroundColor={COLORS.primary}
                textColor={COLORS.white}
                activeOpacity={0.5}
              />}
            </View>
          </View>
          <View style={styles.rightSide}>
            <Image style={styles.image} source={assets.standing_people} />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.actions}>
        <DefaultButton
          text={'Pagar'}
          handlePress={handlePay}
          icon={assets.qr_scan_icon}
          iconSize={24}
          size={140}
          btnBorderColor={COLORS.black}
          backgroundColor={COLORS.cream}
          textColor={COLORS.black}
        />
        <DefaultButton
          text={'Recargar'}
          handlePress={handleRecharge}
          icon={assets.money_bag_icon}
          iconSize={24}
          size={140}
          btnBorderColor={COLORS.black}
          backgroundColor={COLORS.orange}
          textColor={COLORS.black}
          marginRight={0}
          marginLeft={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 300,
    height: 240,
    bottom: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    margin: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    width: 300,
    height: 185,
    zIndex: 50,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 5,
      height: 7,
    },
    shadowOpacity: 2.42,
    shadowRadius: 2.22,
    top: 0,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 180,
    position: 'relative',
    zIndex: 200,
  },
  info: {
    top: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 185,
    position: 'absolute',
    zIndex: 250,
  },
  cardNumber: {
    flex: 1,
    fontSize: 18,
    fontWeight: 900,
    left: 85,
    top: 149,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 20,
    zIndex: 251,
    position: 'absolute',
  },
  actions: {
    top: 190,
    bottom: 0,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: "absolute",
    zIndex: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    left: 0,
  },
  qr: {
    left: 10,
    top: 37,
    width: 72,
    height: 72,
    zIndex: 251,
    position: 'absolute',
  },
  qrCode: {
    width: 72,
    height: 72,
  },
  cardValue: {
    top: -5,
    left: 95,
    fontSize: 28,
    color: COLORS.yellow
  },
  cardBand: {
    width: '99.4%',
    height: 8,
    top: 23,
    position: 'absolute'
  }
});


export default Card;