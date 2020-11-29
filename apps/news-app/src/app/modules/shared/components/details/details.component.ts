import { Component, Input, OnInit } from '@angular/core';
import { AutoUnsubscribe } from '../../../../core/classes/AutoUnsubscribe';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../../core/services/news/news.service';
import { CheckUserStateService } from '../../../../core/services/auth/check-user-state/check-user-state.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends AutoUnsubscribe implements OnInit {
  @Input() item: {
    title: string;
    imageUrl: string;
    content: string;
  };

  id: string;
  isLoggedIn: boolean = this.state.getState();
  string = '';

  constructor(
    private route: ActivatedRoute,
    private state: CheckUserStateService,
    private newsService: NewsService
  ) {
    super();
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id !== undefined) {
      this.autoUnsubscribe(
        this.newsService.getNewsById(this.id).subscribe((res) => {
          if (res.content.length >= 300) {
            for (let i = 0; i < res.content.length; i++) {
              if (i % 300 === 0 && i !== 0) {
                if (
                  res.content[i] === ' ' ||
                  res.content[i] === '.' ||
                  res.content[i] === '!' ||
                  res.content === '?'
                ) {
                  this.string += '<br><br>';
                } else {
                  this.string += ' -<br><br>';
                }
              }
              this.string += res.content[i];
            }
            res.content = this.string;
          }
          this.item = res;
        })
      );
    }
  }
}
