import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import { Colours } from '../components/Support files/Colours';

import { Styles } from '../components/Support files/Styles';

export const CustomerSupportScreen = () => {
  const handleStartConversationPress = () => {
    Alert.alert('start a conversation');
  };
  
  return (
    <View style={Styles.testMargin}>
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <Text>*inbox icon*</Text>

        <Text style={{...Styles.text, textAlign: 'center'}}>
          Conversations started from this app will be visible here
        </Text>

        <TouchableOpacity onPress={handleStartConversationPress}>
          <Text style={{...Styles.text, textAlign: 'center', color: Colours.blue}}>
            Start a conversation
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};