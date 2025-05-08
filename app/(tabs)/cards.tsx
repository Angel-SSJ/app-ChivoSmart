import {StyleSheet,Text, View} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'



export default function CardsScreen(){
    return(
        <>
            <View style={styles.container}>
                <Text>Cards Screen</Text>
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