import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss']
})
export class StorePage {

  constructor(
    private platform: Platform
  ) {
  }

  open() {
    const a = document.createElement('a');
    a.href = 'https://shop.spreadshirt.se/FAsFotos/';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }
}
