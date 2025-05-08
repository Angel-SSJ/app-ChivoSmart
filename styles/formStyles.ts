import { StyleSheet } from 'react-native';
import {Colors} from "@/constants/Colors";



export const formStyles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: Colors.light.background,
    },
    form: {
        width: '100%',
        maxWidth: 500,
        padding: 20,
        backgroundColor: Colors.light.background,
        borderRadius: 8,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: Colors.light.primaryText,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: Colors.light.white,
    },
    inputError: {
        borderColor: Colors.light.red,
    },
    label: {
        fontSize: 16,
        color: Colors.light.primaryText,
        marginBottom: 5,
    },
    title_one:{
        fontSize:40,
        color:"#F7F7F1",
        textAlign:'center',
        justifyContent:'center',
        padding:30,
        fontWeight:'condensedBold',
    },
    labelBrand:{
        fontSize:40,
        color:Colors.light.purple,
        textAlign:'center',
        justifyContent:'center',
        padding:40,


    },
    button: {
        backgroundColor:Colors.light.purple,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: Colors.light.primaryText,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: Colors.light.red,
        fontSize: 14,
        marginBottom: 10,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 15,
        color: Colors.light.blue,
        fontSize: 16,
    },
});
