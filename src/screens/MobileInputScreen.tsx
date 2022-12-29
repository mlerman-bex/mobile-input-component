import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';

import {MobileInputComponent} from '../components/MobileInputComponent/MobileInputComponent';
import {TestButton} from '../components/TestButton/TestButton';

export const MobileInputScreen = () => {
  const [mobileInput, setMobileInput] = React.useState('');
  const [mobileNumberChecked, setMobileNumberChecked] = useState(false);

  useEffect(() => {
    mobileInput.length == 10 ? setMobileNumberChecked(true) : setMobileNumberChecked(false);
  }, [mobileInput]);

  return (
    <View style={{margin: 30, flexDirection: 'column'}}>
      <Text>Please enter your UK mobile number:</Text>
      <View style={{margin: 60}} />
      <MobileInputComponent setValue={setMobileInput} value={mobileInput} />
      {/* mobile number sim pop-up done by Rajesh */}
      <View style={{margin: 220}} />
      <TestButton alertMessage={`Mobile number is: +44${mobileInput}`} disabled={!mobileNumberChecked} />
    </View>
  );
};