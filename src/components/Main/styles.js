import { StyleSheet, Platform } from 'react-native'
import Theme from '../../constants/Theme'
import Dimensions from 'Dimensions'

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Theme.colors.backgroundPrimary,
    margin: 0,
    padding: 0
  },
  gridContainer: {
    paddingBottom: Platform.OS === 'ios' ? 110 : 140
  },
  grid: {
    paddingTop: 4
  },
  durationSelect: {
    height: 60,
    backgroundColor: Theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
    marginBottom: 20
  },
  durationSelectPressed: {
    height: 60,
    backgroundColor: Theme.colors.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
    marginBottom: 20
  },
  durationSelectText: {
    fontFamily: Theme.fonts.mainFont,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: Theme.colors.backgroundPrimary
  }
})

export default styles
