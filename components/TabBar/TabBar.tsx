import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { buildHref } = useLinkBuilder();
    const icon={
        home:(props:any)=> (<MaterialIcons name={'home-filled'} size={24}  {...props}/>),
        cards:(props:any)=> (<MaterialIcons name={'credit-card'} size={24}  {...props}/>),
        automations:(props:any)=> (<MaterialIcons name={'access-time-filled'} size={24} {...props}/>),
        saves:(props:any)=> (<MaterialIcons name={'cases'} size={24} {...props}/>)
    }
    return (
        <View style={styles.tabbar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                // @ts-ignore
                // @ts-ignore
                return (
                    <PlatformPressable
                        //key={route.name}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabbarItem}
                    >
                        {icon[route.name]({color: isFocused ? '#673ab7' : '#222'})}
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}



const styles=StyleSheet.create({
    tabbar:{
        position:'absolute',
        bottom:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        marginHorizontal:80,
        paddingVertical:15,
        borderRadius:35,
        shadowColor:'#000',
        shadowOffset:{width:0, height:10},
        shadowRadius:10,
        shadowOpacity:0.1
    },
    tabbarItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:5,
    }
})