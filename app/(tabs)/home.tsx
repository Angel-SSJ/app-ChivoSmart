import {StyleSheet,Text, View} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'



export default function Home(){

    
    return(
        <>
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.dark.background
    },
})