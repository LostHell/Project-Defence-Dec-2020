import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';

import { ReactiveInputComponent } from './components/forms/reactive-input/reactive-input.component';
import { CardComponent } from './components/card/card/card.component';
import { MusicCardComponent } from './components/music-card/music-card/music-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ReactiveInputComponent,
    CardComponent,
    MusicCardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ReactiveInputComponent,
    CardComponent,
    MusicCardComponent,
  ],
})
export class SharedModule {}
