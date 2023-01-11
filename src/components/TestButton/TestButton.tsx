import React from 'react';
import {Button, Alert} from 'react-native';

export const TestButton = (props: {alertMessage: string; disabled: boolean | undefined}) => {
  const handlePress = () => {
    Alert.alert('TestButton Info', props.alertMessage);
  }
  
  return (
    <Button title='Test Button' testID='testButton' onPress={handlePress} disabled={props.disabled} />
  );
};