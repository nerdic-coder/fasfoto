import { Component } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.page.html',
  styleUrls: ['pictures.page.scss']
})
export class PicturesPage {

  constructor() {
  }

  open() {
    const a = document.createElement('a');
    a.href = 'https://www.mostphotos.com/sv-se/user/fasfotos';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }
}
