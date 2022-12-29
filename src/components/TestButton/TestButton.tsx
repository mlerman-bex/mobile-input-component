import React from 'react';
import {Button, Alert} from 'react-native';

export const TestButton = (props: {alertMessage: string; disabled: boolean | undefined}) => {
  const handlePress = () => {
    Alert.alert(props.alertMessage);
  }
  
  return (
    <Button title='Test Button' testID='testButton' onPress={handlePress} disabled={props.disabled} />
  );
};