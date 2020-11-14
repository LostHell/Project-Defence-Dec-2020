import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsComponent } from './modules/news/containers/news.component';
import { SportComponent } from './modules/sport/containers/sport.component';
import { TravelComponent } from './modules/travel/containers/travel.component';
import { MusicComponent } from './modules/music/containers/music.component';
import { ContactComponent } from './modules/contact/containers/contact.component';
import { ErrorComponent } from './modules/error/error.component';
import { FootballResultTableComponent } from './modules/sport/components/football-result-table/football-result-table.component';
import { WorkTimeComponent } from './modules/contact/components/work-time/work-time.component';
import { ContantInfoComponent } from './modules/contact/components/contant-info/contant-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SportComponent,
    TravelComponent,
    ContactComponent,
    MusicComponent,
    ErrorComponent,
    FootballResultTableComponent,
    WorkTimeComponent,
    ContantInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
