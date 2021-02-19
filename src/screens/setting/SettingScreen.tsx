import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

import CommonStyles from '@styles/CommonStyles';
import Header from '@components/Header';

const SettingScreen = () => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header />
      <Text>Hello, SettingScreen!</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
