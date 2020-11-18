import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './modules/news/containers/news.component';
import { SportComponent } from './modules/sport/containers/sport.component';
import { TravelComponent } from './modules/travel/containers/travel.component';
import { MusicComponent } from './modules/music/containers/music.component';
// import { ContactComponent } from './modules/contact/containers/contact.component';
import { ErrorComponent } from './modules/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  { path: 'news', component: NewsComponent },
  { path: 'sports', component: SportComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'music', component: MusicComponent },
  // { path: 'contacts', component: ContactComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
