import { StyleSheet } from 'react-native';
import {Tcolors} from "@/constants/Colors";



export const formStyles= (colors:Tcolors)=> StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: colors.background
    },
    form: {
        width: '100%',
        maxWidth: 500,
        padding: 20,
        backgroundColor: colors.background,
        borderRadius: 8,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: colors.white,
    },
    inputError: {
        borderColor: colors.red,
    },
    label: {
        fontSize: 16,
        color: colors.primaryText,
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
        color:colors.purple,
        textAlign:'center',
        justifyContent:'center',
        padding:40,


    },
    button: {
        backgroundColor:colors.purple,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: colors.primaryText,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: colors.red,
        fontSize: 14,
        marginBottom: 10,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 15,
        color: colors.blue,
        fontSize: 16,
    },
});
