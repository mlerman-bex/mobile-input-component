import React from 'react';
import {View, Button, Text, Alert} from 'react-native';

export const TestButton = (editable: false) => {
  const handlePress = () => {
    Alert.alert('button pressed', 'yeet');
  }
  
  return(
    <>
      <View>
        <Button title='Test Button' testID='testButton' onPress={handlePress} />
        <Text>Test text</Text>
      </View>
    </>
  );
};