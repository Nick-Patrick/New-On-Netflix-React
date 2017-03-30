import { StyleSheet } from 'react-native';
import theme from '../../config/theme.js';

const smallFont = 11;

module.exports = StyleSheet.create({
  listItem: {
    flexGrow: 1,
    flexDirection: 'row',
    height: 110,
    margin: 6,
    backgroundColor: theme.colors.backgroundPrimary,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 3
    },
    shadowOpacity: 0.1
  },

  thumbnail: {
    height: 110,
    flex: 1
  },

  listItemDescription: {
    flex: 3.5,
    padding: 10,
    justifyContent: 'center',
    paddingRight: 20
  },

  title: {
    fontFamily: theme.font.boldFont,
    fontWeight: '500',
    flex: 2
  },

  year: {
    color: theme.colors.secondary,
    fontFamily: theme.font.mainFont,
    flex: 3,
    fontSize: 12
  },

  runtime: {
    fontFamily: theme.font.mainFont
  },

  genre: {
    color: theme.colors.primary,
    fontFamily: theme.font.mainFont,
    flex: 1.5
  },

  small: {
    fontSize: smallFont
  }
});
