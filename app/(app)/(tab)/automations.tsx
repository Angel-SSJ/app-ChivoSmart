import {View, Text, Button, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { logout } from '@/redux/authSlice';
import { useRouter } from 'expo-router';
import { clearSession } from '@/utils/sessions';
import LinearGradient from 'react-native-linear-gradient';
import {Tcolors} from "@/constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { formStyles } from '@/styles/formStyles';
import useStyles from "@/constants/useStyles";

export default function Automations() {
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleLogout = async () => {
        dispatch(logout());
        await clearSession();
        router.replace('/login');
    };

    const {styles}=useStyles(formStyles)

    let linearGradient = <View><LinearGradient colors={['#B38B80', '#CCA8AF', '#976EAA']} start={{x: 0, y: 0}}
                                               end={{x: 1, y: 0}}>
        <Text style={styles.buttonPrimaryText}>Home</Text>
    </LinearGradient></View>;
    return (
        linearGradient
    );
}