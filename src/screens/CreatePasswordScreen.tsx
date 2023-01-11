import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';

import {PasswordInputComponent} from '../components/PasswordInputComponent/PasswordInputComponent';
import {
  MinimumCharactersText,
  LowercaseLetterText,
  UppercaseLetterText,
  NumberPresent,
  SymbolPresent
} from '../components/PasswordInclusions/PasswordInclusions';
import {TestButton} from '../components/TestButton/TestButton';
import {Styles} from '../components/Support files/Styles';

export const CreatePasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [validPassword, setValidPassword] = useState(false);
  const [minimumCharactersPresent, setMinimumCharactersPresent] = useState(false);
  const [lowercaseLetterPresent, setLowercaseLetterPresent] = useState(false);
  const [uppercaseLetterPresent, setUppercaseLetterPresent] = useState(false);
  const [numberPresent, setNumberPresent] = useState(false);
  const [symbolPresent, setSymbolPresent] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);
  const [showErrorLine, setShowErrorLine] = useState(false);

  const memoizedHandleMinimumCharactersPresent = useCallback((childState: boolean) => {
    setMinimumCharactersPresent(childState);
  }, []);

  const memoizedHandleLowercaseLetterPresent = useCallback((childState: boolean) => {
    setLowercaseLetterPresent(childState);
  }, []);

  const memoizedHandleUppercaseLetterPresent = useCallback((childState: boolean) => {
    setUppercaseLetterPresent(childState);
  }, []);

  const memoizedHandleNumberPresent = useCallback((childState: boolean) => {
    setNumberPresent(childState);
  }, []);

  const memoizedHandleSymbolPresent = useCallback((childState: boolean) => {
    setSymbolPresent(childState);
  }, []);

  useEffect(() => {
    (password === confirmPassword && password.length > 0) ? setValidPassword(true) : setValidPassword(false);

    (validPassword &&
     minimumCharactersPresent &&
     lowercaseLetterPresent &&
     uppercaseLetterPresent &&
     numberPresent &&
     symbolPresent) ? setPasswordChecked(true) : setPasswordChecked(false);

    (!validPassword && password.length > 0 && confirmPassword.length > 0) ? setShowErrorLine(true) : setShowErrorLine(false);

  }, [password, confirmPassword, validPassword, minimumCharactersPresent, lowercaseLetterPresent, uppercaseLetterPresent, numberPresent, symbolPresent]);

  return (
    <View style={Styles.testMargin}>
      <Text>
        This will used to log in to your Bex app.
      </Text>

      <View style={{margin: 60}} />

      <PasswordInputComponent
        setPassword={setPassword}
        password={password}
        placeholder={'Password'}
        inputLabel={'Password'}
        persistentInputLabel
      />
      
      <View style={{margin: 10}} />
      
      <PasswordInputComponent
        setPassword={setConfirmPassword}
        password={confirmPassword}
        placeholder={'Confirm Password'}
        inputLabel={'Confirm Password'}
        persistentInputLabel
        errorLine={showErrorLine}
      />

      {/* the following checks that the password boxes have at least 1 character in each before checking if the two passwords match */}
      { showErrorLine &&
        <>
          <Text style={Styles.invalid}>The passwords you entered do not match.</Text>
          <Text style={Styles.invalid}>Please double check and try again.</Text>
        </>
      }

      <View style={{margin: 40}} />

      <Text>
        So that your password is strong, it must include:
      </Text>

      <View style={{margin: 5}} />

      <MinimumCharactersText
        password={password}
        confirmPassword={confirmPassword}
        state={minimumCharactersPresent}
        onStateChange={memoizedHandleMinimumCharactersPresent}
      />

      <LowercaseLetterText
        password={password}
        confirmPassword={confirmPassword}
        state={lowercaseLetterPresent}
        onStateChange={memoizedHandleLowercaseLetterPresent}
      />

      <UppercaseLetterText
        password={password}
        confirmPassword={confirmPassword}
        state={uppercaseLetterPresent}
        onStateChange={memoizedHandleUppercaseLetterPresent}
      />

      <NumberPresent
        password={password}
        confirmPassword={confirmPassword}
        state={numberPresent}
        onStateChange={memoizedHandleNumberPresent}
      />
      <SymbolPresent
        password={password}
        confirmPassword={confirmPassword}
        state={symbolPresent}
        onStateChange={memoizedHandleSymbolPresent}
      />

      <View style={{margin: 60}} />
      
      <TestButton alertMessage={`Password: ${password}`} disabled={!passwordChecked} />
    </View>
  );
};
