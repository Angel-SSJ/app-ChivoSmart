import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: '#2C2B2C',
    },
    form: {
        width: '100%',
        maxWidth: 500,
        padding: 20,
        backgroundColor: '#2C2B2C',
        borderRadius: 8,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    inputError: {
        borderColor: '#ff0000',
    },
    label: {
        fontSize: 16,
        color: '#F7F7F1',
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
        color:"#F7F7F1",
        textAlign:'center',
        justifyContent:'center',
        padding:40,


    },
    button: {
        backgroundColor: '#4E6C8B',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#E1DED4',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: '#ff0000',
        fontSize: 14,
        marginBottom: 10,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 15,
        color: '#E1DED4',
        fontSize: 16,
    },
});