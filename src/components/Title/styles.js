import { StyleSheet } from 'react-native'
import Theme from '../../constants/Theme'

const styles = StyleSheet.create({
  titleContainer: {
    width: 110,
    height: 210,
    shadowRadius: .7,
    shadowOpacity: .3,
    marginLeft: 2,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 6
  },
  titleText: {
    color: Theme.colors.textPrimary,
    fontWeight: '700',
    padding: 4,
    paddingTop: 8,
    fontSize: 13,
    fontFamily: Theme.fonts.mainFont
  },
  yearText: {
    color: Theme.colors.textSecondary,
    paddingLeft: 4,
    fontSize: 11,
    fontWeight: '500',
    fontFamily: Theme.fonts.boldFont
  }
})

export default styles