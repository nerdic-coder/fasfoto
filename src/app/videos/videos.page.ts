import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

declare var RSSParser;

@Component({
  selector: 'app-videos',
  templateUrl: 'videos.page.html',
  styleUrls: ['videos.page.scss']
})
export class VideosPage implements OnInit  {

  videos: any;

  constructor(
    private sanitizer: DomSanitizer,
    private iab: InAppBrowser,
    private platform: Platform) {

  }

  async ngOnInit() {
    const parser = new RSSParser();
    let feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?user=AXFR3DD3');
    if (this.platform.is('cordova')) {
      feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?user=AXFR3DD3');
    }
    this.videos = feed.items;
    this.videos.forEach(entry => {
      const splitId = entry.id.split(':');
      entry.id = splitId[2];
      entry.src = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + entry.id);
    });
  }

  open() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://www.youtube.com/user/AXFR3DD3', '_system');
    } else {
      const a = document.createElement('a');
      a.href = 'https://www.youtube.com/user/AXFR3DD3';
      a.target = '_system';
      a.rel = 'noopener';
      a.click();
    }
  }
}
