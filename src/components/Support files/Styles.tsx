import {StyleSheet} from 'react-native';

import {Colours} from '../Support files/Colours';
import {ScreenSize} from '../Support files/ScreenSize';
import {FontSize} from '../Support files/FontSize';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.transparent,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    width: ScreenSize.width87,
    height: undefined, // gets changed with each component
    borderColor: Colours.transparent,
    borderBottomColor: Colours.grey73,
    borderWidth: ScreenSize.width0p24,
  },
  inputLabel: {
    marginLeft: -ScreenSize.margin0p55,
    color: Colours.midDarkGrey
  },
  text: {
    fontSize: FontSize.font16,
    fontWeight: "400",
    color: Colours.black,
    backgroundColor: Colours.transparent,
    width: "100%",
    height: undefined,
    justifyContent: "center",
  },
  iconStyle: {
    position: "absolute",
    alignSelf: "flex-end",
    top: ScreenSize.height1,
    paddingRight: ScreenSize.width1p477,
  },
  invalid: {
    color: Colours.red,
  },
  valid: {
    color: Colours.green,
  },
  showHideToggle: {
    right: ScreenSize.width10,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: Colours.blue,
  },
});