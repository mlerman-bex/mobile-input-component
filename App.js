import React from 'react';
import {SafeAreaView, useColorScheme, Dimensions} from 'react-native';

import {MobileInputScreen} from './src/screens/MobileInputScreen';
import {CreatePasswordScreen} from './src/screens/CreatePasswordScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const {width, height} = Dimensions.get('screen');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, height: height, width: width}}>
      <MobileInputScreen />
      {/* <CreatePasswordScreen /> */}
    </SafeAreaView>
  );
};

export default App;
