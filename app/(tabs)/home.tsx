import {StyleSheet,Text, TouchableOpacity, View} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

import { LinearGradient } from 'expo-linear-gradient';
import { fontStyles } from '../_layout';
export default function Home(){
const router=useRouter()
    
    return(
        <>
            <View style={stylesHome.containerHeader}>
                <View style={stylesHome.headersLeft}>
                    <TouchableOpacity onPress={() => router.push('/(header)/automations')}>
                        <Ionicons name="person-circle-sharp" size={25} color={Colors.dark.white} />
                    </TouchableOpacity>
                    <Text style={fontStyles.primaryTitle}>Hola, Usuario</Text>



                </View>

                <View style={stylesHome.headersRight}>
                <TouchableOpacity onPress={() => router.push('/(header)/automations')}>
                    <Ionicons name="sparkles-sharp" size={25} color={Colors.dark.white} />
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/(header)/automations')}>
                        <Ionicons name="notifications" size={25} color={Colors.dark.white} />
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor:Colors.dark.black,
    },
})
const stylesHome=StyleSheet.create({
    containerHeader: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: Colors.dark.blackDiluided,
        marginVertical: 12,
        top: 10,
        padding: 20,

    },
    headersRight: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor:Colors.dark.blackDiluided,
        padding:10,
        marginVertical:10,
    },
    headersLeft:{
        position: "relative",
        height: 'auto',
        width: 'auto',
        display: "flex",
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10,
    },
    primaryTitle:{
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        fontFamily:'Black'
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
})
/*
style={{
    backgroundColor: isFocused ? Colors.dark.purple: Colors.dark.blackDiluided,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
}}
container: {
    position:'absolute',
        bottom:5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.dark.blackDiluided,
        marginHorizontal:10,
        paddingVertical:12,
        borderRadius:20,
        borderCurve:'continuous',
        shadowColor:Colors.dark.black,
        shadowOffset:{width:0,height:10},
    shadowRadius:10,
        shadowOpacity:0.1,

},
tabItem: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5,
        borderTopWidth: 5,
        borderTopColor: Colors.dark.blackDiluided,
        gap: 6,
},
tabItemFocused: {
    borderTopColor: Colors.dark.blackDiluided,
},
tabLabel: {
    fontSize: 11,
        color: "#888888",
        textAlign: "center",
},
tabLabelFocused: {
    color: Colors.light.purple,
},
mainIconWrapper: {
    marginTop: -20,
        zIndex: 40,
},
});*/