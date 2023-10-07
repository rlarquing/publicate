import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Text } from "react-native";
import { COLORS, FONTS, assets } from "../constants";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from 'expo-checkbox';
import { DefaultInput } from "./Input";

const deviceHeight = Dimensions.get('window').height;

export const DefaultSelect = ({ options, text, placeholder, textColor, handleTyping, size, textSize, icon, iconSize, marginBottom, type, ...props }: any) => {
    const [active, setActive] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [label, setLabel] = useState(text);
    const [filter, setFilter] = useState('');

    const emitNewValue = (value: boolean, itemText: string) => {
        setLabel(itemText);
        setActive(false);
        setChecked(value);
    }

    const optionsList = options.map((itemText: string, index: number) =>
        <View style={styles.section} key={index}>
            <Checkbox
                style={styles.item}
                value={isChecked}
                onValueChange={(value) => { emitNewValue(value, itemText) }}
                color={isChecked ? '#000000' : undefined}
            />
            <Text style={styles.item}>
                {index + 1}- {itemText}
            </Text>
        </View >
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setActive(!active)} activeOpacity={1} style={[styles.inputView, { width: size, marginBottom: marginBottom, ...props }]}>
                <Image style={styles.iconInput} width={iconSize ? iconSize : 20} height={iconSize ? iconSize : 20} source={icon} />
                <Text
                    style={[styles.textInput, { color: textColor, fontSize: textSize }]}
                >{label ? label : placeholder}</Text>
                {/* <Image style={styles.iconSelect} width={20} height={20} source={active ? assets.arrow_up_icon : assets.arrow_down_icon} /> */}
            </TouchableOpacity>
            {active && <View style={styles.list}>
                <ScrollView persistentScrollbar={true}>
                    <View style={styles.scrollArea}>
                        <View style={styles.scrollItems}>
                            <DefaultInput
                                icon={assets.money_bag_icon}
                                size={"100%"}
                                type={"name"}
                                marginBottom={deviceHeight > 700 ? 20 : 10}
                                text={filter}
                                placeholder={"Buscar..."}
                                handleTyping={setFilter}
                            />
                            {optionsList}
                        </View>
                    </View>
                </ScrollView>
            </View>}
        </View>
    );
};

// interface selectProps {
//     options: Object[],
//     selected: string,
//     setSelected: (item: string) => void,
//     icon: any,
//     size?: any,
//     textColor?: string,
//     textSize?: number,
//     placeholder?: string,
//     props?: any[]
// }

export const PickerSelect = ({ options, selected, setSelected, icon, size, textColor, textSize, placeholder, ...props }: any) => {
    if (options && options.length > 0) {
        return (
            <Picker
                style={[styles.inputView, { position: "relative", ...props }]}
                mode="dialog"
                placeholder={placeholder ? placeholder : ""}
                itemStyle={styles.textInput}
                selectedValue={selected}
                onValueChange={(itemValue, itemIndex) => {
                    setSelected(itemValue);
                }}
            >
                {options.map((item: any, index: number) =>
                    <Picker.Item label={item.label} value={item.value} key={index} />
                )}
            </Picker>
        );
    } else {
        <View style={[styles.inputView, { width: size ? size : "auto", ...props }]}>
            <Image style={styles.iconInput} width={20} height={20} source={icon} />
            <Text
                style={[styles.textInput, { color: textColor ? textColor : COLORS.black, fontSize: textSize ? textSize : 14 }]}
            >No hay elementos</Text>
        </View>
    }
};

export const DropdownSelect = ({ options, setOptions, selected, setSelected, icon, size, textColor, textSize, placeholder, ...props }: any) => {
    const [open, setOpen] = useState(false);
    // const [items, setItems] = useState([
    //     {label: 'Apple', value: 'apple'},
    //     {label: 'Banana', value: 'banana'},
    //     {label: 'Pear', value: 'pear'},
    // ]);

    if (options && options.length > 0) {
        return (
            <View style={[styles.inputView, { width: size ? size : "auto", position: "absolute", zIndex: 400, ...props }]}>
                <DropDownPicker
                    open={open}
                    value={selected}
                    items={options}
                    setOpen={setOpen}
                    setValue={setSelected}
                    setItems={setOptions}
                    placeholder={placeholder ? placeholder : ""}
                />
            </View>
        );
    } else {
        <View style={[styles.inputView, { width: size ? size : "auto", ...props }]}>
            <Image style={styles.iconInput} width={20} height={20} source={icon} />
            <Text
                style={[styles.textInput, { color: textColor ? textColor : COLORS.black, fontSize: textSize ? textSize : 14 }]}
            >No hay elementos</Text>
        </View>
    }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        zIndex: 300
    },
    inputView: {
        backgroundColor: COLORS.light.inputBackground,
        borderRadius: 8,
        borderColor: COLORS.light.inputBorder,
        borderWidth: 1,
        width: "100%",
        height: deviceHeight > 700 ? 38 : 34,
        alignItems: "flex-start",
        color: COLORS.light.textGray,
        display: "flex",
        flexDirection: "row"
    },
    textInput: {
        flex: 1,
        padding: 5,
        marginLeft: 15,
        fontSize: deviceHeight > 700 ? 16 : 14,
        color: COLORS.light.textSecondary,
        fontFamily: FONTS.regular,
        fontWeight: "300"
    },
    iconSelect: {
        width: 20,
        height: 20,
        right: 10,
        top: 8
    },
    iconInput: {
        width: 20,
        height: 20,
        left: 10,
        top: 8
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
    scrollTouch: {
        width: "20%",
        height: "100%",
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
});