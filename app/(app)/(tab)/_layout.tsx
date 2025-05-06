import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import {Navigator, Stack, Tabs} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
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
import { TabBar } from "@/components/TabBar/TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";

export default function TabLayout() {
  //const Tab=createBottomTabNavigator();
  return (
      <Stack>
        <Stack.Screen name={'home'} options={{}} />
        <Stack.Screen name={'automations'} options={{}} />
        <Stack.Screen name={'cards'} options={{}} />
        <Stack.Screen name={'saves'} options={{}} />
      </Stack>
  );
}
