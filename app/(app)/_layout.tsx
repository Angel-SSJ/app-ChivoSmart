// @ts-ignore
import {
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import {Navigator, Stack, useRouter} from 'expo-router';
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
import NavbarComponent from "@/components/navigationBar/NavbarComponent";
SplashScreen.preventAutoHideAsync();

  // @ts-ignore
  export default function RootLayout() {
    return (
        <ThemeProvider>
          <RootNavigator/>
            <NavbarComponent/>
        </ThemeProvider>
    );
  }
