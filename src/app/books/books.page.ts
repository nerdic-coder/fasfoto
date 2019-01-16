import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage {

  constructor(private iab: InAppBrowser) {
  }

  gotoIbooks() {
    this.iab.create('https://itun.es/se/-dfxcb.l', '_blank');
  }

  gotoAmazon() {
    this.iab.create('https://www.amazon.com/dp/1320985270', '_blank');
  }
}
