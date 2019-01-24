import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) {
  }

  open() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://nerdic-coder.com/fotograf-fredrik-axelsson-privacy-policy/', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://nerdic-coder.com/fotograf-fredrik-axelsson-privacy-policy/';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }
}
