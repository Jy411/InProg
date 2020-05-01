import * as Colors from './colors';
import * as Spacing from './spacing';

export const extraLargeFontSize = 32;
export const largeFontSize = 24;
export const buttonFontSize = 18;
export const baseFontSize = 16;
export const smallFontSize = 14;
export const smallestFontSize = 10;
export const largeHeaderFontSize = 20;
export const headerFontSize = 18;

const base = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

export const primaryTitle = {
  ...base,
  fontSize: largeFontSize,
  fontWeight: 'bold',
  color: Colors.primaryTextColor,
};

export const defaultLabel = {
  ...base,
  fontSize: headerFontSize,
  fontWeight: '500',
  color: Colors.primaryTextColor,
};

export const defaultText = {
  ...base,
  fontSize: baseFontSize,
  color: Colors.primaryTextColor,
};
