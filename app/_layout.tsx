// @ts-ignore

import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import {DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import {Navigator, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import 'react-native-reanimated';
import {Provider, useDispatch} from "react-redux";
import { store } from '@/redux/store';
import {getSession} from "@/utils/sessions";
import {setCredentials} from "@/redux/authSlice";
import {StyleSheet, useColorScheme, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Toast from "react-native-toast-message";
import toastConfig from "@/components/ToastConfig";

import {useFonts} from "expo-font";
import { Colors } from "@/constants/Colors";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});


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
  }, [getSession,dispatch,setCredentials,SplashScreen]);

   if (!ready) return <View style={{flex: 1, backgroundColor: '#fff'}}/>;
  return <>{children}</>;
}





const commonScreenOptions = {
    headerShown: false,
    animation: "fade_from_bottom",
};

const screens=[
    {name:"(tabs)", options: {navigationBarColor:Colors.dark.background}},
    //{name:"(tabs)/automations", options: {navigationBarColor:Colors.light.background}},
    //{name:"(tabs)/cards", options: {navigationBarColor:Colors.light.background}},
    //{name:"(tabs)/saves", options: {navigationBarColor:Colors.light.background}},

    {name:"(auth)/login", options: {navigationBarColor:Colors.dark.background}},
    {name:"(auth)/register", options: {navigationBarColor:Colors.dark.background}},
    {name:"(auth)/index", options: {navigationBarColor:Colors.dark.background}},

    {name:"+not-found", options: {navigationBarColor:Colors.dark.background}},



]
const [fontsLoaded] = useFonts({
    'Black': require("../assets/fonts/Geist/Geist-Black.ttf"),
    'Bold': require("../assets/fonts/Geist/Geist-Bold.ttf"),
    'ExtraBold': require("../assets/fonts/Geist/Geist-ExtraBold.ttf"),
    'ExtraLight': require("../assets/fonts/Geist/Geist-ExtraLight.ttf"),
    'Light': require("../assets/fonts/Geist/Geist-Light.ttf"),
    'Medium': require("../assets/fonts/Geist/Geist-Medium.ttf"),
    'Regular': require("../assets/fonts/Geist/Geist-Regular.ttf"),
    'SemiBold': require("../assets/fonts/Geist/Geist-SemiBold.ttf"),
    'Thin': require("../assets/fonts/Geist/Geist-Thin.ttf"),
});

useEffect(() => {
    if( fontsLoaded){
        SplashScreen.hideAsync();
    }
}, [fontsLoaded]);
{/*if(!fontsLoaded) return null;*/}



export default function RootLayout() {


//function to notification to registered

const colorScheme = useColorScheme();
return (

    <ThemeProvider value={colorScheme=='dark'?DarkTheme:DefaultTheme}>
        <Provider store={store}>
            <SessionLoader>
                  <Stack >
                    {screens.map(({name,options}) =>(
                        <Stack.Screen
                        key={name}
                        name={name}
                        options={{
                          ...(commonScreenOptions as NativeStackNavigationOptions),
                          ...options,
                        }}
                        />
                    )  )}
                </Stack>
                <StatusBar
                      style={colorScheme === "dark" ? "dark" : "light"}
                      backgroundColor={Colors.dark.white}
                      animated={true}
                  />
            </SessionLoader>
            <Toast config={toastConfig} />
        </Provider>
        
    </ThemeProvider>
        );
}

export const fontStyles=StyleSheet.create({
    primaryTitle:{
        fontSize:44,
        fontFamily:'Black',
    },
    bodyTextRegular:{
        fontSize:16,
        fontFamily:'Regular',
    },
    bodyTextXs:{
        fontSize:14,
        fontFamily:'Regular',
    },
    bodyTextL:{
        fontSize:20,
        fontFamily:'SemiBold',
    },bodytextM:{
        fontSize:18,
        fontFamily:'Bold',
    },
    FourthTitle:{
        fontSize:18,
        fontFamily:'Bold',
    }
})