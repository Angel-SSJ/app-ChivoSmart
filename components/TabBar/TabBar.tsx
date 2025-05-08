import {TouchableOpacity,StyleSheet, View } from "react-native";
import Home from "../icons/home";
import Automations from "../icons/automations";
import Cards from "../icons/cards";
import Saves from "../icons/saves";
import React from "react";
import { Colors } from "@/constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
type TabBarProps={
    state:any;
    descriptors:any;
    navigation:any;
}

const TabBar =({state, descriptors,navigation}:TabBarProps)=>{
    const icons={
        home:(props:any)=> <FontAwesome name="home" size={25} color={Colors.dark.background} {...props} />,
        automations:(props:any)=> <FontAwesome name="tasks" size={25} color={Colors.dark.background} {...props} />,
        cards:(props:any)=> <FontAwesome name="credit-card-alt" size={20} color={Colors.dark.background} {...props} />,
        saves:(props:any)=> <FontAwesome name="dropbox" size={25} color={Colors.dark.background} {...props} />,
    }
    return(
        <>
            <View style={styles.container}>
                {state.routes.map((route:any, index:any)=>{
                    const href = route.name ==='main'?'home': route.name;
                    const {options} = descriptors[route.key];
                    const label =options.tabBarLabel?? options.title?? route.name;

                    const isFocused=state.index === index;
                    const onPress=()=>{
                        const event = navigation.emit({
                            type:'tabPress',
                            target:route.key,
                            canPreventDefault:true,
                        });

                        if (!isFocused && !event.defaultPrevented){
                            navigation.navigate(href,route.params);
                        }
                    };

                    const onLongPress=()=>{
                        navigation.emit({
                            type:'tabLongPress',
                            target:route.key,
                        });
                    };

                    // Icon selection xd

                    let IconComponent = null;
                    switch (route.name){
                        case'home':
                            IconComponent= <Home active={isFocused}/>;
                            break;
                        case 'automations':
                            IconComponent= <Automations active={isFocused}/>
                            break;
                        case 'cards':
                            IconComponent= <Cards active={isFocused}/>
                            break;
                        case 'saves':
                            IconComponent= <Saves active={isFocused}/>
                            break;
                    }

                    // @ts-ignore
                    return(
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[styles.tabItem, isFocused && styles.tabItemFocused]}
                        >
                            <View
                                style={{
                                    backgroundColor: isFocused ? Colors.dark.purple: Colors.dark.blackDiluided,
                                    borderRadius: 15,
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                }}
                            >
                                {icons[route.name]({
                                    color: isFocused? Colors.light.background:Colors.dark.purple,
                                })}

                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </>
    );
};

export default TabBar;
const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom:5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.dark.blackDiluided,
        marginHorizontal:10,
        paddingVertical:12,
        borderRadius:20,
        borderCurve:'continuous',
        shadowColor:Colors.dark.black,
        shadowOffset:{width:0,height:10},
        shadowRadius:10,
        shadowOpacity:0.1,

    },
    tabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5,
        borderTopWidth: 5,
        borderTopColor: Colors.dark.blackDiluided,
        gap: 6,
    },
    tabItemFocused: {
        borderTopColor: Colors.dark.blackDiluided,
    },
    tabLabel: {
        fontSize: 11,
        color: "#888888",
        textAlign: "center",
    },
    tabLabelFocused: {
        color: Colors.light.purple,
    },
    mainIconWrapper: {
        marginTop: -20,
        zIndex: 40,
    },
});