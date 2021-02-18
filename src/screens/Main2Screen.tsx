import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

import CommonStyles from '@styles/CommonStyles';
import Header from '@components/Header';

const Main2Screen = () => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header />
      <Text>Hello, World2!</Text>
    </SafeAreaView>
  );
};

export default Main2Screen;
