import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage implements OnInit {

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  gotoIbooks() {
    this.iab.create('https://itun.es/se/-dfxcb.l', '_system');
  }

  gotoAmazon() {
    this.iab.create('https://www.amazon.com/dp/1320985270', '_system');
  }
}
