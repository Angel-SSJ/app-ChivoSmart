import {View, Text, Button, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { logout } from '@/redux/authSlice';
import { useRouter } from 'expo-router';
import { clearSession } from '@/utils/sessions';
import {formStyles} from "@/styles/formStyles";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleLogout = async () => {
        dispatch(logout());
        await clearSession();
        router.replace('/login');
    };

    return (
        <View style={formStyles.container}>
            <Text style={formStyles.title_one}>Obra en construcción</Text>
            <MaterialIcons name={'construction'} size={100}  color={'#E1DED4'}></MaterialIcons>
            <View style={formStyles.form}>

            <TouchableOpacity
                onPress={handleLogout}
                style={formStyles.button}>
                <Text style={formStyles.buttonText}>Logout</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => router.push('/profile')}
                style={formStyles.button}>
                    <Text style={formStyles.linkText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}