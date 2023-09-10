import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import Dialog from "./Dialog";
// import { DefaultButton } from "./Button";

const Operaciones = ({ data, handleBack }) => {
  const navigation = useNavigation();

  const operationList = data.map((item) =>
    <View style={[styles.item, item.tipo_operacion && item.tipo_operacion === 'pago' ? { backgroundColor: COLORS.cream } : { backgroundColor: COLORS.light.orange }]} key={item.id}>
      <Text style={styles.type}> {item.tipo_operacion}</Text>
      <Text style={styles.date}>{item.fecha}</Text>
      <Text style={styles.value}>${item.importe} </Text>
    </View>
  );

  return (
    <Dialog title={'OPERACIONES'} handleBack={handleBack} children={
      <View style={styles.page}>

        <ScrollView >
          <View style={styles.content}>
            <View style={styles.cardData}>
              <View style={[styles.item, { borderBottomWidth: 2, borderBottomColor: COLORS.primary }]}>
                <Text style={[styles.type, { fontWeight: 900 }]}>TIPO</Text>
                <Text style={[styles.date, { fontWeight: 900 }]}>FECHA</Text>
                <Text style={[styles.value, { fontWeight: 900 }]}>IMPORTE</Text>
              </View>
              {operationList}
            </View>

            {/* <View style={styles.actions}>
            <DefaultButton
              text={'Reclamar'}
              handlePress={() => { }}
              icon={assets.list_icon}
              iconSize={24}
              size={180}
              btnBorderColor={COLORS.green}
              backgroundColor={COLORS.primary}
              textColor={COLORS.white}
            />
          </View> */}
          </View>
        </ScrollView>
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
    minHeight: 60,
    height: 'auto',
    alignItems: "center",
    // justifyContent: "center",
    // position: 'absolute',
    zIndex: 300,
    margin: 0,
    padding: 0,
    top: 0,
    bottom: 0,
  },
  cardData: {
    flex: 1,
    top: 20,
    left: 0,
    position: 'relative',
    textAlign: "justify",
    justifyContent: "flex-start",
    width: 300,
    zIndex: 250,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
    marginBottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'relative',
    width: '700%',
    maxWidth: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light.blue,
  },
  date: {
    fontWeight: 400,
    width: 60,
    maxWidth: 60,
    fontSize: 16,
    marginLeft: 50,
    textAlign: 'center',
    fontSize: 12
  },
  value: {
    fontWeight: 400,
    width: 60,
    maxWidth: 60,
    fontSize: 16,
    marginLeft: 50,
    textAlign: 'right',
    fontSize: 12
  },
  type: {
    fontWeight: 400,
    width: 80,
    maxWidth: 80,
    textAlign: 'left',
    fontSize: 12
  },
  actions: {
    top: '80%',
    bottom: 0,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: "absolute",
    zIndex: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
});


export default Operaciones;