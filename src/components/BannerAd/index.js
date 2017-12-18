import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import {
  AdMobBanner
} from 'react-native-admob'

class BannerAd extends Component {
  constructor(props) {
    super(props)

    AndroidBannerAdmob = 'ca-app-pub-3981028455625793/2574732118'
    IosBannerAdmob = 'ca-app-pub-3981028455625793/8561412110'
    TestBanner = 'ca-app-pub-3940256099942544/6300978111'
  }


  render() {

    return (
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={ Platform.OS === 'ios' ? IosBannerAdmob : AndroidBannerAdmob }
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={(e) => console.log(e)} />
      </View>
    )
  }
}

export default BannerAd