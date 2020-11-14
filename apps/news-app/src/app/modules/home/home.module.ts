import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './containers/home/home.component';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
import { TopDestinationsComponent } from './components/top-destinations/top-destinations.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { NewsletterSubscribeComponent } from './components/newsletter-subscribe/newsletter-subscribe.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeadingSectionComponent,
    TopDestinationsComponent,
    WhyUsComponent,
    NewsletterSubscribeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HomeModule {}
