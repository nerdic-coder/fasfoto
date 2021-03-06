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
      title: 'Bilder',
      url: '/pictures',
      icon: 'images'
    },
    {
      title: 'Videor',
      url: '/videos',
      icon: 'videocam'
    },
    {
      title: 'Butik',
      url: '/store',
      icon: 'logo-apple-appstore'
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
      if (this.platform.is('cordova')) {
        this.statusBar.styleBlackOpaque();
        this.splashScreen.hide();
      }
    });
    addToHomescreen();
  }
}
