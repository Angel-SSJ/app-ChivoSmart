import useStyles from "@/constants/useStyles";
import { FC } from "react";
import {View} from "react-native";
import {Tcolors} from "@/constants/Colors";
import {StyleSheet} from "react-native";

const MyComponent:FC=()=>{
    // @ts-ignore
    const{colors,styles}=useStyles(createStyles);
    return <View style={styles.container}></View>
}

const createStyles=(colors:Tcolors)=>
    StyleSheet.create({
        container:{
            backgroundColor:colors.background
        }

    })