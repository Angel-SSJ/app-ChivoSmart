import * as SecureStore from 'expo-secure-store';// NO PERMITE HACERLO EN WEB
import { AuthResponse } from '@/types/auth';

const KEY = 'auth-session';

export async function saveSession(data: AuthResponse) {
    await SecureStore.setItemAsync(KEY, JSON.stringify(data));
}

export async function getSession(): Promise<AuthResponse | null> {
    const result = await SecureStore.getItemAsync(KEY);
    return result ? JSON.parse(result) : null;
}

export async function clearSession() {
    await SecureStore.deleteItemAsync(KEY);
}