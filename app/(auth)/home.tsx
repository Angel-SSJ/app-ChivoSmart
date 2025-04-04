import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { logout } from '@/redux/authSlice';
import { useRouter } from 'expo-router';
import { clearSession } from '@/utils/sessions';

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
        <View style={{ padding: 20 }}>
            <Text>Welcome, {user?.email}</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}