import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import { TestButton } from '../components/TestButton/TestButton';
import { Styles } from '../components/Support files/Styles';

export const MarketingOptionsScreen = () => {
  return (
    <View style={Styles.testMargin}>
      <Text style={Styles.text}>
        How would you like us to send you offers, rewards and updates about Bex products and services?
      </Text>

      <View style={{margin: 10}} />

      <Text style={Styles.text}>
        We’ll only send you things that we think you’ll find useful. You’ll still get important message about your account if you turn this off.
      </Text>

      <View style={{margin: 40}} />

      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.text}>
            Push notification
          </Text>

          <View style={Styles.switch}></View>
        </View>

        <View style={Styles.divider} />

        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.text}>
            SMS (text)
          </Text>

          <View style={Styles.switch}></View>
        </View>

        <View style={Styles.divider} />

        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.text}>
            Email
          </Text>

          <View style={Styles.switch}></View>
        </View>

        <View style={Styles.divider} />

        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.text}>
            Post
          </Text>

          <View style={Styles.switch}></View>
        </View>

        <View style={Styles.divider} />
      </View>

      <View style={{margin: 60}} />

      <TestButton alertMessage={'save'} disabled={false} />
    </View>
  );
};