import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Dimensions,
  ScrollView,
} from 'react-native';

import {MobileInputScreen} from './src/screens/MobileInputScreen';
import {CreatePasswordScreen} from './src/screens/CreatePasswordScreen';
import {PersonalInfoScreen} from './src/screens/PersonalInfoScreen';
import {EmailVerificationScreen} from './src/screens/EmailVerificationScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import {ForgotPasswordScreen} from './src/screens/ForgotPasswordScreen';
import {CreateBexPinScreen} from './src/screens/CreateBexPinScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { MarketingOptionsScreen } from './src/screens/MarketingOptionsScreen';
import { LogoutScreen } from './src/screens/LogoutScreen';
import { CustomerSupportScreen } from './src/screens/CustomerSupportScreen';
import { MobileNumberChangeConfirmationScreen } from './src/screens/MobileNumberChangeConfirmationScreen';
import { AddChildScreen } from './src/screens/AddChildScreen';
import { Colours } from './src/components/Support files/Colours';

const App = () => {
  const {width, height} = Dimensions.get('screen');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  // const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{...backgroundStyle, height: height, width: width}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {/* <MobileInputScreen /> */}
        {/* <CreatePasswordScreen /> */}
        {/* <PersonalInfoScreen /> */}
        {/* <EmailVerificationScreen /> */}
        <LoginScreen />
        {/* <ForgotPasswordScreen /> */}
        {/* <CreateBexPinScreen /> */}
        {/* <MarketingOptionsScreen /> */}
        {/* <LogoutScreen /> */}
        {/* <CustomerSupportScreen /> */}
        {/* <MobileNumberChangeConfirmationScreen /> */}
        {/* <AddChildScreen /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
