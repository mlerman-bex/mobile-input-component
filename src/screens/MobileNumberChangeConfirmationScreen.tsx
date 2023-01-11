import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import { Styles } from '../components/Support files/Styles';

export const MobileNumberChangeConfirmationScreen = () => {
  return (
    <View style={Styles.testMargin}>
      <Text>*check logo*</Text>

      <Text style={{...Styles.text, textAlign: 'center'}}>
        Your mobile number change is done
      </Text>

      <Text style={{...Styles.text, textAlign: 'center'}}>
        Your new number is now active
      </Text>
    </View>
  );
};