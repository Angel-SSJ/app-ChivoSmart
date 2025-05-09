import {View, TextInput, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {useRootNavigationState, useRouter, } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setCredentials } from '@/redux/authSlice';
import API from '@/api/api';
import { AuthResponse } from '@/types/auth';
import { saveSession } from '@/utils/sessions';
import {useEffect, useState} from "react";
import { formStyles } from '@/styles/formStyles';
import Toast from "react-native-toast-message";
import React from 'react';
import { Colors } from '@/constants/Colors';
const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
});

export default function Login() {
    const router = useRouter();
    const navigationState = useRootNavigationState(); // Espera a que la navegación esté lista
    const dispatch = useDispatch<AppDispatch>();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (navigationState?.key) {
            setIsReady(true); // Solo marcamos como listo cuando la navegación esté montada
        }
    }, [navigationState]);
    const handleLogin = async (values: { email: string; password: string }) => {
        try {
            const response = await API.post<AuthResponse>('/auth/login', values);
            dispatch(setCredentials(response.data));
            await saveSession(response.data);
            if (isReady) {
                router.replace('/home'); // Solo navega si la navegación está lista
            }
        } catch (err: any) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: 'Credenciales incorrectas',
            });
        }
    };

    return (
        <View style={stylesLogin.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={stylesLogin.form}>
                        <Text style={stylesLogin.labelBrand}>Bienvenidos</Text>
                        <Text style={stylesLogin.label}>Email</Text>
                        <TextInput
                            placeholder="Introduce tu email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={[
                                stylesLogin.input,
                                touched.email && errors.email && stylesLogin.inputError,
                            ]}
                        />
                        {touched.email && errors.email && <Text style={stylesLogin.errorText}>{errors.email}</Text>}

                        <Text style={stylesLogin.label}>Contraseña</Text>
                        <TextInput
                            placeholder="Introduce tu contraseña"
                            secureTextEntry
                            value={values.password}
                            onChangeText={handleChange('password')}
                            style={[
                                stylesLogin.input,
                                touched.password && errors.password && stylesLogin.inputError,
                            ]}
                        />
                        {touched.password && errors.password && <Text style={stylesLogin.errorText}>{errors.password}</Text>}

                        <TouchableOpacity onPress={()=> {
                            handleSubmit();
                        }} style={stylesLogin.button}>
                            <Text style={stylesLogin.buttonText}>Iniciar sesión</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/home')}>
                            <Text style={stylesLogin.linkText}>¿No tienes cuenta? Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}
const stylesLogin=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        backgroundColor: Colors.light.background,
        position:'relative'
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
        fontFamily: formStyles.primaryTitle.fontFamily,



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
})