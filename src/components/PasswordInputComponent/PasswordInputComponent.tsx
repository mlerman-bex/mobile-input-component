import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colours } from '../Support files/Colours';

import {ScreenSize} from '../Support files/ScreenSize';
import {Styles} from "../Support files/Styles";

export const PasswordInputComponent = ({
  setPassword,
  password,
  editable = true,
  placeholder,
  inputLabel,
  persistentInputLabel,
  onFocus = () => null,
  onSubmitEditing = () => null,
  errorLine,
  testID,
}: {
  setPassword: Function;
  password?: string;
  editable?: boolean;
  placeholder?: string;
  inputLabel?: string;
  persistentInputLabel?: boolean;
  onFocus?: Function;
  onSubmitEditing?: Function;
  errorLine?: boolean;
  testID?: string;
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focus, setFocus] = useState(false); // focus hook used to determine position of input label
  const [temporaryPlaceholder, setTemporaryPlaceholder] = useState(placeholder);

  const handleChangeText = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  }

  // memoized the handleChangeText method to prevent the whole component re-rendering when the inputted text changes
  const memoizedHandleChangeText = useCallback(handleChangeText, []);

  return(
    <View accessibilityLabel={`Enter ${placeholder}`} accessible={true}>
      {focus && persistentInputLabel && (
        <View>
          <Text style={Styles.inputLabel}>
            {inputLabel}
          </Text>
        </View>
      )}
      <View style={errorLine ? {...Styles.container, height: ScreenSize.height6p9, borderBottomColor: Colours.red} : {...Styles.container, height: ScreenSize.height6p9}}>
        <TextInput
          style={Styles.text}
          onChangeText={memoizedHandleChangeText}
          value={password}
          placeholder={temporaryPlaceholder}
          returnKeyType={"done"}
          keyboardType={"default"}
          multiline={false}
          secureTextEntry={passwordVisible ? false : true}
          editable={editable}
          onFocus={() => {
            onFocus();
            setFocus(true);
            setTemporaryPlaceholder("");
          }}
          onSubmitEditing={() => {
            onSubmitEditing();
          }}
          blurOnSubmit={true}
          testID="testTextInput"
        />
        <TouchableOpacity onPress={togglePasswordVisible} testID="testPasswordToggleTouchableOpacity">
          <Text style={Styles.showHideToggle} testID="testPasswordToggleText">{passwordVisible ? "hide" : "show"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};