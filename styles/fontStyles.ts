import { StyleSheet } from 'react-native';
//import { Geist_700Bold, Geist_900Black} from "@expo-google-fonts/geist";
import {Geist_400Regular} from "@expo-google-fonts/geist/400Regular";
import {Geist_600SemiBold} from "@expo-google-fonts/geist/600SemiBold";
import {Geist_900Black} from "@expo-google-fonts/geist/900Black";
import {Geist_700Bold} from "@expo-google-fonts/geist/700Bold";


export const formStyles = StyleSheet.create({
    primaryTitle:{
        fontSize:44,
        fontFamily:'Geist_900Black',
    },
    bodyTextRegular:{
        fontSize:16,
        fontFamily:'Geist_400Regular',
    },
    bodyTextXs:{
        fontSize:14,
        fontFamily:'Geist_400Regular',
    },
    bodyTextL:{
        fontSize:20,
        fontFamily:'Geist_600SemiBold',
    },
    bodytextM:{
        fontSize:18,
        fontFamily:'Geist_400Regular',
    },
    FourthTitle:{
        fontSize:18,
        fontFamily:'Geist_700Bold',
    }
})