import { StyleSheet } from 'react-native'
import Theme from '../../constants/Theme'
import Dimensions from 'Dimensions'

const styles = StyleSheet.create({
  mainImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.562
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100
  },
  miniHeader: {
    color: Theme.colors.textSecondary,
    fontWeight: '900',
    fontSize: 12,
    paddingBottom: 6,
  },
  infoContainer: {
    padding: 14,
    marginBottom: 30
  },
  mainText: {
    color: Theme.colors.textPrimary,
    fontFamily: Theme.fonts.mainFont,
  },
  videoLink: {
    top: -90,
    marginTop: -60
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    paddingBottom: 10
  },
  tagline: {
    fontFamily: Theme.fonts.miniHeaderFont,
    paddingBottom: 14,
    fontWeight: '600',
    color: Theme.colors.textPrimary,
    textAlign: 'center'
  },
  stars: {
    alignItems: 'center'
  },
  generalInfo: {
    paddingTop: 6,
    paddingBottom: 4,
    marginBottom: 6
  },
  horizontalInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoText: {
    fontSize: 12,
    paddingLeft: 10
  },
  year: {
    color: Theme.colors.textSecondary,
    paddingLeft: 10
  },
  description: {
    fontSize: 14
  },
  paddingTop: {
    paddingTop: 14
  },
  getSourcesButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
    height: 60,
    marginTop: 30,
    borderRadius: 2,
    marginBottom: 40
  },
  getSourcesButtonText: {
    fontFamily: Theme.fonts.mainFont,
    fontWeight: '600',
    color: '#fff',
    fontSize: 17
  },
  sourcesContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    alignItems:'center',
    flexDirection: 'row',
    marginBottom: 40,
    paddingBottom: 30
  },
  sourcesInfoContainer: {
  },
  paddingBottom: {
    paddingBottom: 30
  }
})

export default styles