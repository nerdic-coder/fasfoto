import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.page.html',
  styleUrls: ['pictures.page.scss']
})
export class PicturesPage  {

  pictures: any;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) {
  }

  async ionViewDidEnter() {
    if (!this.pictures) {
      this.pictures = [
        {
          imageurl: 'https://cdn5.eyeem.com/thumb/9a24d562a8916b3f647979c2d90f2e738ccc9a51-1569511742724/1100/1100',
          title: 'Brygga'
        },
        {
          imageurl: 'https://cdn4.eyeem.com/thumb/b62716d62756471677a3a3a373032363136393730393635313d203631683734666260373837356363693133643167356137326666613932663233643365373635626a3a3a3/1100/1100',
          title: 'Altan'
        },
        {
          imageurl: 'https://cdn4.eyeem.com/thumb/7d8577c5b8823083a259682e10fb6ba90b7ac7cc-1568735506443/1100/1100',
          title: 'Fiskehamn'
        },
        {
          imageurl: 'https://cdn5.eyeem.com/thumb/822aaa7dc35e3dfde250f2a591d8b9494308eda7-1568035907420/1100/1100',
          title: 'Färja'
        },
        {
          imageurl: 'https://cdn5.eyeem.com/thumb/8901d1ae407a56074fb584ec6816e4dd07915bc8-1567352347799/w/400',
          title: 'Skog'
        }
      ];
      // try {
      //   const parser = new RSSParser();
      //   let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://queryfeed.net/instagram?q=r3l04d3d');
      //   if (this.platform.is('cordova')) {
      //     feed = await parser.parseURL('https://queryfeed.net/instagram?q=r3l04d3d');
      //   }
      //   this.pictures = feed.items;
      // } catch (error) {
      //   this.pictures = [
      //     {
      //       enclosure: {
      //         url: 'https://cdn5.eyeem.com/thumb/9a24d562a8916b3f647979c2d90f2e738ccc9a51-1569511742724/1100/1100'
      //       },
      //       title: 'Brygga'
      //     }
      //   ];
      // }
    }
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
