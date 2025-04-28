import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { getProfile } from '@/api/api';
import {profileStyles} from "@/styles/profileStyles";  // Asegúrate de que la ruta sea correcta

const Profile = () => {
    const [profile, setProfile] = useState<{ name: string; email: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Cargar perfil al montar el componente
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfile();
                setProfile(data);
            } catch (err) {
                setError('No se pudo obtener el perfil');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <View style={profileStyles.container}>
                <ActivityIndicator size="large" color="#007BFF" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={profileStyles.container}>
                <Text style={profileStyles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.title}>Perfil</Text>
            {profile ? (
                <View style={profileStyles.profileContainer}>
                    <Text style={profileStyles.label}>Nombre: </Text>
                    <Text style={profileStyles.value}>{profile.name}</Text>
                    <Text style={profileStyles.label}>Correo Electrónico: </Text>
                    <Text style={profileStyles.value}>{profile.email}</Text>
                </View>
            ) : (
                <Text>No se pudo cargar el perfil.</Text>
            )}
            <TouchableOpacity onPress={() => router.push('/login')} style={profileStyles.logoutButton}>
                <Text style={profileStyles.logoutButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Profile;