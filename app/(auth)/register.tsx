import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import API from '@/api/api';
import { formStyles } from '@/styles/formStyles';
import Toast from "react-native-toast-message";

const registerSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Requerido'),
});

export default function Register() {
    const router = useRouter();

    const handleRegister = async (values: { email: string; password: string }) => {
        try {
            await API.post('/register', values); // adapt to your API fields
            router.replace('/login');
        } catch (err: any) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: 'No se pudo registrar. Intenta más tarde.',
            });
        }
    };

    return (
        <View style={formStyles.container}>
            <Formik
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={registerSchema}
                onSubmit={handleRegister}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={formStyles.form}>
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

                        <Text style={formStyles.label}>Confirmar Contraseña</Text>
                        <TextInput
                            placeholder="Confirma tu contraseña"
                            secureTextEntry
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            style={[
                                formStyles.input,
                                touched.confirmPassword && errors.confirmPassword && formStyles.inputError,
                            ]}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <Text style={formStyles.errorText}>{errors.confirmPassword}</Text>
                        )}

                        <TouchableOpacity onPress={() => {
                            handleSubmit();
                        }} style={formStyles.button}>
                            <Text style={formStyles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/login')}>
                            <Text style={formStyles.linkText}>¿Ya tienes cuenta? Inicia sesión</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}