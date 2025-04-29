import * as React from 'react';
import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {formStyles} from "../../styles/formStyles";
import useStyles from "../../constants/useStyles";


import {Ionicons} from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//Screens
import Home from 'app/(app)/(tab)/home'
import Cards from 'app/(app)/(tab)/cards'
import Automations from 'app/(app)/(tab)/automations'
import Saves from 'app/(app)/(tab)/saves'

//Screen names
const homeName ='tab/Home';
const automationsName='tab/Automations';
const cardsName='tab/Cards';
const savesName='tab/Saves';


const Tab =createBottomTabNavigator();

export default function NavbarComponent(){
    const {styles}=useStyles(formStyles)
    return(
        <View>
            <NavigationContainer styles={styles.navBarContainer}>
                <Tab.Navigator styles={styles.navBarVectorContainer}

                  initialRouteName={homeName}
                    screenOptions={({route})=>({
                        tabBarIcon:(focused)=>{
                            let iconName;
                            let rn= route.name;
                            if (rn === homeName){
                                iconName =focused?'home':'home-filled'
                            }
                            if (rn === automationsName){
                                iconName =focused?'time-outline':'time'
                            }
                            if (rn === cardsName){
                                iconName =focused?'card-outline':'card'
                            }
                            if (rn === savesName){
                                iconName =focused?'albums-outline':'albums'
                            }
                            return(
                                <View>
                                    <View style={focused? styles.navBarVectorNoPress:styles.navBarVectorPress} >
                                        <Ionicons name={iconName} styles={styles.navBarVector}></Ionicons>
                                    </View>
                                </View>
                            )
                        },
                    }
                  )}
                >
                <Tab.Screen name={homeName} component={Home}></Tab.Screen>
                <Tab.Screen name={homeName} component={Automations}></Tab.Screen>
                <Tab.Screen name={homeName} component={Cards}></Tab.Screen>
                <Tab.Screen name={homeName} component={Saves}></Tab.Screen>


                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}
