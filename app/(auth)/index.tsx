import {useRootNavigationState, useRouter} from 'expo-router';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function Index() {
    const { token } = useSelector((state: RootState) => state.auth);
    const router = useRouter();
    const navigationState = useRootNavigationState(); // Espera a que la navegación esté lista
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (navigationState?.key) {
            setIsReady(true); // Solo marcamos como listo cuando la navegación esté montada
        }
    }, [navigationState]);


    useEffect(() => {
        if (isReady) {
            if (token) {
                router.replace('/home');
            } else {
                router.replace('/login');
            }
        }
    }, [token, isReady]);

    return null;
}