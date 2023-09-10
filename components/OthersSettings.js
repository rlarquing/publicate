import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Switch, ScrollView } from "react-native";
import { sqliteStorage } from '../constants';
import Loading from "./Loading";

import { SIZES } from "../constants";
import Dialog from "./Dialog";

const OthersSettings = ({ handleBack }) => {
  const navigation = useNavigation();
  const [useOldCamera, setUseOldCamera] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const getUserData = async () => {
    setShowLoading(true);
    let user = await sqliteStorage.getLoggedInUser();
    if (user) {
      const result = await sqliteStorage.getApp(user.userId);
      if (result && Array.isArray(result)) {
        let appSettings = result[0];
        console.log(appSettings.oldCamera);
        setUseOldCamera(appSettings ? appSettings.oldCamera === 1 ? true : false : false);
      }
    }
    setShowLoading(false);
  }

  const updateUserData = async () => {
    setShowLoading(true);
    let user = await sqliteStorage.getLoggedInUser();
    if (user) {
      console.log(useOldCamera);
      const result = await sqliteStorage.updateApp(user.userId, useOldCamera ? 1 : 0);
      console.log(result);
    }
    setShowLoading(false);
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    updateUserData();
  }, [useOldCamera]);

  return (
    <Dialog title={'OTROS AJUSTES'} handleBack={handleBack} children={
      <View style={styles.page}>
        {showLoading && <Loading />}

        <View style={styles.content}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.listItem}>
              <Switch
                onValueChange={(value) => { setUseOldCamera(value) }}
                value={useOldCamera} />
              <Text>Utilizar version antigua de la cámara.</Text>
            </View>
          </ScrollView>
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
    alignItems: "flex-start",
    position: 'absolute',
    zIndex: 300,
    margin: 0,
    padding: 0,
    top: 0,
    bottom: 0,
    padding: 10
  },
  listItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 0,
    justifyContent: "flex-start",
    // backgroundColor: COLORS.red,
  },
});


export default OthersSettings;