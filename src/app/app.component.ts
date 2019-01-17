import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var addToHomescreen;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Hem',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Butik',
      url: '/store',
      icon: 'appstore'
    },
    {
      title: 'Köp Bilder',
      url: '/pictures',
      icon: 'images'
    },
    {
      title: 'Böcker',
      url: '/books',
      icon: 'book'
    },
    {
      title: 'Sociala medier',
      url: '/social',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
    addToHomescreen();
  }
}
