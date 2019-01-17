import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage {

  constructor() {
  }

  gotoIbooks() {
    const a = document.createElement('a');
    a.href = 'https://itun.es/se/-dfxcb.l';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoAmazon() {
    const a = document.createElement('a');
    a.href = 'https://www.amazon.com/dp/1320985270';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }
}
