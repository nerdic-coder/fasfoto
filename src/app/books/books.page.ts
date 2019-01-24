import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage {

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) {
  }

  gotoIbooks() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://itun.es/se/-dfxcb.l', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://itun.es/se/-dfxcb.l';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }

  gotoAmazon() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.amazon.com/dp/1320985270', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.amazon.com/dp/1320985270';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }
}
