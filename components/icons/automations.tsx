import Svg, { Path } from "react-native-svg";
import { Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
    active?: boolean;
}

const Automations = ({ active = false }: Props) => {
    return (
        <>
            {active ? (
                <Image
                    source={require("@/assets/icons/automations-filled.png")}
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
            ) : (
                <Image
                    source={require("@/assets/icons/automations-outline.png")}
                    style={styles.iconInactive}
                />
            )}
        </>
    );
};

export default Automations;

const styles = StyleSheet.create({
    iconInactive:{
      height:25,
      width:25,
      flexShrink:0,
    },
})