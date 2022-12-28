import React from 'react';
import {View, Button, Text, Alert} from 'react-native';

export const TestButton = (props: {alertMessage: string; disabled: boolean | undefined}) => {
  const handlePress = () => {
    Alert.alert(props.alertMessage);
  }
  
  return(
    <>
      <View>
        <Button title='Test Button' testID='testButton' onPress={handlePress} disabled={props.disabled} />
        {/* <Text>Test text</Text> */}
      </View>
    </>
  );
};