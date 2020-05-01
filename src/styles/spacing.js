import * as React from 'react';
import {View} from 'react-native';

export const hairline = 1;
export const tiny = 3;
export const smallest = 4;
export const smaller = 8;
export const small = 12;
export const base = 16;
export const large = 20;
export const larger = 24;
export const largest = 28;
export const extraLarge = 50;

export const largeWidth = '90%';

export const sectionPadding = small;

export const Line = () => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 4,
        paddingTop: 5,
        borderBottomColor: 'black',
      }}
    />
  );
};
