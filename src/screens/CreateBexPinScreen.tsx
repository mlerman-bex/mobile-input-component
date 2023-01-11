import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {InputComponent} from '../components/InputComponent/InputComponent';
import {TestButton} from '../components/TestButton/TestButton';
import {regexBexPin} from '../../constants/RegularExpressions';
import {Styles} from '../components/Support files/Styles';

export const CreateBexPinScreen = () => {
  const [bexPin, setBexPin] = useState('');
  const [bexPinAgain, setBexPinAgain] = useState('');
  const [validPin, setValidPin] = useState(false);
  const [allInputsValid, setAllInputsValid] = useState(false);
  const [showErrorLine, setShowErrorLine] = useState(false);

  useEffect(() => {
    if (regexBexPin.test(bexPin) && regexBexPin.test(bexPinAgain)) {
      setAllInputsValid(true);
    } else {
      setAllInputsValid(false);
    }

    if (allInputsValid && (bexPin === bexPinAgain) && bexPin.length > 0) {
      setValidPin(true);
    } else {
      setValidPin(false);
    }

    if (!validPin && bexPin.length > 0 && bexPinAgain.length > 0) {
      setShowErrorLine(true);
    } else {
      setShowErrorLine(false);
    }
  }, [bexPin, bexPinAgain]);

  return (
    <View style={Styles.testMargin}>
      <Text style={Styles.text}>
        You'll use this 4 digit PIN each time you log in, view card details, make payments and confirm important transactions.
      </Text>

      <View style={{margin: 40}} />

      <InputComponent
        inputType={"bexPin"}
        value={bexPin}
        setValue={setBexPin}
        placeholder={"Bex App PIN"}
        inputLabel={"Bex App PIN"}
        fieldName={"PIN"}
        persistentInputLabel
        maxLength={4}
      />

      <View style={{margin: 10}} />

      <InputComponent
        inputType={"bexPin"}
        value={bexPinAgain}
        setValue={setBexPinAgain}
        placeholder={"Re-enter PIN"}
        inputLabel={"Re-enter PIN"}
        fieldName={"PIN"}
        persistentInputLabel
        maxLength={4}

      />

      {/* the following checks that the pin boxes have at least 1 character in each before checking if the two pins match */}
      { showErrorLine &&
        <>
          <Text style={Styles.invalid}>The PINs you entered do not match.</Text>
          <Text style={Styles.invalid}>Please double check and try again.</Text>
        </>
      }

      <View style={{margin: 40}} />

      <TestButton alertMessage={`PIN: ${bexPin}`} disabled={!validPin} />
    </View>
  );
};