/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, useColorScheme, View, Text, Dimensions} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MobileInputComponent} from './src/components/MobileInputComponent/MobileInputComponent';
import {InputComponent} from './src/components/InputComponent/InputComponent';
import { PasswordInputComponent } from './src/components/PasswordInputComponent/PasswordInputComponent';
import { Colours } from './src/components/Support files/Colours';
import { Styles } from './src/components/Support files/Styles';
import { TestButton } from './src/components/TestButton/TestButton';
import { Min8CharactersText } from './src/components/min8CharactersText/Min8CharactersText';

const App = () => {
  const {width, height} = Dimensions.get('screen');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const [input, setInput] = useState(null);
  // const [mobileInput, setMobileInput] = React.useState(null);
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

  useEffect(() => {
    if (password === confirmPassword && password.length > 0) {setValidPassword(true);}
    else {setValidPassword(false);}

    if (password.length >= 8 || confirmPassword.length >= 8) {setMinimumCharactersPresent(true);}
    else {setMinimumCharactersPresent(false);}

    if (password.match(/[a-z]/) || confirmPassword.match(/[a-z]/)) {setLowercaseLetterPresent(true);}
    else {setLowercaseLetterPresent(false);}

    if (password.match(/[A-Z]/) || confirmPassword.match(/[A-Z]/)) {setUppercaseLetterPresent(true);}
    else {setUppercaseLetterPresent(false);}

    if (password.match(/[0-9]/) || confirmPassword.match(/[0-9]/)) {setNumberPresent(true);}
    else {setNumberPresent(false);}

    if (password.match(/\W/) || confirmPassword.match(/\W/)) {setSymbolPresent(true);}
    else {setSymbolPresent(false);}

    if (validPassword && minimumCharactersPresent && lowercaseLetterPresent && uppercaseLetterPresent && numberPresent && symbolPresent) {setPasswordChecked(true);}
    else {setPasswordChecked(false);}

    if (!validPassword && password.length > 0 && confirmPassword.length > 0) {setShowErrorLine(true);}
    else {setShowErrorLine(false);}
  }, [password, confirmPassword, validPassword, minimumCharactersPresent, lowercaseLetterPresent, uppercaseLetterPresent, numberPresent, symbolPresent]);

  return (
    <SafeAreaView style={{ ...backgroundStyle, height: height, width: width }}>
      <View style={{margin: 30, flexDirection: 'column'}}>
        <Text>This will used to log in to your Bex app.</Text>
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
            <Text style={Styles.invalid}>Please double checknd try again.</Text>
          </>
        }
        <View style={{margin: 40}} />
        <Text>So that your password is strong, it must include:</Text>
        <View style={{margin: 5}} />
        <Min8CharactersText password={password} confirmPassword={confirmPassword} state={minimumCharactersPresent} />
        <Text style={lowercaseLetterPresent ? Styles.valid : Styles.invalid} testID="testInclude2"> - Lowercase letter</Text>
        <Text style={uppercaseLetterPresent ? Styles.valid : Styles.invalid} testID="testInclude3"> - Uppercase letter</Text>
        <Text style={numberPresent ? Styles.valid : Styles.invalid} testID="testInclude4"> - Number</Text>
        <Text style={symbolPresent ? Styles.valid : Styles.invalid} testID="testInclude5"> - Symbol</Text>
        <View style={{margin: 60}} />
        <TestButton alertMessage={`Password is: ${confirmPassword}`} disabled={!passwordChecked} />
      </View>
    </SafeAreaView>
  );
};

export default App;
