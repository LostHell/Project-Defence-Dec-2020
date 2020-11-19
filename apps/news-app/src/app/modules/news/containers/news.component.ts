import { Component } from '@angular/core';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  public allNews = [
    {
      id: 1,
      imageUrl: 'https://www.dw.com/image/38131817_303.jpg',
      title: 'Бойко Хелуинската тиква...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 2,
      imageUrl: 'https://i.redd.it/5zem8uesagb51.jpg',
      title: 'Бойко Хелуинската тиква...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 3,
      imageUrl: 'https://www.dw.com/image/38131817_303.jpg',
      title: 'Бойко Хелуинската тиква...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 4,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b0/Tallinn_Digital_Summit_Arrivals_Boyko_Borisov_Cropped.jpg',
      title: 'Бойко Хелуинската тиква...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 5,
      imageUrl: 'https://i.redd.it/5zem8uesagb51.jpg',
      title: 'Бойко Хелуинската тиква...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 6,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b0/Tallinn_Digital_Summit_Arrivals_Boyko_Borisov_Cropped.jpg',
      title: 'Бойко Хелуинската тиква...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
  ];

  isLoggedIn: boolean = this.state.getState();

  constructor(private state: CheckUserStateService) {}
}
