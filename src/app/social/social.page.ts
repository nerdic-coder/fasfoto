import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage {

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) {
  }

  gotoYoutube() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.youtube.com/user/AXFR3DD3', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.youtube.com/user/AXFR3DD3';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoEyeem() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.eyeem.com/u/30100712', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.eyeem.com/u/30100712';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoFacebook() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.facebook.com/pg/FAsFotos/', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.facebook.com/pg/FAsFotos/';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoInstagram() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.instagram.com/r3l04d3d/', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.instagram.com/r3l04d3d/';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoTwitter() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://twitter.com/AXFR3DD3', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://twitter.com/AXFR3DD3';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoFolketsblad() {
    const a = document.createElement('a');
    a.href = 'http://folketsblad.com/medlemmar/axfr3dd3/profile/';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoSnapchat() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.snapchat.com/add/R3l04d3d', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.snapchat.com/add/R3l04d3d';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoPaypal() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.paypal.me/Reloaded88', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.paypal.me/Reloaded88';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }
}
