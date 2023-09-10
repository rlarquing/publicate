import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { COLORS, SIZES } from "../constants";
import QRCode from 'react-native-qrcode-svg';
import Dialog from "./Dialog";
import { encoder } from '../constants'

const deviceHeight = Dimensions.get('window').height;

const Pay = ({ data, handleBack }) => {
  const navigation = useNavigation();
  const qrInfo = encoder.encodeText(JSON.stringify(data));

  return (
    <Dialog title={'PAGAR'} handleBack={handleBack} children={
      <View style={styles.page}>
        <View style={styles.content}>
          <View style={styles.QRCode}>
            <QRCode
              value={qrInfo}
              // value={data}
              size={deviceHeight > 700 ? 256 : 128}
            />
          </View>
          <Text style={styles.message}>Escanee el código QR para realizar el pago.</Text>
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
  QRCode: {
    flex: 1,
    zIndex: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    top: deviceHeight > 700 ? 40 : 10,
    bottom: 0,
  },
  message: {
    flex: 1,
    zIndex: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    top: deviceHeight > 700 ? 85 : 40,
    bottom: 0,
    color: COLORS.gray
  }
});


export default Pay;