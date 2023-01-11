import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import { regexDate, regexDefault, regexEmail, regexMobile } from '../../constants/RegularExpressions';
import { InputComponent } from '../components/InputComponent/InputComponent';
import { Styles } from '../components/Support files/Styles';
import { TestButton } from '../components/TestButton/TestButton';

export const AddChildScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState(''); // mobile value gets passed from one of previous screens
  const [allInputsValid, setAllInputsValid] = useState(false);

  useEffect(() => {
    (regexDefault.test(firstName) &&
    regexDefault.test(lastName) &&
    regexDate.test(dateOfBirth) &&
    regexEmail.test(email) && 
    regexMobile.test(mobile))
      ? setAllInputsValid(true) : setAllInputsValid(false);
  }, [firstName, lastName, dateOfBirth, email, mobile]);

  return (
    <View style={Styles.testMargin}>
      <Text style={Styles.text}>
        Please enter your child's details below:
      </Text>

      <View style={{margin: 25}} />

      <InputComponent
        setValue={setFirstName}
        value={firstName}
        placeholder='First Name'
        inputLabel='First Name'
        fieldName='First Name'
        persistentInputLabel
      />

      <View style={{margin: 20}} />

      <InputComponent
        setValue={setLastName}
        value={lastName}
        placeholder='Last Name'
        inputLabel='Last Name'
        fieldName='Last Name'
        persistentInputLabel
      />

      <View style={{margin: 20}} />

      <InputComponent
        inputType='date'
        setValue={setDateOfBirth}
        value={dateOfBirth}
        placeholder='Date of Birth'
        inputLabel='Date of Birth'
        fieldName='Date of Birth'
        persistentInputLabel
        // editable={false}
        // iconRight
      />

      <View style={{margin: 20}} />

      <InputComponent
        inputType='email'
        setValue={setEmail}
        value={email}
        placeholder='Email'
        inputLabel='Email'
        fieldName='Email'
        persistentInputLabel
        keyboardType='email-address'
      />
      
      <View style={{margin: 20}} />

      <InputComponent
        inputType='mobile'
        setValue={setMobile}
        value={mobile}
        placeholder='Mobile'
        inputLabel='Mobile'
        fieldName='Mobile'
        persistentInputLabel
        prefixText='+44'
        // editable={false}
      />

      <View style={{margin: 30}} />

      <TestButton alertMessage={`allInputsValid: ${allInputsValid}`} disabled={!allInputsValid} />
    </View>
  );
};

/*


  
  
  return (
    <View style={Styles.testMargin}>
      

      
    </View>
*/