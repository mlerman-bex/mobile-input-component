import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import { TestButton } from '../components/TestButton/TestButton';
import { Styles } from '../components/Support files/Styles';

export const LogoutScreen = () => {
  return (
    <View style={Styles.testMargin}>
      <Text style={Styles.text}>
        Do you want to log out of your Bex account on all devices? If you do this, you will need to log back in with your email and password.
      </Text>

      <View style={{margin: 60}} />

      <TestButton alertMessage={'log out of all devices'} disabled={false} />
    </View>
  );
};