import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";

import {Colours} from './Colours';
import {ScreenSize} from "./ScreenSize";
import {FontSize} from "./FontSize";

export const MobileInputComponent = ({
  setValue,
  value,
  editable = true,
}: {
  setValue: Function;
  value?: number;
  editable?: boolean;
}) => {
  const reference: any = React.useRef(null);

  const handleChangeText = (text: string) => {
    const phoneNumber = text.replace(/[^0-9]/, "");

    phoneNumber.charAt(0) === "0" ? setValue(phoneNumber.substring(1))
                                  : setValue(phoneNumber);
  } 
  
  return(
    <TouchableOpacity
      onPress={() => reference.current.focus()}
      style={styles.container}>
      <Text style={{ ...styles.text, color: Colours.blue }}>+44 </Text>
      <TextInput
        ref={reference}
        style={styles.text}
        onChangeText={handleChangeText}
        value={value?.toString()}
        returnKeyType={"done"}
        keyboardType={"number-pad"}
        maxLength={10}
        multiline={false}
        editable={editable}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.transparent,
    alignSelf: "center",
    flexDirection: "row",
    width: ScreenSize.width87,
    borderColor: Colours.transparent,
    borderBottomColor: Colours.grey73,
    borderWidth: ScreenSize.width0p24,
  },
  text: {
    fontSize: FontSize.font16,
    fontWeight: "400",
    color: Colours.black,
    backgroundColor: Colours.transparent,
  }
})