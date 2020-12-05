import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from '../../../core/services/auth/check-user-state/LocalStorageService.service';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { NewsService } from '../../../core/services/news/news.service';
import { News } from '../../shared/models/News';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent extends AutoUnsubscribe implements OnInit {
  destinations: News[] = [];

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private state: LocalStorageServiceService,
    private newsService: NewsService
  ) {
    super();
  }

  ngOnInit() {
    this.autoUnsubscribe(
      this.newsService.getNews().subscribe((data) => {
        data.sort((a, b) => {
          if (a.created < b.created) {
            return 1;
          } else if (a.created === b.created) {
            return 0;
          } else if (a.created > b.created) {
            return -1;
          }
        });

        this.destinations = data;
      })
    );
  }
}
