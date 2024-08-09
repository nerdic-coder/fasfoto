import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage {

  constructor(
    private platform: Platform
  ) {
  }

  gotoIbooks() {
    const a = document.createElement('a');
    a.href = 'https://www.blurb.com/b/5274402-en-f-rsvunnen-tid-p-land?ebook=577054';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoAmazon() {
    const a = document.createElement('a');
    a.href = 'https://www.amazon.com/dp/1320985270';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }
}
