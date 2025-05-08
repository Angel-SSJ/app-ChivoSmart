import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useRootNavigationState, useRouter} from 'expo-router';
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
    //const {styles}=useStyles(formStyles)
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
        <View style={formStyles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={formStyles.form}>
                        <Text style={formStyles.labelBrand}>Bienvenidos</Text>
                        <Text style={formStyles.label}>Email</Text>
                        <TextInput
                            placeholder="Introduce tu email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={[
                                formStyles.input,
                                touched.email && errors.email && formStyles.inputError,
                            ]}
                        />
                        {touched.email && errors.email && <Text style={formStyles.errorText}>{errors.email}</Text>}

                        <Text style={formStyles.label}>Contraseña</Text>
                        <TextInput
                            placeholder="Introduce tu contraseña"
                            secureTextEntry
                            value={values.password}
                            onChangeText={handleChange('password')}
                            style={[
                                formStyles.input,
                                touched.password && errors.password && formStyles.inputError,
                            ]}
                        />
                        {touched.password && errors.password && <Text style={formStyles.errorText}>{errors.password}</Text>}

                        <TouchableOpacity onPress={()=> {
                            handleSubmit();
                        }} style={formStyles.button}>
                            <Text style={formStyles.buttonText}>Iniciar sesión</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/home')}>
                            <Text style={formStyles.linkText}>¿No tienes cuenta? Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}