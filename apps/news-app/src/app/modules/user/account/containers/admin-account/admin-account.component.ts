import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from '../../../../../core/classes/AutoUnsubscribe';
import { NewsService } from '../../../../../core/services/news/news.service';
import { News } from '../../../../shared/models/News';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss'],
})
export class AdminAccountComponent extends AutoUnsubscribe implements OnInit {
  formFootballResult: FormGroup;

  isActiveFootballResultCreator = true;
  isReceivedFootballNewsApi = true;
  isSuccessDeleted = false;

  news: News[] = [];
  pageSlice = [];

  constructor(private newsService: NewsService, private dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.createFootballResultForm();
    this.getNews();
  }

  // Get News
  getNews() {
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
          if (item.title.length > 120) {
            item.title = item.title.slice(0, 120).concat('...');
          }
          if (item.content.length > 180) {
            item.content = item.content.slice(0, 180).concat('...');
          }
        }

        this.news = data;
        this.pageSlice = this.news.slice(0, 10);
      })
    );
  }

  // Fetch API News
  getFootballNewsApi() {
    let data;
    let counter;

    this.autoUnsubscribe(
      this.newsService.getApiFootballNews().subscribe((res) => {
        if (res !== undefined) {
          for (const footballNewsItem of res.arts) {
            counter = 0;

            data = {
              title: footballNewsItem.tit,
              imageUrl: footballNewsItem.img,
              content: footballNewsItem.con,
              category: 'sport',
            };

            for (const item of this.news) {
              if (data.title === item.title) {
                counter = ++counter;
                break;
              }
            }

            if (counter === 0) {
              this.newsService.createNews(data).subscribe((newData) => {
                this.news.push(newData);
              });
            }

            this.isReceivedFootballNewsApi = false;

            setTimeout(() => {
              this.isReceivedFootballNewsApi = true;
            }, 3500);
          }
        }
      })
    );
  }

  // Forms
  createFootballResultForm() {
    this.formFootballResult = new FormGroup({
      host: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(14),
      ]),
      result: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
      guest: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(14),
      ]),
    });
  }

  // Methods
  createFootballResult() {
    if (this.formFootballResult.valid) {
      this.autoUnsubscribe(
        this.newsService
          .createFootballResult(this.formFootballResult.value)
          .subscribe()
      );

      this.isActiveFootballResultCreator = false;

      setTimeout(() => {
        this.formFootballResult.reset();
      }, 500);

      setTimeout(() => {
        this.isActiveFootballResultCreator = true;
      }, 3500);
    }
  }

  getDialogItem(objectId: string) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '100%',
      maxWidth: '50rem',
    });
    dialogRef.componentInstance.newsId = objectId;

    this.autoUnsubscribe(
      this.newsService.getNewsById(objectId).subscribe((res) => {
        dialogRef.componentInstance.form.setValue({
          title: res.title,
          imageUrl: res.imageUrl,
          content: res.content,
          category: res.category,
        });

        dialogRef.afterClosed().subscribe(() => {
          this.getNews();
        });
      })
    );
  }

  deleteItem(objectId: string) {
    this.autoUnsubscribe(
      this.newsService.deleteNews(objectId).subscribe((res) => {
        if (res !== null && res !== undefined) {
          this.ngOnInit();
        }
      })
    );

    this.isSuccessDeleted = true;

    setTimeout(() => {
      this.isSuccessDeleted = false;
    }, 3500);
  }

  onPageChange(event) {
    this.pageSlice = event;
  }
}
