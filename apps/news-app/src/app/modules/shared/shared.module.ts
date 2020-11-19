import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';

import { ReactiveInputComponent } from './components/forms/reactive-input/reactive-input.component';
import { NewsCardComponent } from './components/cards/news-card-render/news-card.component';
import { MusicCardComponent } from '../music/components/music-card-render/music-card.component';
import { ButtonComponent } from './components/button/button/button.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ReactiveInputComponent,
    NewsCardComponent,
    MusicCardComponent,
    ButtonComponent,
    NotAuthorizedComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ReactiveInputComponent,
    NewsCardComponent,
    MusicCardComponent,
    ButtonComponent,
    NotAuthorizedComponent,
  ],
})
export class SharedModule {}
