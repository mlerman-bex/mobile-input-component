import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from "react-native";

import { Colours } from '../Support files/Colours';
import {ScreenSize} from '../Support files/ScreenSize';
import {Styles} from "../Support files/Styles";
import IconType, { Icons } from '../Support files/VectorIcons';

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
  vectorIcons,
  testID = 'testTextInput',
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
  vectorIcons?: boolean;
  testID?: string;
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focus, setFocus] = useState(false); // focus hook used to determine position of input label
  const [temporaryPlaceholder, setTemporaryPlaceholder] = useState(placeholder);

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  // memoized the handleChangeText method to prevent the whole component re-rendering when the inputted text changes
  const memoizedHandleChangeText = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const determineStyle = () => {
    if (errorLine) {
      return {...Styles.container, borderBottomColor: Colours.errorRed, height: ScreenSize.height6p9}
    }
    else if (focus) {
      return {...Styles.container, borderBottomColor: Colours.blue, height: ScreenSize.height6p9} /* 56 pixels high per figma => 5600/812 = 6.9% */
    }
    else {
      return {...Styles.container, height: ScreenSize.height6p9}
    }
  }

  return(
    <View accessibilityLabel={`Enter ${placeholder}`} accessible={true}>
      {focus && persistentInputLabel && (
        <View>
          <Text style={Styles.inputLabel}>
            {inputLabel}
          </Text>
        </View>
      )}
      <View style={determineStyle()}>
        {vectorIcons && (
          <TouchableOpacity
            style={[Styles.icon, {marginBottom: ScreenSize.margin0p8}]}
            onPress={() => null}
            disabled={true}>
            <IconType
              style={Styles.icon}
              type={Icons.EvilIcons}
              name={'lock'}
              size={ScreenSize.width9p5}
            />
          </TouchableOpacity>
        )}

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
          testID={testID}
        />

        {vectorIcons && (
          <TouchableOpacity
            style={[Styles.icon, {marginLeft: 'auto'}]}
            onPress={togglePasswordVisible}
            disabled={false}>
            <IconType
              style={[Styles.icon, {color: Colours.grey73}]}
              type={Icons.MaterialCommunityIcons}
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={ScreenSize.width7}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};