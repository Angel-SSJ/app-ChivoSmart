import {StyleSheet,Text, View} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'



export default function Home(){
    const navigation=useNavigation()

    useEffect(() => {
        navigation.setOptions({headerShow:false});
    }, [navigation]);
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
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