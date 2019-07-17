import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss']
})
export class StorePage {

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) {
  }

  open() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://shop.spreadshirt.se/FAsFotos/', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://shop.spreadshirt.se/FAsFotos/';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }
}
