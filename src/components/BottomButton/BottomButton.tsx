import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { ScreenSize } from "../Support files/ScreenSize";
import { Styles } from "../Support files/Styles";

export const BottomButton = ({
  buttonText,
  onPress,
  disabled,
  black,
  white,
  testID,
}: {
  buttonText: string;
  onPress: Function;
  disabled?: boolean;
  black?: boolean;
  white?: boolean;
  testID?: string;
}) => {
  return (
    <View style={[
      Styles.bottomButtonContainer,
      black && Styles.blackButton,
      white && Styles.whiteButton,
      ]}>
      <TouchableOpacity
        hitSlop={{
          top: ScreenSize.width1,
          bottom: ScreenSize.width1,
          left: ScreenSize.width35,
          right: ScreenSize.width35
        }}
        style={Styles.bottomButton}
        disabled={disabled}
        onPress={() => onPress()}
        testID={testID}
        >
        <View style={Styles.textWrapper}>
          <Text style={[Styles.buttonText, black && Styles.blackButtonText]}>
            {buttonText}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};