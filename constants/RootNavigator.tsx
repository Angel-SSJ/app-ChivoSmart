import useColors from "./useColors"
import {useColorScheme} from "react-native";
import {FC, useEffect} from "react";
import {Colors} from "@/constants/Colors";


// @ts-ignore
export const RootNavigator:FC=()=>{
    const {colors,applyColors}=useColors();
    const colorScheme=useColorScheme();

    useEffect(() => {
        applyColors(colorScheme==='dark'? Colors.dark:Colors.light);
    }, [applyColors, colors]);
}
