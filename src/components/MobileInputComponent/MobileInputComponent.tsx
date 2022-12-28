import React, {useCallback, useRef} from "react";
import {
  View,
  TextInput,
  Text,
} from "react-native";

import {Colours} from '../Support files/Colours';
import {ScreenSize} from "../Support files/ScreenSize";
import {Styles} from "../Support files/Styles";

export const MobileInputComponent = ({
  setValue,
  value,
  editable = true,
}: {
  setValue: Function;
  value?: string;
  editable?: boolean;
}) => {
  const handleChangeText = (text: string) => {
    const phoneNumber: string = text.replace(/[^0-9]/, "");
    phoneNumber.charAt(0) === "0" ? setValue(phoneNumber.substring(1)) : setValue(phoneNumber); // removes the 0 if it's placed in front of the rest of the phone number
  }

  // memoized the handleChangeText method to prevent the whole component re-rendering when the inputted text changes
  const memoizedHandleChangeText = useCallback(handleChangeText, []);
  
  return (
    <View style={{...Styles.container, height: ScreenSize.height6p4}}>
      <Text style={{ ...Styles.text, color: Colours.blue, width: ScreenSize.width11 }}>+44 </Text>
      <TextInput
        style={Styles.text}
        onChangeText={memoizedHandleChangeText}
        value={value}
        returnKeyType={"done"}
        keyboardType={"number-pad"}
        maxLength={10}
        multiline={false}
        editable={editable}
        testID="testTextInput"
      />
    </View>
  );
};