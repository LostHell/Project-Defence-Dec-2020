import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';

import { NewsCardComponent } from './components/cards/news-card-render/news-card.component';
import { MusicCardComponent } from '../music/components/music-card-render/music-card.component';
import { ButtonComponent } from './components/button/button/button.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { DetailsComponent } from './components/details/details.component';

import { ReactiveInputComponent } from './components/forms/reactive-input/reactive-input.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { BaseInputComponent } from './components/forms/base-input/base-input.component';
import { BaseInputTextareaComponent } from './components/forms/base-input-textarea/base-input-textarea.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

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
    DetailsComponent,
    DropdownMenuComponent,
    BaseInputComponent,
    BaseInputTextareaComponent,
    PaginatorComponent,
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
    DropdownMenuComponent,
    BaseInputComponent,
    BaseInputTextareaComponent,
    PaginatorComponent,
  ],
})
export class SharedModule {}
