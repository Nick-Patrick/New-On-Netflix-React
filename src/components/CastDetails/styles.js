import { StyleSheet } from 'react-native'
import Theme from '../../constants/Theme'
import Dimensions from 'Dimensions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.backgroundPrimary,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80
  },
  miniHeader: {
    color: Theme.colors.textSecondary,
    fontWeight: '900',
    fontSize: 12,
    paddingBottom: 6,
  },
  infoContainer: {
    padding: 14
  },
  mainText: {
    color: Theme.colors.textPrimary,
    fontFamily: Theme.fonts.mainFont,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    paddingBottom: 10
  },
  infoText: {
    fontSize: 12,
    paddingLeft: 10
  },
  description: {
    fontSize: 14
  },
  paddingTop: {
    paddingTop: 14
  },
  tagline: {
    fontFamily: Theme.fonts.miniHeaderFont,
    paddingBottom: 14,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
    textAlign: 'center'
  }
})

export default styles