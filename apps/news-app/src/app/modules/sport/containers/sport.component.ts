import { Component, OnInit } from '@angular/core';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { News } from '../../shared/models/News';
import { NewsService } from '../../../core/services/news/news.service';
import { FootballResult } from '../../shared/models/Football-Result';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent extends AutoUnsubscribe implements OnInit {
  public football: FootballResult[] = [];

  public news: News[] = [];

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private newsService: NewsService,
    private state: CheckUserStateService
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
          if (item.title.length > 60) {
            item.title = item.title.slice(0, 60).concat('...');
          }
          if (item.content.length > 260) {
            item.content = item.content.slice(0, 260).concat('...');
          }

          this.news.push(item);
        }
      })
    );
    this.autoUnsubscribe(
      this.newsService.getFootballResult().subscribe((data) => {
        data.sort((a, b) => {
          if (a.created < b.created) {
            return 1;
          } else if (a.created === b.created) {
            return 0;
          } else if (a.created > b.created) {
            return -1;
          }
        });
        if (data.length > 5) {
          for (let i = 0; i < 5; i++) {
            this.football.push(data[i]);
          }
        } else {
          this.football = data;
        }
      })
    );
  }
}