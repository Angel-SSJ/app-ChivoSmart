// @ts-ignore
import {
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import {Navigator, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import 'react-native-reanimated';
import {Provider, useDispatch} from "react-redux";
import { store } from '@/redux/store';
import {getSession} from "@/utils/sessions";
import {setCredentials} from "@/redux/authSlice";
import {useColorScheme, View} from "react-native";
import Slot = Navigator.Slot;
import {StatusBar} from "expo-status-bar";
import Toast from "react-native-toast-message";
import ToastConfig from "@/components/ToastConfig";
import {ThemeProvider} from "@/constants/ThemeContext";
import {RootNavigator} from "@/constants/RootNavigator"
import {useFonts} from "expo-font";
import {Geist_400Regular} from "@expo-google-fonts/geist/400Regular";
import {Geist_600SemiBold} from "@expo-google-fonts/geist/600SemiBold";
import {Geist_900Black} from "@expo-google-fonts/geist/900Black";
import {Geist_700Bold} from "@expo-google-fonts/geist/700Bold";
SplashScreen.preventAutoHideAsync();

function SessionLoader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  console.log('SessionLoader', ready);


  useEffect(() => {
    const init = async () => {
      const session = await getSession();
      if (session) {
        dispatch(setCredentials(session));
      }
      setReady(true);
      await SplashScreen.hideAsync();
    };

    init();
  }, []);


  if (!ready) return <View style={{flex: 1, backgroundColor: '#fff'}}/>;
  return <>{children}</>;
}
  // @ts-ignore
  export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded,error]=useFonts({
      'Geist_400Regular':require('@expo-google-fonts/geist/400Regular'),
      'Geist_600SemiBold':require('@expo-google-fonts/geist/600SemiBold'),
      'Geist_900Black':require('@expo-google-fonts/geist/900Black'),
      'Geist_700Bold':require('@expo-google-fonts/geist/700Bold'),
    });
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }

    return (
        <ThemeProvider>
          <RootNavigator/>
          <Provider store={store}>
            <SessionLoader>
              <Stack screenOptions={{headerShown: false}}/>
              <StatusBar
                  style={colorScheme === "dark" ? "dark" : "light"}
                  backgroundColor={"transparent"}
                  animated={true}
              />
              <Toast config={ToastConfig}/>
            </SessionLoader>
          </Provider>
        </ThemeProvider>
    );
  }
