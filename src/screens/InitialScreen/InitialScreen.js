import * as React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {InitialScreenStyle} from '../style';
import * as Animatable from 'react-native-animatable';

function InitialScreen({navigation}) {
  return (
    <View style={InitialScreenStyle.container}>
      <Text style={InitialScreenStyle.introText}>
        Ready to quit smoking?️
      </Text>
      <Animatable.Text
        onPress={() => navigation.navigate('Home')}
        animation="fadeIn"
        iterationCount="infinite"
        direction="alternate"
        duration={1200}
        style={InitialScreenStyle.subtitle}>
        Tap To Continue
      </Animatable.Text>
    </View>
  );
}

export default InitialScreen;
