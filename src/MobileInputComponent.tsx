import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

import {Colours} from './Colours';
import {ScreenSize} from "./FontSize";

export const MobileInputComponent = ({
  setValue,
  value,
  editable = true,
}: {
  setValue: Function;
  value?: number;
  editable?: boolean;
}) => {
  const handleChangeText = (text: string) => {
    // if (text.match(/[a-z]/)) {
    //   Alert.alert("match");
    // }
    setValue(text);
  }
  
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        onChangeText={handleChangeText}
        returnKeyType={"done"}
        keyboardType={"number-pad"}
        maxLength={10}
        multiline={false}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.lightGreen,
    alignSelf: "center",
    padding: 5,
    flexDirection: "column",
    width: ScreenSize.width87,
    borderColor: Colours.transparent,
    borderBottomColor: Colours.grey73,
    borderWidth: ScreenSize.width0p24,
  },
  text: {
    fontSize: RFPercentage(2.35),
    fontWeight: "400",
  }
})