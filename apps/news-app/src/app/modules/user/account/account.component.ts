import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../core/services/auth/login/login.service';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';
import { NewsService } from '../../../core/services/news/news.service';
import { News } from '../../shared/models/News';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent extends AutoUnsubscribe implements OnInit {
  formNews: FormGroup;
  formFootballResult: FormGroup;
  formChangePassword: FormGroup;
  formChangeName: FormGroup;
  formChangeEmail: FormGroup;

  isAdmin = false;
  isActiveNewsCreator = true;
  isActiveFootballResultCreator = true;
  isScrapedNews = true;
  isSuccessDeleted = false;
  hasObjectId = false;

  isPasswordChanged = false;
  isNameChanged = false;
  isEmailChanged = false;

  news: News[] = [];
  newsId = '';

  isLoggedIn: boolean = this.state.getState();
  id: string = localStorage.getItem('id');
  user: string;

  constructor(
    private state: CheckUserStateService,
    private loginService: LoginService,
    private newsService: NewsService
  ) {
    super();
  }

  ngOnInit() {
    this.createNewsForm();
    this.createFootballResultForm();
    this.createChangePasswordForm();
    this.createChangeNameForm();
    this.createChangeEmailForm();

    if (this.id !== null) {
      this.autoUnsubscribe(
        this.loginService.getUser(this.id).subscribe((res) => {
          if (res.role === 'admin') {
            this.isAdmin = true;
          }

          this.user = res.name;
        })
      );
    }

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

          const date = new Date(item.created);
          item.created = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        }

        this.news = data;
      })
    );
  }

  getApiFootballNews() {
    let data;
    let counter;

    this.autoUnsubscribe(
      this.newsService.getApiFootballNews().subscribe((res) => {
        if (res !== undefined) {
          for (const art of res.arts) {
            counter = 0;

            data = {
              title: art.tit,
              imageUrl: art.img,
              content: art.con,
              category: 'sport',
            };

            this.isScrapedNews = false;

            setTimeout(() => {
              this.isScrapedNews = true;
            }, 3500);

            for (const main of this.news) {
              if (data.title === main.title) {
                counter = ++counter;
                break;
              }
            }

            if (counter === 0) {
              this.newsService.createNews(data).subscribe();
            }
          }
        }
      })
    );
  }

  createNewsForm() {
    this.formNews = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(100),
      ]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

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

  createChangePasswordForm() {
    this.formChangePassword = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  createChangeNameForm() {
    this.formChangeName = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  createChangeEmailForm() {
    this.formChangeEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  createNews() {
    if (this.formNews.valid) {
      if (this.newsId) {
        this.autoUnsubscribe(
          this.newsService
            .updateNews(this.newsId, this.formNews.value)
            .subscribe()
        );
      } else {
        this.autoUnsubscribe(
          this.newsService.createNews(this.formNews.value).subscribe()
        );
      }

      this.ngOnInit();
      this.isActiveNewsCreator = false;

      setTimeout(() => {
        this.formNews.reset();
      }, 500);

      setTimeout(() => {
        this.isActiveNewsCreator = true;
      }, 3500);
    }
  }

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

  changePassword() {
    if (
      this.formChangePassword.valid &&
      this.formChangePassword.value.password ===
        this.formChangePassword.value.repeatPassword
    ) {
      this.isPasswordChanged = true;

      this.autoUnsubscribe(
        this.loginService
          .changePassword(this.id, this.formChangePassword.value)
          .subscribe()
      );

      setTimeout(() => {
        this.formChangePassword.reset();
      }, 500);
    }
  }

  changeName() {
    if (this.formChangeName.valid) {
      this.isNameChanged = true;

      this.autoUnsubscribe(
        this.loginService
          .changeName(this.id, this.formChangeName.value)
          .subscribe((res) => {
            this.user = res.name;
          })
      );

      setTimeout(() => {
        this.formChangeName.reset();
      }, 500);
    }
  }

  changeEmail() {
    if (this.formChangeEmail.valid) {
      this.isEmailChanged = true;

      this.autoUnsubscribe(
        this.loginService
          .changeEmail(this.id, this.formChangeEmail.value)
          .subscribe()
      );

      setTimeout(() => {
        this.formChangeEmail.reset();
      }, 500);
    }
  }

  getItem(objectId: string) {
    this.autoUnsubscribe(
      this.newsService.getNewsById(objectId).subscribe((res) => {
        this.newsId = res.objectId;
        this.formNews.controls['title'].setValue(res.title);
        this.formNews.controls['imageUrl'].setValue(res.imageUrl);
        this.formNews.controls['content'].setValue(res.content);
        this.formNews.controls['category'].setValue(res.category);
      })
    );

    this.hasObjectId = true;
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
}
