import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {Styles} from '../../components/Support files/Styles';
import {Colours} from '../Support files/Colours';

export const Min8CharactersText = ({password = '', confirmPassword = '', state = false}) => {
  const [minimumCharactersPresent, setMinimumCharactersPresent] = useState(state);

  console.log(`password: ${password}`);
  console.log(`state: ${state}`);

  useEffect(() => {
    if (password.length >= 8 || confirmPassword.length >= 8) { setMinimumCharactersPresent(true); }
    else { setMinimumCharactersPresent(false); }
    console.log('reached');
  }, [minimumCharactersPresent]);

  return(
    <View>
      <Text style={minimumCharactersPresent ? {color: 'green'} : {color: 'red'}} testID="testInclude1"> - 8 characters</Text>
    </View>
  );
};
// useEffect gets launched immediately, look into either manually setting the colour of Min8CharactersText component or go back to rendering <App />