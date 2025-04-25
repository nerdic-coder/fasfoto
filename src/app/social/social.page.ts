import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage {

  constructor(
    private platform: Platform
  ) {
  }

  gotoYoutube() {
    const a = document.createElement('a');
    a.href = 'https://www.youtube.com/user/AXFR3DD3';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoTwitch() {
    const a = document.createElement('a');
    a.href = 'https://www.twitch.tv/r3l04d3d88';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoEyeem() {
    const a = document.createElement('a');
    a.href = 'https://www.eyeem.com/u/30100712';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoFacebook() {
    const a = document.createElement('a');
    a.href = 'https://www.facebook.com/pg/FAsFotos/';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoInstagram() {
    const a = document.createElement('a');
    a.href = 'https://www.instagram.com/r3l04d3d/';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoTwitter() {
    const a = document.createElement('a');
    a.href = 'https://twitter.com/AXFR3DD3';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoFolketsblad() {
    const a = document.createElement('a');
    a.href = 'http://folketsblad.com/medlemmar/axfr3dd3/profile/';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoSnapchat() {
    const a = document.createElement('a');
    a.href = 'https://www.snapchat.com/add/R3l04d3d';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }

  gotoPaypal() {
    const a = document.createElement('a');
    a.href = 'https://www.paypal.me/Reloaded88';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }
  
  gotoYoupic() {
    const a = document.createElement('a');
    a.href = 'https://youpic.com/fredrik_axelsson';
    a.target = '_system';
    a.rel = 'noopener';
    a.click();
  }
}
