import React, { useRef, useEffect } from "react";
import { Text, StyleSheet, Animated, Easing, ActivityIndicator, Dimensions } from "react-native";
import { COLORS } from "../constants";

const deviceHeight = Dimensions.get('window').height;

const Loading = () => {
    const frameOpacity = useRef(new Animated.Value(0)).current;;

    useEffect(() => {
        Animated.timing(frameOpacity, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    }, [frameOpacity]);

    return (
        <Animated.View style={[styles.loading, { opacity: frameOpacity }]}>
            <ActivityIndicator size={80} color={COLORS.primary} />
            <Text style={styles.loadingText}>Procesando su solicitud, por favor espere...</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        zIndex: 800,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFFCC'
    },
    loadingText: {
        fontWeight: '700',
        marginTop: 10,
        color: COLORS.gray,
        fontSize: deviceHeight > 700 ? 14 : 12,
    }
});


export default Loading;