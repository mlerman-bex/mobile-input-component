import React, {useCallback, useState} from "react";
import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
} from "react-native";

import {ScreenSize} from '../Support files/ScreenSize';
import {Styles} from "../Support files/Styles";

export const InputComponent = ({
  setValue,
  value,
  editable = true,
  placeholder,
  inputLabel,
  persistentInputLabel,
  onFocus = () => null,
  onSubmitEditing = () => null,
  keyboardType = "default",
}: {
  setValue: Function;
  value?: string;
  editable?: boolean;
  placeholder?: string;
  inputLabel?: string;
  persistentInputLabel?: boolean;
  onFocus?: Function;
  onSubmitEditing?: Function;
  keyboardType?: KeyboardTypeOptions;
}) => {
  const [focus, setFocus] = useState(false); // focus hook used to determine position of input label
  const [temporaryPlaceholder, setTemporaryPlaceholder] = useState(placeholder);

  const [height, setHeight] = useState(ScreenSize.height3);
  const updateSize = (height: number) => setHeight(height);
  
  const handleChangeText = (text: string) => {
    setValue(text); // continuous checks, see if other cases pop up and modify input type dynamically
  };

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
      <View style={{...Styles.container, height: ScreenSize.height6p9 /* 56 pixels high per figma => 5600/812 = 6.9% */}}>
        <TextInput
          style={{...Styles.text, height: height}}
          onChangeText={memoizedHandleChangeText}
          value={value}
          placeholder={temporaryPlaceholder}
          returnKeyType={"done"}
          keyboardType={keyboardType}
          multiline={true}
          onContentSizeChange={(event) => updateSize(event.nativeEvent.contentSize.height)}
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
      </View>
    </View>
  );
};