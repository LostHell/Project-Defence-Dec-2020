import { Component, Input, OnInit } from '@angular/core';
import { AutoUnsubscribe } from '../../../../core/classes/AutoUnsubscribe';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../../core/services/news/news.service';
import { LocalStorageServiceService } from '../../../../core/services/auth/check-user-state/LocalStorageService.service';

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
    private state: LocalStorageServiceService,
    private newsService: NewsService
  ) {
    super();
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    window.scrollTo({ top: 0 });

    if (this.id !== undefined) {
      this.autoUnsubscribe(
        this.newsService.getNewsById(this.id).subscribe((data) => {
          if (data.content.length >= 300) {
            for (let i = 0; i < data.content.length; i++) {
              if (i % 300 === 0 && i !== 0) {
                if (
                  data.content[i] === ' ' ||
                  data.content[i] === '.' ||
                  data.content[i] === '!' ||
                  data.content === '?'
                ) {
                  this.string += '<br><br>';
                } else {
                  this.string += ' -<br><br>';
                }
              }

              this.string += data.content[i];
            }

            data.content = this.string;
          }

          this.item = data;
        })
      );
    }
  }
}
