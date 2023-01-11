import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {MobileInputComponent} from '../components/MobileInputComponent/MobileInputComponent';
import {TestButton} from '../components/TestButton/TestButton';
import {Styles} from '../components/Support files/Styles';
import {Break} from '../components/Support files/Break';

export const MobileInputScreen = () => {
  const [mobileInput, setMobileInput] = React.useState('');
  const [mobileNumberChecked, setMobileNumberChecked] = useState(false);

  useEffect(() => {
    mobileInput.length == 10 ? setMobileNumberChecked(true) : setMobileNumberChecked(false);
  }, [mobileInput]);

  return (
    <View style={Styles.testMargin}>
      <Text style={Styles.text}>Please enter your UK mobile number:</Text>
      <Break size={60} />
      <MobileInputComponent setValue={setMobileInput} value={mobileInput} />
      {/* mobile number sim pop-up done by Rajesh */}
      <Break size={220} />
      <TestButton alertMessage={`Mobile number is: +44${mobileInput}`} disabled={!mobileNumberChecked} />
    </View>
  );
};