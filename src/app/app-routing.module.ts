import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'store',
    loadChildren: './store/store.module#StorePageModule'
  },
  {
    path: 'pictures',
    loadChildren: './pictures/pictures.module#PicturesPageModule'
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosPageModule'
  },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksPageModule'
  },
  {
    path: 'social',
    loadChildren: './social/social.module#SocialPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
