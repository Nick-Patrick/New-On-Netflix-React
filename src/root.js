import { Navigation } from 'react-native-navigation'
import React, { Component } from 'react'

import { registerScreens } from './screens'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { iconsMap, iconsLoaded } from './utils/AppIcons'
import { NavStyles } from './constants/Config'
import Theme from './constants/Theme'
import AdHelper from './utils/AdHelper'

const store = configureStore()
registerScreens(store, Provider)

class Root extends Component {
  constructor (props) {
    super(props)
    iconsLoaded.then(() => {
      this.startApp()
    })

    AdHelper.init()
  }

  startApp () {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'newonnetflix.Main',
        title: 'New on Netflix',
        navigatorStyle: NavStyles
      }
    })
  }
}

export default Root
