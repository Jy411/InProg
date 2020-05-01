import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Style} from '../style';
import {Colors, Spacing} from '../../styles';
import * as React from 'react';
import {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {TextInputMask} from 'react-native-masked-text';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.optionContainerStyle}>
      <Text style={Style.optionsLabel}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const CashButton = (props) => {
  return (
    // TODO onPress to set value of cash deposit once button is clicked on and change style to show its selected
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={props.cashOptionStyle}>
        <Text style={props.cashOptionLabelStyle}>RM {props.cashVal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function DayCounter() {
  const [btnOption, setBtnOption] = useState(0);
  const [depVal, setDepVal] = useState();

  // Option 1
  const Option1 = (props) => {
    const optionSelected = (val) => {
      setDepVal(val);
    };

    return (
      <Animatable.View animation="fadeIn" style={Style.optionContainer}>
        <Animatable.Text animation="fadeIn" style={Style.totalDaysLabel}>
          How much would you like to pledge?
        </Animatable.Text>
        <View style={Style.cashSelectRow}>
          <CashButton
            cashVal={1}
            onPress={() => optionSelected(1)}
            cashOptionStyle={
              depVal === 1 ? Style.cashOptionAlt : Style.cashOption
            }
            cashOptionLabelStyle={
              depVal === 1 ? Style.cashOptionLabelAlt : Style.cashOptionLabel
            }
          />
          <CashButton
            cashVal={5}
            onPress={() => optionSelected(5)}
            cashOptionStyle={
              depVal === 5 ? Style.cashOptionAlt : Style.cashOption
            }
            cashOptionLabelStyle={
              depVal === 5 ? Style.cashOptionLabelAlt : Style.cashOptionLabel
            }
          />
          <CashButton
            cashVal={10}
            onPress={() => optionSelected(10)}
            cashOptionStyle={
              depVal === 10 ? Style.cashOptionAlt : Style.cashOption
            }
            cashOptionLabelStyle={
              depVal === 10 ? Style.cashOptionLabelAlt : Style.cashOptionLabel
            }
          />
          <CashButton
            cashVal={20}
            onPress={() => optionSelected(20)}
            cashOptionStyle={
              depVal === 20 ? Style.cashOptionAlt : Style.cashOption
            }
            cashOptionLabelStyle={
              depVal === 20 ? Style.cashOptionLabelAlt : Style.cashOptionLabel
            }
          />
        </View>
        <View style={Style.footerRow}>
          <Button
            onPress={() => setBtnOption(0)}
            text="Back"
            optionContainerStyle={[Style.optionsAlt, {width: 80}]}
          />
          <Button
            onPress={() => setBtnOption(3)}
            text="Confirm"
            optionContainerStyle={[Style.options, {width: 80}]}
          />
        </View>
      </Animatable.View>
    );
  };

  // Option 3 - After money deposit confirmed
  const Option3 = (props) => {
    return (
      <Animatable.View animation="fadeIn" style={Style.optionContainer}>
        <Text style={Style.totalDepAmountTitle}>Wallet Amount</Text>
        <Text style={Style.totalDepAmountLabel}>RM {depVal}</Text>
      </Animatable.View>
    );
  };

  // No Selected Options
  const UserSelect = (props) => {
    return (
      <View>
        <Text style={Style.totalDaysLabel}>What do you want to do today?</Text>
        <View style={{paddingVertical: Spacing.smaller}} />
        <View style={Style.optionsArea}>
          <Button
            onPress={() => setBtnOption(1)}
            text="Pledge"
            optionContainerStyle={Style.options}
          />
          <Button
            onPress={() => setBtnOption(2)}
            text="Pass"
            optionContainerStyle={Style.optionsAlt}
          />
        </View>
      </View>
    );
  };

  switch (btnOption) {
    case 0:
      return (
        <View style={Style.dayCounterContainer}>
          <UserSelect />
        </View>
      );
    case 1:
      return (
        <View style={Style.dayCounterContainer}>
          <Option1 />
        </View>
      );
    case 2:
      return (
        <View style={Style.dayCounterContainer}>
          <Option2 />
        </View>
      );
    case 3:
      return (
        <View style={Style.dayCounterContainer}>
          <Option3 />
        </View>
      );
    default:
      return (
        <View style={Style.dayCounterContainer}>
          <UserSelect />
        </View>
      );
  }
}
