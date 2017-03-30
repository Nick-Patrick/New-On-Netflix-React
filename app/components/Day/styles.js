import { StyleSheet } from 'react-native';
import theme from '../../config/theme.js';

const font = 'Avenir';
const smallFont = 11;

module.exports = StyleSheet.create({
  dayHeader: {
    height: 30,
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.primary,
    textAlign: 'center',
    lineHeight: 30,
    fontFamily: theme.font.miniHeaderFont
  }
});
