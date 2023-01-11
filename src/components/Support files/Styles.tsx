import {StyleSheet} from 'react-native';
import {Colours} from '../Support files/Colours';
import {ScreenSize} from '../Support files/ScreenSize';
import {FontSize} from '../Support files/FontSize';

export const Styles = StyleSheet.create({
  testMargin: {
    margin: 30,
    // backgroundColor: Colours.green,
    height: '100%',
  },
  container: {
    backgroundColor: Colours.transparent,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    width: ScreenSize.width87,
    height: undefined, // gets changed with each component
    borderColor: Colours.transparent,
    borderBottomColor: Colours.wetSlate, // gets changed to blue on focus
    borderWidth: ScreenSize.width0p24,
  },
  inputLabel: {
    marginLeft: -ScreenSize.margin0p55, // works inside a screen with initial testMargin
    // marginLeft: ScreenSize.margin3, // works inside App.js, will add suitable separate style for this case later
    color: Colours.midDarkGrey,
  },
  text: {
    fontSize: FontSize.font14,
    fontWeight: "400",
    color: Colours.black,
    backgroundColor: Colours.transparent,
    width: "100%",
    height: undefined,
    justifyContent: "center",
    textAlign: 'justify',
  },
  iconStyle: {
    position: "absolute",
    alignSelf: "flex-end",
    top: ScreenSize.height1,
    paddingRight: ScreenSize.width1p477,
  },
  invalid: {
    paddingTop: ScreenSize.height1,
    left: -ScreenSize.width1,
    color: Colours.errorRed,
  },
  valid: {
    paddingTop: ScreenSize.height1,
    left: -ScreenSize.width1,
    color: Colours.green,
  },
  showHideToggle: {
    right: ScreenSize.width10,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: Colours.blue,
  },
  icon: {
    // backgroundColor: Colours.red,
    height: ScreenSize.height4,
    width: ScreenSize.width7,
    marginTop: ScreenSize.margin0p5,
    marginRight: ScreenSize.margin0p5,
    alignItems: 'center',
  },
  forgotPassword: {
    textAlign: 'right',
    color: Colours.blue,
    left: ScreenSize.width1p3,
  },
  forgotPasswordContainer: {
    marginBottom: ScreenSize.margin9p33,
  },
  timerContainer: {
    height: ScreenSize.height1p95,
  },
  divider: {
    alignSelf: 'center',
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: ScreenSize.width1,
    margin: ScreenSize.margin1,
    width: '100%',
  },
  // switch: {
  //   backgroundColor: '#D4D4D4',
  //   borderRadius: 18,
  //   // transform: matrix(1, 0, 0, -1, 0, 0),
  // },
  logo: {
    alignItems: 'center',
    margin: ScreenSize.margin9p33,
    marginTop: ScreenSize.margin6,
    // backgroundColor: Colours.blue,
  },
  inputComponent: {
    marginBottom: ScreenSize.margin5,
  },
  bottomButtonContainer: {
    justifyContent: 'center',
    marginBottom: ScreenSize.margin3,
    height: ScreenSize.height7,
  },
  bottomButton: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: FontSize.font14,
    fontWeight: "400",
    color: Colours.black,
    backgroundColor: Colours.transparent,
    width: "100%",
    height: undefined,
    justifyContent: "center",
    textAlign: 'justify',
  },
  blackButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    borderWidth: 1,
  },
  blackButtonText: {
    color: Colours.white,
  },
  whiteButton: {
    borderColor: '#1E1E1E',
    borderRadius: 8,
    borderWidth: 1,
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    justifyContent: 'center',
  }
});