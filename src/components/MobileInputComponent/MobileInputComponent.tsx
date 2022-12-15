import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import {Colours} from '../Support files/Colours';
import {ScreenSize} from "../Support files/ScreenSize";
import {FontSize} from "../Support files/FontSize"

export const MobileInputComponent = ({
  setValue,
  value,
  editable = true,
}: {
  setValue: Function;
  value?: number;
  editable?: boolean;
}) => {
  const {width, height} = Dimensions.get("window");
  const reference: any = React.useRef(null);

  const handleChangeText = (text: string) => {
    const phoneNumber = text.replace(/[^0-9]/, "");
    phoneNumber.charAt(0) === "0" ? setValue(phoneNumber.substring(1)) : setValue(phoneNumber);
  } 
  
  return (
    <View style={{margin: 10}}>
      <View style={styles.container}>
        <Text style={{ ...styles.text, color: Colours.blue, width: ScreenSize.width11 }}>+44 </Text>
        <TextInput
          ref={reference}
          style={{ ...styles.text, flex: 1, marginBottom: ScreenSize.margin4 }}
          onChangeText={handleChangeText}
          value={value?.toString()}
          returnKeyType={"done"}
          keyboardType={"number-pad"}
          maxLength={10}
          multiline={false}
          editable={editable}
          testID="testTextInput"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.transparent,
    alignSelf: "center",
    alignItems: "center",
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
    width: "100%",
    height: ScreenSize.height6p65,
    justifyContent: "center",
  }
})