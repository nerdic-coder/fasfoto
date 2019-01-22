import { Component, OnInit } from '@angular/core';
// import RSSParser from 'rss-parser';

declare var RSSParser;

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.page.html',
  styleUrls: ['pictures.page.scss']
})
export class PicturesPage implements OnInit  {

  pictures: any;

  async ngOnInit() {
    const parser = new RSSParser();
    const feed = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://queryfeed.net/instagram?q=r3l04d3d');
    this.pictures = feed.items;
  }

  open() {
    const a = document.createElement('a');
    a.href = 'https://www.mostphotos.com/sv-se/user/fasfotos';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }
}
