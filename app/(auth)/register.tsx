import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import API from '@/api/api';
import {formStyles} from '@/styles/formStyles';
import Toast from "react-native-toast-message";
import useStyles from "@/constants/useStyles";

const registerSchema = Yup.object().shape({
    first_name:Yup.string().required('Requerido'),
    last_name:Yup.string().required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Requerido'),
});
// @ts-ignore
export default function Register() {
    const router = useRouter();
    const {styles}=useStyles(formStyles)
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
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '', confirm_password: '' , last_name:'', first_name:'', }}
                validationSchema={registerSchema}
                onSubmit={handleRegister}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.form}>
                        <Text style={styles.labelBrand}>ChivoSmart</Text>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            placeholder="Introduce tu nombre"
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            autoCapitalize="none"
                            keyboardType="default"
                            style={[
                                styles.input,
                                touched.first_name && errors.first_name && styles.inputError,
                            ]}
                        />
                        {touched.first_name && errors.first_name && <Text style={styles.errorText}>{errors.first_name}</Text>}

                        <Text style={styles.label}>Apellido</Text>
                        <TextInput
                            placeholder="Introduce tu apellido"
                            value={values.last_name}
                            onChangeText={handleChange('last_name')}
                            autoCapitalize="none"
                            keyboardType={'default'}
                            style={[
                                styles.input,
                                touched.last_name && errors.last_name && styles.inputError,
                            ]}
                        />
                        {touched.last_name && errors.last_name && <Text style={styles.errorText}>{errors.last_name}</Text>}

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder="Introduce tu email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={[
                                styles.input,
                                touched.email && errors.email && styles.inputError,
                            ]}
                        />
                        {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            placeholder="Introduce tu contraseña"
                            secureTextEntry
                            value={values.password}
                            onChangeText={handleChange('password')}
                            style={[
                                styles.input,
                                touched.password && errors.password && styles.inputError,
                            ]}
                        />
                        {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <Text style={styles.label}>Confirmar Contraseña</Text>
                        <TextInput
                            placeholder="Confirma tu contraseña"
                            secureTextEntry
                            value={values.confirm_password}
                            onChangeText={handleChange('confirm_password')}
                            style={[
                                styles.input,
                                touched.confirm_password && errors.confirm_password && styles.inputError,
                            ]}
                        />
                        {touched.confirm_password && errors.confirm_password && (
                            <Text style={styles.errorText}>{errors.confirm_password}</Text>
                        )}

                        <TouchableOpacity onPress={() => {
                            handleSubmit();
                        }} style={styles.button}>
                            <Text style={styles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/login')}>
                            <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia sesión</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}