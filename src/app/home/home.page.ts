import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private platform: Platform
  ) {
  }

  open() {
    const a = document.createElement('a');
    a.href = 'https://nerdic-coder.com/fotograf-fredrik-axelsson-privacy-policy/';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }
}
