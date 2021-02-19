/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from '@screens/main/MainScreen';
import Main2Screen from '@screens/main/Main2Screen';
import SettingScreen from '@screens/setting/SettingScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main2"
        component={Main2Screen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SettingStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainDrawer">
        <Drawer.Screen name="Main" component={MainStackScreen} />
        <Drawer.Screen name="Setting" component={SettingStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
