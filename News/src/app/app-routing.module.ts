import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NewsComponent} from './news/news.component';
import {SportsComponent} from './sports/sports.component';
import {HandbookComponent} from './handbook/handbook.component';
import {AnnouncementsComponent} from './announcements/announcements.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'handbook', component: HandbookComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
