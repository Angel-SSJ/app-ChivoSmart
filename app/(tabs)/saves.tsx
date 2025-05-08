import {StyleSheet,Text, View} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'



export default function SavesScreen(){
    return(
        <>
            <View style={styles.container}>
                <Text>Saves Screen</Text>
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