import { Platform } from 'react-native'

module.exports = {
  colors: {
    backgroundPrimary: '#2D2624',
    backgroundPrimaryDarken: '#820000',
    backgroundSecondary: '#AA000E',
    primary: '#C91309',
    secondary: '#E0E0E0',
    textPrimary: '#fff',
    textSecondary: '#CEDBDD',
    navbar: {
      backgroundPrimary: '#AA000E',
      backgroundToolbar: '#AA000E'
    },
    netflix: '#68221C',
    amazon: '#707C28',
    hulu: '#094968'
  },
  fonts: {
    mainFont: 'Avenir',
    headerFont: 'Avenir Next Condensed',
    miniHeaderFont: 'AvenirNextCondensed-BoldItalic',
    boldFont: (Platform.OS === 'ios') ? 'Avenir Next' : 'Lato-Heavy'
  }
}