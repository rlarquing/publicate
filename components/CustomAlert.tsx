import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SHADOWS, assets } from '../constants';
import { SmallButton } from './Button';
import FancyAlert from './FancyAlert';

export enum ALERT_TYPE {
    DEFAULT_ALERT = 0,
    OK_ALERT = 1,
    YES_OR_CANCEL_ALERT = 2,
    YES_OR_NO_ALERT = 3,
    YES_NO_OR_CANCEL_ALERT = 4,
}
export enum ICON_COLOR {
    SUCCESS = '#08961D',
    INFORMATION = '#0C7DD3',
    WARNING = '#F15718',
    ERROR = '#D30C0C',
    DEFAULT = '#4CB748',
}

interface IconProps {
    name: any,
    size: number,
    color: string,
    background?: string
}

interface ActionsProps {
    ok?: string,
    okCallback?: () => void,
    cancel?: string,
    yes?: string,
    yesCallback?: () => void,
    no?: string,
    noCallback?: () => void,
    hiddenCallback?: () => void,
};

interface ButtonProps {
    btnBorderColor: string,
    icon: any,
    iconSize: number,
    size: number,
    textColor?: string,
    textSize? : number,
    backgroundColor: string
};

interface CustomAlertProps {
    type?: number,
    showAlert: boolean,
    title: string;
    message: string,
    textColor?: string,
    setShowAlert: (value: boolean) => void
    iconProps: IconProps,
    actions?: ActionsProps,
    btnProps?: Array<ButtonProps>
};

const deviceHeight = Dimensions.get('window').height;

export const CustomAlert = ({
    type = 0,
    showAlert = false,
    setShowAlert = () => { },
    title = "Alerta", /* onCallback = null,*/
    message = "",
    textColor = COLORS.black,
    iconProps = {
        name: "home",
        size: 32,
        color: COLORS.white,
        background: COLORS.primary
    },
    actions = {
        ok: "Aceptar",
        okCallback: () => { },
        cancel: "Cancelar",
        yes: "Si",
        yesCallback: () => { },
        no: "No",
        noCallback: () => { },
        hiddenCallback: () => { },
    },
    btnProps = [{
        btnBorderColor: COLORS.white,
        icon: assets.mark_icon,
        iconSize: 22,
        size: 120,
        textColor: COLORS.white,
        backgroundColor: COLORS.primary
    }]
}: CustomAlertProps) => {

    const okMiddlewareCallback = () => {
        if (actions && actions.okCallback) {
            const execute = actions.okCallback;
            execute();
        }
        setShowAlert(false);
    };

    const yesMiddlewareCallback = () => {
        if (actions && actions.yesCallback) {
            const execute = actions.yesCallback;
            execute();
        }
        setShowAlert(false);
    };

    const noMiddlewareCallback = () => {
        if (actions && actions.noCallback) {
            const execute = actions.noCallback;
            execute();
        }
        setShowAlert(false);
    };

    const hideAlert = () => {
        setShowAlert(false);
    };

    if (type === undefined || type === ALERT_TYPE.DEFAULT_ALERT) {
        setTimeout(() => {
            if (actions && actions.hiddenCallback) {
                const execute = actions.hiddenCallback;
                execute();
            }
            setShowAlert(false);
        }, 5000);
    }

    return (
        <FancyAlert
            style={styles.alert}
            icon={
                <View style={[styles.icon, { backgroundColor: iconProps.background ? iconProps.background : ICON_COLOR.DEFAULT }]}>
                    <Ionicons
                        name={iconProps.name}
                        size={iconProps.size}
                        color={iconProps.color}
                    />
                </View>
            }
            onRequestClose={hideAlert}
            visible={showAlert}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
                <Text style={[styles.contentText, { color: textColor }]}>
                    {message}
                </Text>
                {/* Alert normal con botón de Aceptar */}
                {/* Alert con dos opciones Si o Cancelar */}
                {/* Alert con dos opciones Si o No */}
                {/* Alert con tres opciones Si, No y Cancelar */}
                <View style={styles.line}></View>
                {type && type === ALERT_TYPE.OK_ALERT ?
                    <SmallButton
                        handlePress={actions && actions.okCallback ? okMiddlewareCallback : hideAlert}
                        text={actions.ok}
                        {...btnProps[0]}
                    />
                    : type === ALERT_TYPE.YES_OR_CANCEL_ALERT ?
                        <View style={styles.actionsContainer}>
                            <SmallButton
                                handlePress={actions && actions.yesCallback ? yesMiddlewareCallback : hideAlert}
                                text={actions.yes}
                                {...btnProps[0]}
                                marginRight={5}
                            />
                            <SmallButton
                                handlePress={actions && actions.okCallback ? okMiddlewareCallback : hideAlert}
                                text={actions.cancel}
                                {...btnProps.length > 1 ? { ...btnProps[1] } : { ...btnProps[0] }}
                                marginLeft={5}
                            />
                        </View>
                        : type === ALERT_TYPE.YES_OR_NO_ALERT ?
                            <View style={styles.actionsContainer}>
                                <SmallButton
                                    handlePress={actions && actions.yesCallback ? yesMiddlewareCallback : hideAlert}
                                    text={actions.yes}
                                    {...btnProps[0]}
                                />
                                <SmallButton
                                    handlePress={actions && actions.noCallback ? noMiddlewareCallback : hideAlert}
                                    text={actions.no}
                                    {...btnProps.length > 1 ? { ...btnProps[1] } : { ...btnProps[0] }}
                                    marginLeft={5}
                                />
                            </View>
                            : type === ALERT_TYPE.YES_NO_OR_CANCEL_ALERT ?
                                <View>
                                    <View style={styles.actionsContainer}>
                                        <SmallButton
                                            handlePress={actions && actions.yesCallback ? yesMiddlewareCallback : hideAlert}
                                            text={actions.yes}
                                            {...btnProps[0]}
                                        />
                                        <SmallButton
                                            handlePress={actions && actions.noCallback ? noMiddlewareCallback : hideAlert}
                                            text={actions.no}
                                            {...btnProps.length > 1 ? { ...btnProps[1] } : { ...btnProps[0] }}
                                        />
                                        <SmallButton
                                            handlePress={actions && actions.noCallback ? noMiddlewareCallback : hideAlert}
                                            text={actions.cancel}
                                            {...btnProps.length > 2 ? { ...btnProps[2] } : { ...btnProps[0] }}
                                        />
                                    </View>
                                    <View style={styles.actionsContainer}>
                                        <SmallButton
                                            handlePress={hideAlert}
                                            text={actions.cancel}
                                            {...btnProps[0]}
                                        />
                                    </View>
                                </View>
                                :
                                ''
                }
            </View>
        </FancyAlert>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        alignItems: 'center',

    },
    alert: {
        backgroundColor: '#EEEEEE',
    },
    icon: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 32,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 20,
    },
    titleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 16
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -16,
        marginBottom: 16,
    },
    contentText: {
        textAlign: 'center',
        marginBottom: 20,
        padding: 5,
        fontSize: deviceHeight > 700 ? 14 : 12
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    line: {
        bottom: 48,
        width: '90%',
        height: 1,
        backgroundColor: COLORS.divider,
        marginTop: 5,
        position: "absolute",
        ...SHADOWS.card
    }
});