package com.ionicframework.newonnetflix490142;

import android.app.Application;
import com.reactnativenavigation.NavigationApplication;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

@Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

 protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new VectorIconsPackage(),
        new RNSpinkitPackage(),
        new RNAdMobPackage(),
        new RNFirebasePackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

    @Override
    public void onCreate() {
        super.onCreate();
    }
}
