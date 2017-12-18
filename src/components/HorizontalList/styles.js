import { StyleSheet } from 'react-native'
import Theme from '../../constants/Theme'

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    width: 110
  },
  image: {
    width: 106,
    height: 152
  },
  sourceContainer: {
    width: 50,
    marginRight: 15,
  },
  header: {
    color: Theme.colors.textPrimary,
    fontSize: 10,
    paddingTop: 10,
    fontWeight: '500'
  },
  subheader: {
    color: Theme.colors.textSecondary,
    fontSize: 10
  }
})

export default styles