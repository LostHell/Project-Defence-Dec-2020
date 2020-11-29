import { Component } from '@angular/core';
import { NavigationItem } from './modules/shared/models/NavigationItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigation: NavigationItem[] = [];

  ngOnInit() {
    const result = localStorage.getItem('isActive');
    const userToken = localStorage.getItem('user-token');
    if (result === 'false' || userToken === null) {
      this.navigation = [
        {
          name: 'Login',
          isActive: false,
          route: '/user/login',
        },
        {
          name: 'Register',
          isActive: false,
          route: '/user/register',
        },
      ];
    } else {
      this.navigation = [
        {
          name: 'News',
          isActive: true,
          route: '/news',
        },
        {
          name: 'Sports',
          isActive: true,
          route: '/sports',
        },
        {
          name: 'Travel',
          isActive: true,
          route: '/travel',
        },
        {
          name: 'Music',
          isActive: true,
          route: '/music',
        },
        {
          name: 'Account',
          isActive: true,
          route: '/user/account',
        },
        // {
        //   name: 'Contacts',
        //   route: '/contacts',
        // },
      ];
    }
  }
}
