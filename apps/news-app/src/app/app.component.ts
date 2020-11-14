import { Component } from '@angular/core';
import { NavigationItem } from './modules/shared/models/NavigationItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigation: NavigationItem[] = [
    {
      name: 'News',
      route: '/news',
    },
    {
      name: 'Sports',
      route: '/sports',
    },
    {
      name: 'Travel',
      route: '/travel',
    },
    {
      name: 'Music',
      route: '/music',
    },
    {
      name: 'Contacts',
      route: '/contacts',
    },
    {
      name: 'Login',
      route: '/user/login',
    },
    {
      name: 'Register',
      route: '/user/register',
    },
  ];
}
