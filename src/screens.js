import { Navigation } from 'react-native-navigation'

import Main from './containers/Main'
// import TitleDetails from './containers/TitleDetails'
// import CastDetails from './containers/CastDetails'

export function registerScreens(store, Provider) {
	Navigation.registerComponent('newonnetflix.Main', () => Main, store, Provider)
  // Navigation.registerComponent('newonnetflix.TitleDetails', () => TitleDetails, store, Provider)
  // Navigation.registerComponent('newonnetflix.CastDetails', () => CastDetails, store, Provider)
}
