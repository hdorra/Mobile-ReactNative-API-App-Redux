import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MainList_Screen from '../screens/MainList_Screen';
import Details_Screen from '../screens/Details_Screen';
import FavoritesScreen from '../screens/FavoritesScreen';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator(){
  return(
   <Stack.Navigator>
        <Stack.Screen 
          name="Home"
              component={MainList_Screen}
          options={{ title: 'Home Page', HeaderLeft: () => <HeaderLeft />}}
          />
        <Stack.Screen 
          name="Details"
          component={Details_Screen}
          options = {{title: 'Details'}}
          />
    </Stack.Navigator>
  )
}

function AppNavigator(){
  return(
    <NavigationContainer>
          <Tabs.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: () => {
                      let iconName;
                      if (route.name == "Home") {
                          iconName = "home"
                      } else if (route.name == "Favorites") {
                          iconName = 'favorite-border'
                      }
                      return <MaterialIcons name={iconName} size={24} />
                  }
              })}
          >
              <Tabs.Screen
                  name="Home"
                  options={{ headerShown: false }}
                  component={HomeNavigator}

              />
              <Tabs.Screen
                  name="Favorites"
                  component={FavoritesScreen}
              />
          </Tabs.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator;

