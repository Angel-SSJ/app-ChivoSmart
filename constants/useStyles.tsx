import {StyleSheet} from "react-native";
import {Tcolors} from "@/constants/Colors";
import useColors from "@/constants/useColors";
import {useMemo} from "react";

interface Styles<T extends StyleSheet.NamedStyles<T>>{
    colors:Tcolors;
    styles:T,
}

export default function <T extends StyleSheet.NamedStyles<T>>(
    createStyle:(colors:Tcolors)=>T,
):Styles<T>{
    const {colors}=useColors();

    return {
        colors:colors,
        styles:useMemo(()=> createStyle(colors),[colors,createStyle]),
    };
}