import { Component, OnInit } from '@angular/core';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';
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
    private state: CheckUserStateService,
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
          }
        });

        this.destinations = data;
      })
    );
  }
}
