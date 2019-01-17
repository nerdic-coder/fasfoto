import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss']
})
export class StorePage {

  constructor() {
  }

  open() {
    const a = document.createElement('a');
    a.href = 'https://shop.spreadshirt.se/FAsFotos';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }
}
