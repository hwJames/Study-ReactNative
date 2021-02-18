import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import CommonStyles from '@styles/CommonStyles';
import Header from '@components/Header';

const styles = StyleSheet.create({
  centent: {
    flex: 1,
  },
});

const MainScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header />
      <Text style={styles.centent} onPress={() => navigation.navigate('Main2')}>
        Hello, World!
      </Text>
    </SafeAreaView>
  );
};

export default MainScreen;
