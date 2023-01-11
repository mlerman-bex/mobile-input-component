import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colours } from '../Support files/Colours';

import { Styles } from '../Support files/Styles';

const Timer = ({ maxTime, onTimerUp }: {maxTime: number; onTimerUp: Function;}) => {
  const [timeLeft, setTimeLeft] = useState(maxTime);

  const resetTimer = () => {
    setTimeLeft(maxTime);
  }
  
  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const formattedTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <View style={Styles.timerContainer}>
      {timeLeft ? (
        <>
          <Text>Resend code in  <Text style={{...Styles.text, fontWeight: 'bold', color: Colours.blue}}>{formattedTime()}</Text></Text>
        </>
        ) : (
          <TouchableOpacity onPress={() => {
            onTimerUp();
            resetTimer();
          }}>
            <Text style={{...Styles.text, color: Colours.blue}}>Resend code</Text>
          </TouchableOpacity>
      )}
    </View>
  );
};

export default Timer;
