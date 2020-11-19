import { Component } from '@angular/core';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent {
  public footballResults = [
    {
      id: 1,
      host: 'Germany',
      result: '2 : 3',
      guest: 'Italy',
    },
    {
      id: 2,
      host: 'Italy',
      result: '5 : 0',
      guest: 'Turkey',
    },
    {
      id: 3,
      host: 'Bulgaria',
      result: '3 : 1',
      guest: 'Turkey',
    },
    {
      id: 4,
      host: 'Bulgaria',
      result: '2 : 2',
      guest: 'Italy',
    },
    {
      id: 5,
      host: 'Germany',
      result: '4 : 1',
      guest: 'Turkey',
    },
  ];

  public allFootballNews = [
    {
      id: 1,
      imageUrl: 'https://i.ytimg.com/vi/p693u53Q10U/maxresdefault.jpg',
      title: 'Леонел Месси се кълне в топката...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 2,
      imageUrl:
        'https://i.guim.co.uk/img/media/d4600ad05cac97c97d826ae7e9ac1e0366e5eafe/0_77_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d2cf7079244424df821995232044d17b',
      title: 'Леонел Месси отбелязва гол...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 3,
      imageUrl: 'https://i.ytimg.com/vi/p693u53Q10U/maxresdefault.jpg',
      title: 'Леонел Месси се кълне в топката...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
    {
      id: 4,
      imageUrl:
        'https://i.guim.co.uk/img/media/d4600ad05cac97c97d826ae7e9ac1e0366e5eafe/0_77_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d2cf7079244424df821995232044d17b',
      title: 'Леонел Месси отбелязва гол...',
      content:
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив.\n' +
        'Свалят пътниците, ако не са с предпазни средства в автобусите в Пловдив',
    },
  ];

  isLoggedIn: boolean = this.state.getState();

  constructor(private state: CheckUserStateService) {}
}
