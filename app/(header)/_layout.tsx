import {Navigator, Stack, Tabs} from 'expo-router';

import 'react-native-reanimated';

import TabBar from "@/components/TabBar/TabBar";
import React from "react";
import { SafeAreaView } from 'react-native';




const tabScreens=[
    {name:"home", title: 'home'},
    {name:"automations", title: 'automations'},
    {name:"cards", title: 'cards'},
    {name:"saves", title: 'saves'},
];

export default function TabLayout() {
    return (
    <SafeAreaView style={{'flex': 1}}>
        <Tabs
        screenOptions={{
            headerShown:false,
        }}
        tabBar={(props:any)=> <TabBar {...props}/>}
        >
          {tabScreens.map(({name,title})=>  (
              <Tabs.Screen
                key={name}
                name={name}
                  options={{title,
                }}
              />
          ))}
        </Tabs>
    </SafeAreaView>
    );
}
