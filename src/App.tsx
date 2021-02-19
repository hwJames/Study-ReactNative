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
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from '@screens/MainScreen';
import Main2Screen from '@screens/Main2Screen';

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainDrawer">
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="Main2" component={Main2Screen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
