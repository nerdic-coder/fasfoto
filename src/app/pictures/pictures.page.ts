import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

declare var RSSParser;

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.page.html',
  styleUrls: ['pictures.page.scss']
})
export class PicturesPage implements OnInit  {

  pictures: any;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) {
  }

  async ngOnInit() {
    const parser = new RSSParser();
    let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://queryfeed.net/instagram?q=r3l04d3d');
    if (this.platform.is('cordova')) {
      feed = await parser.parseURL('https://queryfeed.net/instagram?q=r3l04d3d');
    }
    this.pictures = feed.items;
  }

  open() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.mostphotos.com/sv-se/user/fasfotos', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.mostphotos.com/sv-se/user/fasfotos';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }
}
