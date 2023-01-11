import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {InputComponent} from '../components/InputComponent/InputComponent';
import {TestButton} from '../components/TestButton/TestButton';
import {regexEmail, regexMobile} from '../../constants/RegularExpressions';
import {Styles} from '../components/Support files/Styles';

export const ForgotPasswordScreen = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [forcedError, setForcedError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    (regexEmail.test(emailOrMobile) || regexMobile.test(emailOrMobile))
      ? setInputValid(true) : setInputValid(false);
  }, [emailOrMobile]);

  return (
    <View style={Styles.testMargin}>
      <Text style={Styles.text}>
        No worries, you just need to type your email address or mobile number and we will send you a verification code.
      </Text>

      <View style={{margin: 20}} />

      <InputComponent
        inputType={"login"}
        value={emailOrMobile}
        setValue={setEmailOrMobile}
        placeholder={"Email or Mobile Number"}
        inputLabel={"Email or Mobile Number"}
        persistentInputLabel
        errorMessage={"Invalid email/mobile"}
        forcedError={forcedError}
      />

      <View style={{margin: 40}} />

      {/* Reset button onPress will check for email/mobile matches existing account, forceError set respectively */}
      <TestButton alertMessage={"Reset my password"} disabled={!inputValid} />
    </View>
  );
};