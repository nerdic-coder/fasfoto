import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.page.html',
  styleUrls: ['pictures.page.scss']
})
export class PicturesPage implements OnInit {

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  open() {
    this.iab.create('https://www.mostphotos.com/sv-se/user/fasfotos', '_system');
  }
}
