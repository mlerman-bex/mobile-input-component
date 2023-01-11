import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Icons} from '../components/Support files/VectorIcons';

import {InputComponent} from '../components/InputComponent/InputComponent';
import {TestButton} from '../components/TestButton/TestButton';
import {regexEmail, regexMobile} from '../../constants/RegularExpressions';
import {Styles} from '../components/Support files/Styles';
import {BexLogoSvg} from '../../assets/SVGs/BexLogo/BexLogo';
import { Colours } from '../components/Support files/Colours';
import { ScreenSize } from '../components/Support files/ScreenSize';
import { BottomButton } from '../components/BottomButton/BottomButton';
import { PasswordInputComponent } from '../components/PasswordInputComponent/PasswordInputComponent';

export const LoginScreen = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [forcedError, setForcedError] = useState(false);
  const [allInputsValid, setAllInputsValid] = useState(false);

  useEffect(() => {
    ((regexEmail.test(emailOrMobile) || regexMobile.test(emailOrMobile)) &&
    password.length > 0)
      ? setAllInputsValid(true) : setAllInputsValid(false);
  }, [emailOrMobile, password]);
  
  const handleForgotPasswordPress = () => {
    Alert.alert('forgot password');
  }

  return (
    <View style={Styles.testMargin}>
      <View style={Styles.logo}>
        <BexLogoSvg />
      </View>

      <View style={Styles.inputComponent}>
        <InputComponent
          inputType={"login"}
          value={emailOrMobile}
          setValue={setEmailOrMobile}
          placeholder={"Email or Mobile Number"}
          inputLabel={"Email or Mobile Number"}
          persistentInputLabel
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          errorMessage={"Invalid email/mobile"}
          forcedError={forcedError}
          iconLeft={{
            type: Icons.FontAwesome,
            name: 'envelope-o',
            additionalStyle: {
              left: ScreenSize.width1p3
            },
            disabled: true,
            size: ScreenSize.width7,
            iconPress: () => null,
          }}
        />
      </View>

      <View style={Styles.inputComponent}>
        <PasswordInputComponent
          setPassword={setPassword}
          password={password}
          placeholder={'Password'}
          inputLabel={'Password'}
          persistentInputLabel
          vectorIcons
        />
      </View>

      <TouchableOpacity style={Styles.forgotPasswordContainer} onPress={handleForgotPasswordPress}>
        <Text style={[Styles.text, Styles.forgotPassword]}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* login button onPress will check for email/mobile && password matches existing account, forceError set respectively */}
      <View style={{flex: 1}}>
        <BottomButton buttonText='LOG IN' onPress={() => Alert.alert('log in')} disabled={false} black />
        <BottomButton buttonText='SIGN UP' onPress={() => Alert.alert('sign up')} disabled={false} white />
      </View>
    </View>
  );
};

