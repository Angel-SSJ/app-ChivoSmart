import {View, TextInput, Button, Text, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import API from '@/api/api';
import { formStyles } from '@/styles/formStyles';
import Toast from "react-native-toast-message";

const registerSchema = Yup.object().shape({
    first_name:Yup.string().required('Requerido'),
    last_name:Yup.string().required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Requerido'),
});

export default function Register() {
    const router = useRouter();

    const handleRegister = async (values: { email: string; password: string;first_name:string; last_name:string }) => {
        try {
            await API.post('/auth/register', values); // adapt to your API fields
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
                initialValues={{ email: '', password: '', confirm_password: '' , last_name:'', first_name:'', }}
                validationSchema={registerSchema}
                onSubmit={handleRegister}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={formStyles.form}>
                        <Text style={formStyles.labelBrand}>ChivoSmart</Text>
                        <Text style={formStyles.label}>Nombre</Text>
                        <TextInput
                            placeholder="Introduce tu nombre"
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            autoCapitalize="none"
                            keyboardType="default"
                            style={[
                                formStyles.input,
                                touched.first_name && errors.first_name && formStyles.inputError,
                            ]}
                        />
                        {touched.first_name && errors.first_name && <Text style={formStyles.errorText}>{errors.first_name}</Text>}

                        <Text style={formStyles.label}>Apellido</Text>
                        <TextInput
                            placeholder="Introduce tu apellido"
                            value={values.last_name}
                            onChangeText={handleChange('last_name')}
                            autoCapitalize="none"
                            keyboardType={'default'}
                            style={[
                                formStyles.input,
                                touched.last_name && errors.last_name && formStyles.inputError,
                            ]}
                        />
                        {touched.last_name && errors.last_name && <Text style={formStyles.errorText}>{errors.last_name}</Text>}

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
                            value={values.confirm_password}
                            onChangeText={handleChange('confirm_password')}
                            style={[
                                formStyles.input,
                                touched.confirm_password && errors.confirm_password && formStyles.inputError,
                            ]}
                        />
                        {touched.confirm_password && errors.confirm_password && (
                            <Text style={formStyles.errorText}>{errors.confirm_password}</Text>
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