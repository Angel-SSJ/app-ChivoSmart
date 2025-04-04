import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseToastProps } from "react-native-toast-message";
import LottiesView from "@/components/LottiesView";
import Animated from "react-native-reanimated";

interface CustomToastProps extends BaseToastProps {
    text1?: string;
    text2?: string;
}

const toastConfig = {
    error: ({ text1, text2 }: CustomToastProps) => (
        <Animated.View
            style={[styles.toastContainer, { backgroundColor: "#fae1db" }]}
        >
            <LottiesView
                animationStyle={styles.icon}
                animationViewStyle={styles.icon}
                source={require("@/components/toastAnimation/error.json")}
                loop={false}
                speed={2.5}
            />
            <View style={styles.titleCard}>
                <Text style={[styles.title, { color: "#d9100a" }]}>{text1}</Text>
                {text2 && (
                    <Text style={[styles.description, { color: "#d9100a" }]}>
                        {text2}
                    </Text>
                )}
            </View>
        </Animated.View>
    ),
    success: ({ text1, text2 }: CustomToastProps) => (
        <Animated.View
            style={[styles.toastContainer, { backgroundColor: "#def1d7" }]}
        >
            <LottiesView
                animationStyle={styles.icon}
                animationViewStyle={styles.icon}
                source={require("@/components/toastAnimation/success.json")}
                loop={false}
                speed={2.5}
            />
            <View style={styles.titleCard}>
                <Text style={[styles.title, { color: "#1f8722" }]}>{text1}</Text>
                {text2 && (
                    <Text style={[styles.description, { color: "#1f8722" }]}>
                        {text2}
                    </Text>
                )}
            </View>
        </Animated.View>
    ),
    warning: ({ text1, text2 }: CustomToastProps) => (
        <Animated.View
            style={[styles.toastContainer, { backgroundColor: "#fef7ec" }]}
        >
            <LottiesView
                animationStyle={styles.icon}
                animationViewStyle={styles.icon}
                source={require("@/components/toastAnimation/warning.json")}
                loop={false}
                speed={2.5}
            />
            <View style={styles.titleCard}>
                <Text style={[styles.title, { color: "#f08135" }]}>{text1}</Text>
                {text2 && (
                    <Text style={[styles.description, { color: "#f08135" }]}>
                        {text2}
                    </Text>
                )}
            </View>
        </Animated.View>
    ),
    info: ({ text1, text2 }: CustomToastProps) => (
        <Animated.View
            style={[styles.toastContainer, { backgroundColor: "white" }]}
        >
            <LottiesView
                animationStyle={styles.icon}
                animationViewStyle={styles.icon}
                source={require("@/components/toastAnimation/success.json")}
                loop={false}
                speed={2.5}
            />
            <View style={styles.titleCard}>
                <Text style={[styles.title, { color: "black" }]}>{text1}</Text>
                {text2 && (
                    <Text style={[styles.description, { color: "gray" }]}>{text2}</Text>
                )}
            </View>
        </Animated.View>
    ),
};

export default toastConfig;

const styles = StyleSheet.create({
    toastContainer: {
        position: "absolute",
        top: 0,
        paddingVertical: 8,
        paddingHorizontal: 25,
        marginHorizontal: 15,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        flex: 1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
    },
    title: {
        fontSize: 14,
        fontWeight: "700",
    },
    titleCard: {
        flexDirection: "column",
        alignItems: "center",
        marginHorizontal: 5,
    },
    description: {
        fontSize: 10,
        fontWeight: "500",
    },
    icon: {
        width: 30,
        height: 30,
    },
});
