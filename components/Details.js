import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import { COLORS, SIZES, assets, sqliteStorage, api, endpoints } from "../constants";
import Dialog from "./Dialog";
import { SmallButton } from "./Button";
import Operations from "./Operations";
import { CustomAlert, ALERT_TYPE, ICON_COLOR } from "./CustomAlert";
import Loading from "./Loading";

const deviceHeight = Dimensions.get('window').height;

const Details = ({ data, handleBack }) => {
  const navigation = useNavigation();
  const [operaciones, setOperaciones] = useState([]);
  const [openOperations, setOpenOperations] = useState(false);
  const [showCancelNotification, setShowCancelNotification] = useState(false);
  const [showDeleteNotification, setShowDeleteNotification] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationIcon, setNotificationIcon] = useState('');
  const [notificationType, setNotificationType] = useState('ERROR');
  const [showLoading, setShowLoading] = useState(false);

  const getOperations = async () => {
    // let operations = await sqliteStorage.getCardOperations(data.cardId)
    setShowLoading(true);
    const user = await sqliteStorage.getLoggedInUser();
    let operationsInfo = await api.getEvt(endpoints.card.operations.replace('{folio}', data.folio), user.token);
    setShowLoading(false);
    const { msg } = operationsInfo;
    console.log('operationsInfo: ', msg);
    if (msg && msg.statusCode) {
      setNotificationTitle('ERROR');
      setNotificationMessage(msg.message ? msg.message.toString() : 'Ha ocurrido un error al obtener las operaciones de su tarjeta!');
      setNotificationIcon('md-information');
      setNotificationType('ERROR');
      setShowNotification(true);
      console.log(msg.message);
    } else {
      console.log('Informacion: ', JSON.stringify(operationsInfo.data));
      let operations = operationsInfo.data;
      setOperaciones(operations);
      setOpenOperations(true);
    }
  }

  const deleteCardEvent = async () => {
    setShowLoading(true);
    // ELiminar la tarjeta de la BD local
    sqliteStorage.removeAllCards();
    // ELiminar la tarjeta del API
    const user = await sqliteStorage.getLoggedInUser();
    let result = await api.patchEvt(endpoints.card.delete, user.token, { id_tarjeta: data.cardId, id_persona: user.userId });
    setShowLoading(false);
    const { msg } = result;
    console.log('result: ', msg);
    if (msg && msg.statusCode) {
      setNotificationTitle('ERROR');
      setNotificationMessage(msg.message ? msg.message.toString() : 'Ha ocurrido un error al quitar la tarjeta de su cuenta!');
      setNotificationIcon('md-information');
      setNotificationType('ERROR');
      setShowNotification(true);
      console.log(msg.message);
    } else {
      console.log('Informacion: ', JSON.stringify(result.data));
      setNotificationTitle('INFORMACION');
      setNotificationMessage(msg.message ? msg.message.toString() : 'La tarjeta ha sido quitada de su cuenta satisfactoriamente!');
      setNotificationIcon('md-information');
      setNotificationType('INFORMATION');
      setShowNotification(true);
    }
  }

  const cancelCardEvent = async () => {
    setShowLoading(true);
    // ELiminar la tarjeta de la BD local
    sqliteStorage.removeAllCards();
    // ELiminar la tarjeta del API
    const user = await sqliteStorage.getLoggedInUser();
    let result = await api.deleteEvt(endpoints.card.cancel.replace('{folio}', card.folio), user.token);
    setShowLoading(false);
    const { msg } = result;
    console.log('result: ', msg);
    if (msg && msg.statusCode) {
      setNotificationTitle('ERROR');
      setNotificationMessage(msg.message ? msg.message.toString() : 'Ha ocurrido un error al eliminar la tarjeta de su cuenta!');
      setNotificationIcon('md-information');
      setNotificationType('ERROR');
      setShowNotification(true);
      console.log(msg.message);
    } else {
      console.log('Informacion: ', JSON.stringify(result.data));
      setNotificationTitle('INFORMACION');
      setNotificationMessage(msg.message ? msg.message.toString() : 'Su tarjeta ha sido eliminada satisfactoriamente!');
      setNotificationIcon('md-information');
      setNotificationType('INFORMATION');
      setShowNotification(true);
    }
  }

  if (openOperations) {
    return (
      <Operations data={operaciones} handleBack={() => { setOpenOperations(false) }} />
    );
  } else {
    return (
      <Dialog title={'INFORMACIÓN DE LA TARJETA'} handleBack={handleBack} children={
        <View style={styles.page} >
          {showLoading && <Loading />}

          <CustomAlert
            type={ALERT_TYPE.YES_OR_CANCEL_ALERT}
            showAlert={showCancelNotification}
            setShowAlert={setShowCancelNotification}
            title={'ADVERTENCIA'}
            message={'Realmente desea cancelar esta tarjeta? Este proceso es irreversible su tarjeta será eliminada y no podrá volver a utilizarla.'}
            textColor={COLORS.red}
            iconProps={{
              name: 'md-help',
              size: 36,
              color: "#FFFFFF",
              background: ICON_COLOR.WARNING
            }}
            actions={{
              yes: 'Si',
              yesCallback: cancelCardEvent,
              cancel: 'No'
            }}
            btnProps={[
              {
                btnBorderColor: COLORS.white,
                icon: assets.delete_icon,
                iconSize: 20,
                size: 100,
                textColor: COLORS.white,
                backgroundColor: COLORS.red
              },
              {
                btnBorderColor: COLORS.white,
                icon: assets.return_icon,
                iconSize: 20,
                size: 100,
                textColor: COLORS.white,
                backgroundColor: COLORS.primary
              }
            ]}
          />

          <CustomAlert
            type={ALERT_TYPE.YES_OR_CANCEL_ALERT}
            showAlert={showDeleteNotification}
            setShowAlert={setShowDeleteNotification}
            title={'ADVERTENCIA'}
            message={'Realmente desea quitar esta tarjeta de su monedero?'}
            textColor={COLORS.dark.orange}
            iconProps={{
              name: 'md-help',
              size: 36,
              color: "#FFFFFF",
              background: ICON_COLOR.WARNING
            }}
            actions={{
              yes: 'Si',
              yesCallback: deleteCardEvent,
              cancel: 'No'
            }}
            btnProps={[
              {
                btnBorderColor: COLORS.white,
                icon: assets.delete_icon,
                iconSize: 20,
                size: 100,
                textColor: COLORS.white,
                backgroundColor: COLORS.red
              },
              {
                btnBorderColor: COLORS.white,
                icon: assets.return_icon,
                iconSize: 20,
                size: 100,
                textColor: COLORS.white,
                backgroundColor: COLORS.primary
              }
            ]}
          />

          <CustomAlert
            type={ALERT_TYPE.OK_ALERT}
            showAlert={showNotification}
            setShowAlert={setShowNotification}
            title={notificationTitle}
            message={JSON.stringify(notificationMessage)}
            iconProps={{
              name: notificationIcon,
              size: 36,
              color: "#FFFFFF",
              background: notificationType === 'ERROR' ? ICON_COLOR.ERROR : ICON_COLOR.INFORMATION
            }}
            actions={{
              ok: 'Aceptar',
              okCallback: handleBack
            }}
            btnProps={[
              {
                btnBorderColor: COLORS.white,
                icon: assets.return_icon,
                iconSize: 20,
                size: 120,
                textSize: 14,
                textColor: COLORS.white,
                backgroundColor: COLORS.gray
              }
            ]}
          />

          <ScrollView >
            <View style={styles.content} >
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <View style={styles.info}>
                    <View style={[styles.cardBand, { backgroundColor: data.isbonificada ? '#0000FF' : '#FF0000' }]}></View>
                    <View style={styles.qr}>
                      <Image style={styles.qrCode} source={assets.qrCode} />
                    </View>
                    <Text style={styles.cardValue}>${parseInt(data.valor_inicial)}</Text>
                    <Text style={styles.cardNumber}>{data.folio}</Text>
                  </View>
                  <Image style={styles.cardBackground} source={assets.card_background} />
                </View>
              </View>

              <View style={styles.cardData}>
                <View style={styles.textField}>
                  <Text style={[{ fontWeight: 900 }]}>Folio:</Text>
                  <Text style={[{ fontWeight: 900, fontSize: 16, color: COLORS.primary, marginLeft: 66 }]}>{data.folio}</Text>
                </View>

                <View style={styles.textField}>
                  <Text style={[{ fontWeight: 900 }]}>Saldo:</Text>
                  <Text style={[{ fontWeight: 400, fontSize: 16, marginLeft: 63 }]}>${data.saldo}</Text>
                </View>

                <View style={styles.textField}>
                  <Text style={[{ fontWeight: 900, maxWidth: 100 }]}>Fecha de activación:</Text>
                  <Text style={[{ fontWeight: 400, fontSize: 16, marginLeft: 34 }]}>{data.fecha_activacion}</Text>
                </View>

                <View style={styles.textField}>
                  <Text style={[{ fontWeight: 900, maxWidth: 100 }]}>Fecha de vencimiento:</Text>
                  <Text style={[{ fontWeight: 400, fontSize: 16, marginLeft: 20 }]}>{data.fecha_vencimiento}</Text>
                </View>
              </View>

              <View style={styles.actions}>
                <SmallButton
                  text={'Operaciones'}
                  handlePress={getOperations}
                  icon={assets.list_icon}
                  iconSize={20}
                  size={130}
                  btnBorderColor={COLORS.white}
                  backgroundColor={COLORS.light.blue}
                  textColor={COLORS.white}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                />
                <SmallButton
                  text={'Quitar'}
                  handlePress={() => { setShowDeleteNotification(true) }}
                  icon={assets.remove_card_icon}
                  iconSize={20}
                  size={100}
                  btnBorderColor={COLORS.white}
                  backgroundColor={COLORS.dark.orange}
                  textColor={COLORS.white}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                />
                <SmallButton
                  text={'Cancelar'}
                  handlePress={() => { setShowCancelNotification(true); }}
                  icon={assets.remove_icon}
                  iconSize={20}
                  size={120}
                  btnBorderColor={COLORS.white}
                  backgroundColor={COLORS.red}
                  textColor={COLORS.white}
                  marginTop={5}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      }
      />
    );
  }
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    zIndex: 300,
    margin: 0,
    padding: 0,
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge,
    top: 0,
    bottom: 0
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    zIndex: 300,
    margin: 0,
    padding: 0,
    top: deviceHeight > 700 ? 10 : 0,
    bottom: 0,
  },
  card: {
    position: 'relative',
    width: deviceHeight > 700 ? 300 : 200,
    height: deviceHeight > 700 ? 180 : 90,
    zIndex: 10,
    margin: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 2.42,
    shadowRadius: 2.22,
  },
  QRCode: {
    flex: 1,
    zIndex: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    top: 40,
    bottom: 0,
  },
  message: {
    flex: 1,
    zIndex: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    top: 85,
    bottom: 0,
    color: COLORS.gray,
  },
  cardBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    width: deviceHeight > 700 ? 300 : 150,
    height: deviceHeight > 700 ? 185 : 92,
    zIndex: 50,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 4,
      height: 6,
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
    fontSize: deviceHeight > 700 ? 18 : 9,
    fontWeight: 900,
    left: deviceHeight > 700 ? 85 : 75,
    top: deviceHeight > 700 ? 149 : 74,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 20,
    zIndex: 251,
    position: 'absolute',
  },
  qr: {
    left: deviceHeight > 700 ? 10 : 30,
    top: deviceHeight > 700 ? 37 : 19,
    width: deviceHeight > 700 ? 72 : 36,
    height: deviceHeight > 700 ? 72 : 36,
    zIndex: 251,
    position: 'absolute',
  },
  qrCode: {
    width: deviceHeight > 700 ? 72 : 36,
    height: deviceHeight > 700 ? 72 : 36,
  },
  cardValue: {
    top: deviceHeight > 700 ? -10 : -48,
    left: deviceHeight > 700 ? 105 : 50,
    fontSize: deviceHeight > 700 ? 20 : 10,
    color: COLORS.yellow
  },
  cardBand: {
    width: deviceHeight > 700 ? '99.4%' : '74.9%',
    height: deviceHeight > 700 ? 8 : 4,
    top: deviceHeight > 700 ? 23 : 12,
    position: 'absolute'
  },
  cardData: {
    flex: 1,
    top: 10,
    position: 'relative',
    textAlign: "justify",
    justifyContent: "flex-start",
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    // height: 20,
    zIndex: 250,
    // backgroundColor: "#FF0000"
  },
  textField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  actions: {
    top: 20,
    marginBottom: 80,
    width: '100%',
    maxWidth: '100%',
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    // position: "absolute",
    zIndex: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
});


export default Details;