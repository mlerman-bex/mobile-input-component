import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {Styles} from '../Support files/Styles';

export const MinimumCharactersText = ({password = '', confirmPassword = '', state = false, onStateChange = (_state: boolean) => {null}}) => {
  const [minimumCharactersPresent, setMinimumCharactersPresent] = useState(state);

  useEffect(() => {
    if (password.length >= 8 || confirmPassword.length >= 8) {
      setMinimumCharactersPresent(true);
    } else {
      setMinimumCharactersPresent(false);
    }
    onStateChange(minimumCharactersPresent);
  }, [password, confirmPassword, state]);

  return (
    <View>
      <Text style={minimumCharactersPresent ? Styles.valid : Styles.invalid} testID="testInclude1"> - 8 characters</Text>
    </View>
  );
};

export const LowercaseLetterText = ({password = '', confirmPassword = '', state = false, onStateChange = (_state: boolean) => {null}}) => {
  const [lowercaseLetterPresent, setLowercaseLetterPresent] = useState(state);

  useEffect(() => {
    if (password.match(/[a-z]/) || confirmPassword.match(/[a-z]/)) {
      setLowercaseLetterPresent(true);
    } else {
      setLowercaseLetterPresent(false);
    }
    onStateChange(lowercaseLetterPresent);
  }, [password, confirmPassword, state]);

  return (
    <View>
      <Text style={lowercaseLetterPresent ? Styles.valid : Styles.invalid} testID="testInclude2"> - Lowercase letter</Text>
    </View>
  );
};

export const UppercaseLetterText = ({password = '', confirmPassword = '', state = false, onStateChange = (_state: boolean) => {null}}) => {
  const [uppercaseLetterPresent, setUppercaseLetterPresent] = useState(state);

  useEffect(() => {
    if (password.match(/[A-Z]/) || confirmPassword.match(/[A-Z]/)) {
      setUppercaseLetterPresent(true);
    } else {
      setUppercaseLetterPresent(false);
    }
    onStateChange(uppercaseLetterPresent);
  }, [password, confirmPassword, state]);

  return (
    <View>
      <Text style={uppercaseLetterPresent ? Styles.valid : Styles.invalid} testID="testInclude3"> - Uppercase letter</Text>
    </View>
  );
};

export const NumberText = ({password = '', confirmPassword = '', state = false, onStateChange = (_state: boolean) => {null}}) => {
  const [numberPresent, setNumberPresent] = useState(false);

  useEffect(() => {
    if (password.match(/[0-9]+/) || confirmPassword.match(/[0-9]+/)) {
      setNumberPresent(true);
    } else {
      setNumberPresent(false);
    }
    onStateChange(numberPresent);
  }, [password, confirmPassword, state]);

  return (
    <View>
      <Text style={numberPresent ? Styles.valid : Styles.invalid} testID="testInclude4"> - Number</Text>
    </View>
  );
};

export const SymbolPresent = ({password = '', confirmPassword = '', state = false, onStateChange = (_state: boolean) => {null}}) => {
  const [symbolPresent, setSymbolPresent] = useState(false);

  useEffect(() => {
    if (password.match(/\W/) || confirmPassword.match(/\W/)) {
      setSymbolPresent(true);
    } else {
      setSymbolPresent(false);
    }
    onStateChange(symbolPresent);
  }, [password, confirmPassword, state]);

  return (
    <View>
      <Text style={symbolPresent ? Styles.valid : Styles.invalid} testID="testInclude5"> - Symbol</Text>
    </View>
  );
};