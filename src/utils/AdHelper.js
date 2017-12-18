import {
  AdMobInterstitial
} from 'react-native-admob'
import { Platform } from 'react-native'

class AdHelper {
    constructor() {
        this.IosAdMobInterstitial = 'ca-app-pub-3981028455625793/2514878517'
        this.AndroidAdMobInterstitial = 'ca-app-pub-3981028455625793/4051465314'
        this.TestAdMobInterstitial = 'ca-app-pub-3940256099942544/1033173712'
        this.initialised = false
    }

    init() {
      if (AdMobInterstitial && AdMobInterstitial.setAdUnitID && !this.initialised) {
          AdMobInterstitial.setAdUnitID(Platform.OS === 'ios' ? this.IosAdMobInterstitial : this.AndroidAdMobInterstitial)
          this.initialised = true
      }
    }

    loadInterstitial() {

      if (AdMobInterstitial && parseInt(Math.random(0, 100) * 10) % 3 === 1) {

        AdMobInterstitial.isReady((isReady) => {
          if (isReady) {
            AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd(() => {}));
          } else {
            AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd(() => {}));
          }
        })
      }
    }
}

export default new AdHelper()