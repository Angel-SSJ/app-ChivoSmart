import {StyleSheet,Text, View} from 'react-native'
import React from 'react'



export default function Automations(){
    return(
        <View style={styles.container}>
            <Text>Automations Screen</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
})