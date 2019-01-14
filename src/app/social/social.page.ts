import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage implements OnInit {

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  gotoYoutube() {
    this.iab.create('https://www.youtube.com/user/AXFR3DD3', '_system');
  }

  gotoFacebook() {
    this.iab.create('https://www.facebook.com/pg/FAsFotos/', '_system');
  }

  gotoInstagram() {
    this.iab.create('https://www.instagram.com/r3l04d3d/', '_system');
  }

  gotoTwitter() {
    this.iab.create('https://twitter.com/AXFR3DD3', '_system');
  }

  gotoFolketsblad() {
    this.iab.create('http://folketsblad.com/medlemmar/axfr3dd3/profile/', '_system');
  }

  gotoSnapchat() {
    this.iab.create('https://www.snapchat.com/add/R3l04d3d', '_system');
  }

  gotoPaypal() {
    this.iab.create('https://www.paypal.me/Reloaded88', '_system');
  }
}
