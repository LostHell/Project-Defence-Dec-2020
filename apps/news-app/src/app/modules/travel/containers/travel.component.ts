import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../core/services/auth/user-local-storage/localStorageService.service';
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
  pageSlice = [];

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private state: LocalStorageService,
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

        for (const item of data) {
          if (item.category === 'travel') {
            this.destinations.push(item);
          }
        }

        this.pageSlice = this.destinations.slice(0, 10);
      })
    );
  }

  onPageChange(event) {
    this.pageSlice = event;
  }
}
