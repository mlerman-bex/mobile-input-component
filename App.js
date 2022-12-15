/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { MobileInputComponent } from './src/components/MobileInputComponent/MobileInputComponent';
import { TestButton } from './src/components/TestButton/TestButton';

const App = () => {
  const [canClickButton, setCanClickButton] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [mobileInput, setMobileInput] = React.useState(null);
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <View
          style={{ margin: 10 }}>
          <MobileInputComponent setValue={setMobileInput} value={mobileInput} />
          <TestButton />
        </View>
    </SafeAreaView>
  );
};

export default App;
