import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage {

  constructor() {
  }

  gotoYoutube() {
    const a = document.createElement('a');
    a.href = 'https://www.youtube.com/user/AXFR3DD3';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoFacebook() {
    const a = document.createElement('a');
    a.href = 'https://www.facebook.com/pg/FAsFotos/';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoInstagram() {
    const a = document.createElement('a');
    a.href = 'https://www.instagram.com/r3l04d3d/';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoTwitter() {
    const a = document.createElement('a');
    a.href = 'https://twitter.com/AXFR3DD3';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoFolketsblad() {
    const a = document.createElement('a');
    a.href = 'http://folketsblad.com/medlemmar/axfr3dd3/profile/';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoSnapchat() {
    const a = document.createElement('a');
    a.href = 'https://www.snapchat.com/add/R3l04d3d';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }

  gotoPaypal() {
    const a = document.createElement('a');
    a.href = 'https://www.paypal.me/Reloaded88';
    a.target = '_blank';
    a.rel = 'noopener';
    a.click();
  }
}
