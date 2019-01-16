import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage {

  constructor(private iab: InAppBrowser) {
  }

  gotoYoutube() {
    this.iab.create('https://www.youtube.com/user/AXFR3DD3', '_blank');
  }

  gotoFacebook() {
    this.iab.create('https://www.facebook.com/pg/FAsFotos/', '_blank');
  }

  gotoInstagram() {
    this.iab.create('https://www.instagram.com/r3l04d3d/', '_blank');
  }

  gotoTwitter() {
    this.iab.create('https://twitter.com/AXFR3DD3', '_blank');
  }

  gotoFolketsblad() {
    this.iab.create('http://folketsblad.com/medlemmar/axfr3dd3/profile/', '_blank');
  }

  gotoSnapchat() {
    this.iab.create('https://www.snapchat.com/add/R3l04d3d', '_blank');
  }

  gotoPaypal() {
    this.iab.create('https://www.paypal.me/Reloaded88', '_blank');
  }
}
