import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.page.html',
  styleUrls: ['pictures.page.scss']
})
export class PicturesPage {

  constructor(private iab: InAppBrowser) {
  }

  open() {
    this.iab.create('https://www.mostphotos.com/sv-se/user/fasfotos', '_blank');
  }
}
