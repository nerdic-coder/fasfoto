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
    window.open('https://shop.spreadshirt.se/FAsFotos', '_blank', 'noopener=yes');
    // this.iab.create('https://shop.spreadshirt.se/FAsFotos', '_blank');
  }
}
