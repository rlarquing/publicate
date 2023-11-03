import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView, Easing } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { Line } from "./Line";
import { RatingBadge } from "./RatingBadge";
import ProductCard from "./ProductCard";
import { DialogProduct } from "./DialogProduct";

let { height, width } = Dimensions.get("window");

export const DialogBusiness = ({ open, setOpen, avatar, title, address, time, rate, backColor, products = [] }: any) => {
  const navigation = useNavigation();
  const [avatarCard, setAvatarCard] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [titleCard, setTitleCard] = useState('');
  const [imageCard, setImageCard] = useState('');
  const [addressCard, setAddressCard] = useState('');
  const [timeCard, setTimeCard] = useState('');
  const [descriptionCard, setDescriptionCard] = useState('');
  const [rateCard, setRateCard] = useState('');
  const [priceCard, setPriceCard] = useState('');
  const [availableCard, setAvailableCard] = useState('');
  const [homeServiceCard, setHomeServiceCard] = useState('');
  const [showDialogProduct, setShowDialogProduct] = useState(false);

  const bottom = useRef(new Animated.Value((height - 80))).current;
  const top = useRef(new Animated.Value((height - 80))).current;
  console.log("Hola: ", products);

  const productsList = products.map((item: any, index: number) =>
    <ProductCard
      style={styles.section}
      key={index}
      image={item.image}
      title={item.price}
      description={item.description}
      handlePress={() => {
        setTitleCard(item.name);
        setImageCard(item.image);
        setPriceCard(item.price);
        setAvailableCard(item.available);
        setHomeServiceCard(item.homeService);
        setDescriptionCard(item.description);

        setNameCard(title);
        setAvatarCard(avatar);
        setAddressCard(address);
        setTimeCard(time);
        setRateCard(rate);
        setShowDialogProduct(true);
      }}
    />
  );

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

  return showDialogProduct ?
    (<DialogProduct
      title={titleCard}
      name={nameCard}
      avatar={avatarCard}
      image={imageCard}
      address={addressCard}
      description={descriptionCard}
      rate={rateCard}
      time={timeCard}
      available={availableCard}
      homeService={homeServiceCard}
      price={priceCard}
      backColor={backColor}
      open={showDialogProduct}
      setOpen={setShowDialogProduct}
    />)
    :
    (
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
            <View style={styles.avatarBox}>
              <Image style={styles.avatar} source={avatar} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.description}>
              <RatingBadge size={75} weight={35} color={COLORS.primary} value={rate} right={0} top={0} />
              <Line size={"100%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={COLORS.primary} top={15} marginBottom={25} />
              <Text style={styles.label}>DIRECIÓN:</Text>
              <Text style={styles.text}>{address}</Text>
              <Text style={styles.label}>HORARIO:</Text>
              <Text style={styles.text}>{time}</Text>
              <Line size={"100%"} weight={1} marginLeft={"auto"} marginRight={"auto"} color={COLORS.primary} top={10} />
              <View style={[styles.section, { marginTop: 20 }]}>
                <Text style={styles.label}>Productos:</Text>
                <TouchableOpacity style={styles.showMoreBtn} onPress={() => { closeEvt() }}>
                  <Text style={styles.returnText}>Mostrar más</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.scrollArea}>
                {productsList}
              </View>
            </View>
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
    width: "85%",
    top: 0,
    position: "relative",
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
    color: COLORS.primary,
    height: 30,
    top: 120,
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
    position: 'absolute',
    fontFamily: FONTS.title
  },
  label: {
    flex: 1,
    width: '100%',
    color: COLORS.light.textGray,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    alignItems: "center",
    justifyContent: "center",
    fontSize: height > 700 ? 18 : 16,
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
    flex: 1,
    width: '100%',
    color: COLORS.black
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
    width: 138,
    height: 138,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 140,
  },
  avatarBox: {
    width: 148,
    height: 148,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: -30,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 5,
    borderColor: COLORS.white,
    borderRadius: 150,
    zIndex: 300,
    ...SHADOWS.dark
  },
  description: {
    position: "absolute",
    top: 140,
    justifyContent: "flex-start",
    width: "100%"
  },
  returnText: {
    fontFamily: FONTS.regular,
    fontWeight: "400",
    color: COLORS.dark.orange,
    fontSize: height > 700 ? 14 : 12,
    zIndex: 900,
  },
  showMoreBtn: {
    width: 80,
    zIndex: 300,
  },
});