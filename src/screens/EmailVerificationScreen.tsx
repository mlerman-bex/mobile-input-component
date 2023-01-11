import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

import {InputComponent} from '../components/InputComponent/InputComponent';
import {TestButton} from '../components/TestButton/TestButton';
import {Styles} from '../components/Support files/Styles';
import {regexVerificationCode} from '../../constants/RegularExpressions';
import Timer from '../components/Timer/Timer';

export const EmailVerificationScreen = () => {
  const [code, setCode] = useState('');
  const [validCode, setValidCode] = useState(false);
  const email = 'mlerman@bexcard.co.uk'; // change to import email from user

  // change to resending the code
  const handleOnTimerUp = () => {
    Alert.alert("resend code");
  };
  
  useEffect(() => {
    if (regexVerificationCode.test(code)) {
      setValidCode(true);
    } else {
      setValidCode(false);
    }
    
  }, [code]);
  return (
    <View style={Styles.testMargin}>
      <Text style={{...Styles.text}}>
        The code was sent to <Text style={{...Styles.text, fontWeight: 'bold'}}>{email}</Text>
      </Text>

      <Text style={Styles.text}>
        Please check your email and enter the code below.
      </Text>

      <View style={{margin: 20}} />

      <Text style={Styles.text}>
        Don't forget to check your spam/junk folder too.
      </Text>

      <View style={{margin: 30}} />

      <InputComponent
        inputType={'code'}
        value={code}
        setValue={setCode}
        placeholder={"Enter Code"}
        inputLabel={'Enter Code'}
        fieldName={'Code'}
        persistentInputLabel
        keyboardType={'number-pad'}
        maxLength={6}
      />

      <View style={{margin: 30}} />

      <Timer maxTime={60} onTimerUp={handleOnTimerUp} />

      <View style={{margin: 40}} />
      
      {/* add functionality for checking if code is correct, then progress */}
      <TestButton alertMessage={`Code: ${code}`} disabled={!validCode} />    
    </View>
  );
};