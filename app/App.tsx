/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Header from './Header';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.center}>
      <Header />
      <Text>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
