import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {create} from 'apisauce';
import moment from 'moment';

// components
import DayCounter from './DayCounter';
import Quote from './Quote';

// constants
import {Spacing} from '../../styles';
import {Style} from '../style';

function HomeScreen({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Style.container}>
        <View style={Style.header}>
          <Text style={Style.title}>Smoke No More 🚭</Text>
          <Text style={Style.title}>28 April 2020</Text>
          <Spacing.Line />
        </View>
        <View style={Style.body}>
          <Quote />
          <DayCounter />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default HomeScreen;
