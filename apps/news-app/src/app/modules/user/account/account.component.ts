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
  isActive = true;
  isActiveNews = false;
  showAllNews = false;
  isSuccessDeleted = false;
  hasObjectId = false;
  isActiveFootballResults = false;
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
    this.createChangePasswordUserForm();
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
          if (item.title.length > 60) {
            item.title = item.title.slice(0, 60).concat('...');
          }
          if (item.content.length > 260) {
            item.content = item.content.slice(0, 260).concat('...');
          }

          const date = new Date(item.created);
          item.created = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        }

        this.news = data;
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
      host: new FormControl('', [Validators.required, Validators.minLength(4)]),
      result: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
      guest: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  createChangePasswordUserForm() {
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
      setTimeout(() => {
        this.formNews.reset();
      }, 500);
      this.isActive = false;
    }
  }

  footballResult() {
    if (this.formFootballResult.valid) {
      this.autoUnsubscribe(
        this.newsService
          .createFootballResult(this.formFootballResult.value)
          .subscribe()
      );
      setTimeout(() => {
        this.formFootballResult.reset();
      }, 500);
      this.isActive = false;
    }
  }

  changePassword() {
    if (
      this.formChangePassword.valid &&
      this.formChangePassword.value.password ===
        this.formChangePassword.value.repeatPassword
    ) {
      this.isActive = false;
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
      this.isActive = false;
      this.autoUnsubscribe(
        this.loginService
          .changeName(this.id, this.formChangeName.value)
          .subscribe()
      );
      setTimeout(() => {
        this.formChangeName.reset();
      }, 500);
    }
  }

  changeEmail() {
    if (this.formChangeEmail.valid) {
      this.isActive = false;
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

  activateAddNews() {
    this.isActive = true;
    this.showAllNews = false;
    this.isActiveFootballResults = false;
    this.isActiveNews = !this.isActiveNews;
    if (this.isActiveNews === false) {
      this.hasObjectId = false;
    }
    this.ngOnInit();
  }

  activateFootballResults() {
    this.isActive = true;
    this.isActiveNews = false;
    this.showAllNews = false;
    this.isActiveFootballResults = !this.isActiveFootballResults;
    this.hasObjectId = false;
  }

  activateShowAllNews() {
    this.isActiveNews = false;
    this.isActiveFootballResults = false;
    this.showAllNews = !this.showAllNews;
    this.hasObjectId = false;
    this.ngOnInit();
  }

  getItem(objectId: string) {
    this.activateAddNews();
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
    this.autoUnsubscribe(this.newsService.deleteNews(objectId).subscribe());
    this.showAllNews = !this.showAllNews;
    this.isSuccessDeleted = true;
    setTimeout(() => {
      this.isSuccessDeleted = false;
    }, 3500);
  }
}
