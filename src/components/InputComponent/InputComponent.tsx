import React, {useCallback, useEffect, useState} from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {Icon} from "react-native-vector-icons/Icon";

import {
  regexBexPin,
  regexDate,
  regexDefault,
  regexEmail,
  regexMobile,
  regexPassword,
  regexVerificationCode
} from "../../../constants/RegularExpressions";
import {Colours} from "../Support files/Colours";
import {Styles} from "../Support files/Styles";
import {ScreenSize} from "../Support files/ScreenSize";
import IconType from "../Support files/VectorIcons";

export const InputComponent = ({
  inputType = "default", // default regex case to test
  setValue,
  value,
  editable = true,
  placeholder,
  inputLabel,
  persistentInputLabel,
  onFocus = () => null,
  onSubmitEditing = () => null,
  keyboardType = "default",
  autoCapitalize,
  multiline = true,
  prefixText,
  maxLength,
  fieldName, // fieldName & errorMessage used for individual InputComponent error messages
  errorMessage = `Please enter an acceptable ${fieldName?.toLowerCase()}`,
  forcedError,
  iconLeft,
  iconRight,
  testID = "testTextInput",
}: {
  inputType?: 'default' | 'email' | 'mobile' | 'date' | 'code' | 'login' | 'password' | 'bexPin';
  setValue: Function;
  value: string;
  editable?: boolean;
  placeholder?: string;
  inputLabel?: string;
  persistentInputLabel?: boolean;
  onFocus?: Function;
  onSubmitEditing?: Function;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  multiline?: boolean;
  prefixText?: string;
  maxLength?: number;
  fieldName?: string;
  errorMessage?: string;
  forcedError?: boolean;
  iconLeft?: {
    type: typeof Icon | typeof FontAwesome5Icon;
    name: string;
    additionalStyle?: StyleProp<TextStyle>;
    disabled: boolean;
    size?: number;
    iconPress: Function;
  };
  // two icon props used for InputComponents that use two icons on either side of TextInput
  iconRight?: {
    type: typeof Icon | typeof FontAwesome5Icon;
    name: string;
    additionalStyle?: StyleProp<TextStyle>;
    disabled: boolean;
    size?: number;
    iconPress: Function;
  };
  testID?: string;
}) => {
  // focus hook used to determine position of input label & changes borderBottomColor to blue/red
  const [focus, setFocus] = useState(false);
  const [temporaryPlaceholder, setTemporaryPlaceholder] = useState(placeholder); // used with inputLabel
  // used to show the red error line with an error message underneath
  const [showErrorLine, setShowErrorLine] = useState(false);
  
  // memoized the handleChangeText method to prevent the whole component re-rendering when the inputted text changes
  const memoizedHandleChangeText = useCallback((text: string) => {
    // checking the case of the respective inputType and text used in the InputComponent
    (inputType === "default" && regexDefault.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "password" && regexPassword.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "email" && regexEmail.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "mobile" && regexMobile.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "date" && regexDate.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "code" && regexVerificationCode.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "login" && (regexEmail.test(text)
                            || regexMobile.test(text))) ? setShowErrorLine(false) : setShowErrorLine(true);
    (inputType === "bexPin" && regexBexPin.test(text)) ? setShowErrorLine(false) : setShowErrorLine(true);
    
    setValue(text);
  }, [inputType, setValue]); // function called when the dependancy variables change

  useEffect(() => {
    // forcedError uses invalid input case style eg. when login credentials don't match
    // will implement properly when the use of legin credential checks are implemented
    forcedError ? setShowErrorLine(true) : setShowErrorLine(false);
  }, [forcedError]);

  // function to determine the style of the icons & TextInput container,
  // i.e. the line colour and text underneath, based on the focus/showErrorLine hooks
  const determineStyle = () => {
    if (showErrorLine) {
      return {
        ...Styles.container,
        borderBottomColor: Colours.errorRed,
        height: ScreenSize.height6p9,
        // (pixels/812)*100 = height percentage, 56 pixels high per FIGMA => 5600/812 = 6.9%
      };
    }

    else if (focus) {
      return {
        ...Styles.container,
        borderBottomColor: Colours.blue,
        height: ScreenSize.height6p9,
      }; 
    }
    else {
      return {
        ...Styles.container,
        height: ScreenSize.height6p9,
      };
    }
  };
  
  return (
    <View accessibilityLabel={`Enter ${placeholder}`} accessible={true}>
      {/* this is the inputLabel above the TextInput area */}
      {focus && persistentInputLabel && (
        <View>
          <Text style={Styles.inputLabel}>
            {inputLabel}
          </Text>
        </View>
      )}

      {/* style is a function that returns the appropriate styles for the hook that is active at that time */}
      <View style={determineStyle()}>
        {iconLeft &&  (
            <TouchableOpacity
              style={focus ? {...Styles.icon, marginTop: -ScreenSize.margin0p3} : Styles.icon}
              onPress={() => iconLeft.iconPress()}
              disabled={iconLeft.disabled}>
              <IconType
                style={[
                  Styles.icon,
                  iconLeft.additionalStyle
                ]} // array used here to apply multiple styles to one icon
                type={iconLeft.type}
                name={iconLeft.name}
                size={iconLeft.size}
              />
            </TouchableOpacity>
          )}

        {/* used incase of any specific case of TextInput with characters before */}
        {prefixText && (
          <Text style={{
            ...Styles.text,
            color: Colours.blue,
            height: ScreenSize.height2p2,
            width: ScreenSize.width11,
            }}>
              {prefixText}
            </Text>
        )}

        <TextInput
          style={iconLeft
            ? {...Styles.text, marginLeft: ScreenSize.margin0p55}
            : {...Styles.text}
          }
          onChangeText={memoizedHandleChangeText}
          value={value}
          placeholder={temporaryPlaceholder}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          maxLength={maxLength}
          editable={editable}
          onFocus={() => {
            onFocus();
            setFocus(true);
            setTemporaryPlaceholder("");
          }}
          onSubmitEditing={() => {
            onSubmitEditing();
          }}
          testID={testID}
        />

        {iconRight && (
          <TouchableOpacity
            style={{...Styles.icon, marginLeft: "auto"}}
            onPress={() => iconRight.iconPress()}
            disabled={iconRight.disabled}>
            <IconType
              style={[Styles.icon, iconRight.additionalStyle]}
              type={iconRight.type}
              name={iconRight.name}
              size={iconRight.size}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* errorMessage that shows when the TextInput value is not valid */}
      {showErrorLine && (
        <Text style={Styles.invalid}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
