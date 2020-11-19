import { Component } from '@angular/core';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  public musicArtistsData = [
    {
      id: 1,
      imageUrl:
        'https://d3vhc53cl8e8km.cloudfront.net/artists/180/q7kxbmvrEbeAio6SVIzRlGzG3kNd6Hk0bpsGOM3V.jpeg',
      name: 'David Guetta',
      period: "Music 90's",
    },
    {
      id: 2,
      imageUrl:
        'https://www.fazemag.de/wp-content/uploads/2018/04/Bildschirmfoto-2018-04-19-um-08.22.19.png',
      name: 'Neelix',
      period: "Music 90's",
    },
    {
      id: 3,
      imageUrl:
        'https://freshmusicfreaks.com/wp-content/uploads/2018/12/ASOT-AVB.jpg',
      name: 'Tiesto',
      period: "Music 90's",
    },
    {
      id: 4,
      imageUrl:
        'https://weraveyou.com/wp-content/uploads/2020/03/martin-garrix-concentrating-ultra-australia-2019-rukes.jpg',
      name: 'Martin Garix',
      period: "Music 90's",
    },
    {
      id: 5,
      imageUrl:
        'https://d3vhc53cl8e8km.cloudfront.net/artists/180/q7kxbmvrEbeAio6SVIzRlGzG3kNd6Hk0bpsGOM3V.jpeg',
      name: 'David Guetta',
      period: "Music 90's",
    },
    {
      id: 6,
      imageUrl:
        'https://www.fazemag.de/wp-content/uploads/2018/04/Bildschirmfoto-2018-04-19-um-08.22.19.png',
      name: 'Neelix',
      period: "Music 90's",
    },
    {
      id: 7,
      imageUrl:
        'https://freshmusicfreaks.com/wp-content/uploads/2018/12/ASOT-AVB.jpg',
      name: 'Tiesto',
      period: "Music 90's",
    },
    {
      id: 8,
      imageUrl:
        'https://weraveyou.com/wp-content/uploads/2020/03/martin-garrix-concentrating-ultra-australia-2019-rukes.jpg',
      name: 'Martin Garix',
      period: "Music 90's",
    },
  ];

  isLoggedIn: boolean = this.state.getState();

  constructor(private state: CheckUserStateService) {}
}
