import {StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../styles/index';

const defaultLayout = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: Colors.bgColor,
};

const styledButtonOutline = {
  marginHorizontal: 5,
  width: 70,
  borderWidth: 0.8,
  borderRadius: 10,
  borderColor: Colors.pantoneGreen,
};

export const Style = StyleSheet.create({
  container: {
    ...defaultLayout,
  },
  header: {
    width: Spacing.largeWidth,
    marginTop: '10%',
    marginBottom: Spacing.small,
  },
  title: {
    ...Typography.primaryTitle,
    fontSize: 20,
  },
  dateLabel: {
    ...Typography.primaryTitle,
    alignSelf: 'flex-end',
  },
  quoteBlock: {
    paddingBottom: 30,
  },
  quote: {
    ...Typography.primaryTitle,
    textAlign: 'right',
    fontSize: 20,
    color: Colors.tertiaryTextColor,
  },
  dayCounterContainer: {
    alignItems: 'center',
    borderColor: Colors.black,
    padding: Spacing.base,
    borderWidth: 1.5,
    borderRadius: 30,
  },
  optionsArea: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  options: {
    margin: Spacing.smallest,
    padding: Spacing.smallest,
    alignItems: 'center',
    backgroundColor: Colors.pantoneGreen,
    borderRadius: 10,
    width: 200,
  },
  optionsAlt: {
    margin: Spacing.smallest,
    padding: Spacing.smallest,
    alignItems: 'center',
    backgroundColor: Colors.pantoneRed,
    borderRadius: 10,
    width: 200,
  },
  optionsLabel: {
    color: Colors.secondaryTextColor,
  },
  totalDaysLabel: {
    ...Typography.defaultLabel,
  },
  totalDaysCount: {
    ...Typography.defaultText,
  },
  body: {
    flex: 1,
    width: Spacing.largeWidth,
    // backgroundColor: Colors.bgColor2,
  },
  footer: {
    flex: 1,
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cashSelectRow: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  cashOption: {
    ...styledButtonOutline,
  },
  cashOptionAlt: {
    ...styledButtonOutline,
    backgroundColor: Colors.pantoneGreen,
  },
  cashOptionLabel: {
    margin: 5,
    fontSize: Typography.smallFontSize,
    color: Colors.pantoneGreen,
    textAlign: 'center',
  },
  cashOptionLabelAlt: {
    margin: 5,
    fontSize: Typography.smallFontSize,
    color: Colors.white,
    textAlign: 'center',
  },
  footerRow: {
    flexDirection: 'row',
  },
  totalDepAmountTitle: {
    fontSize: Typography.largeFontSize,
    fontWeight: 'bold',
  },
  totalDepAmountLabel: {
    fontSize: Typography.baseFontSize,
    fontWeight: 'bold',
  },
});

export const InitialScreenStyle = StyleSheet.create({
  container: {
    ...defaultLayout,
    justifyContent: 'center',
  },
  introText: {
    fontSize: Typography.extraLargeFontSize,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: Spacing.extraLarge,
    fontSize: Typography.smallFontSize,
    fontWeight: '300',
    opacity: 0.7,
  },
});
