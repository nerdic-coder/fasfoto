import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

declare var addToHomescreen;

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Hem',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Bilder',
      url: '/pictures',
      icon: 'images'
    },
    {
      title: 'Videor',
      url: '/videos',
      icon: 'videocam'
    },
    {
      title: 'Butik',
      url: '/store',
      icon: 'logo-apple-appstore'
    },
    {
      title: 'Böcker',
      url: '/books',
      icon: 'book'
    },
    {
      title: 'Musik',
      url: '/music',
      icon: 'musical-notes'
    },
    {
      title: 'Sociala medier',
      url: '/social',
      icon: 'people'
    }
  ];

  constructor(
  ) {
    this.initializeApp();
  }

  initializeApp() {
    addToHomescreen();
  }
}
