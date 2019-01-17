import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss']
})
export class StorePage {

  constructor(private iab: InAppBrowser) {
  }

  open() {
    const a = document.createElement('a');
    a.href = 'https://shop.spreadshirt.se/FAsFotos';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
    // window.open('https://shop.spreadshirt.se/FAsFotos', '_blank', 'noopener=yes');
    // this.iab.create('https://shop.spreadshirt.se/FAsFotos', '_blank');
  }
}
