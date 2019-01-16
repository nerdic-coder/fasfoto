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
    this.iab.create('https://shop.spreadshirt.se/FAsFotos', '_blank');
  }
}
