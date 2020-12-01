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
  form: FormGroup;
  formFootball: FormGroup;
  formUser: FormGroup;

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
    this.createForm();
    this.createFootballResultForm();
    this.createFormUser();
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

  createForm() {
    this.form = new FormGroup({
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
    this.formFootball = new FormGroup({
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

  createFormUser() {
    this.formUser = new FormGroup({
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

  data() {
    if (this.form.valid) {
      if (this.newsId) {
        this.autoUnsubscribe(
          this.newsService.updateNews(this.newsId, this.form.value).subscribe()
        );
      } else {
        this.autoUnsubscribe(
          this.newsService.createNews(this.form.value).subscribe()
        );
      }
      setTimeout(() => {
        this.form.reset();
      }, 500);
      this.isActive = false;
    }
  }

  footballData() {
    if (this.formFootball.valid) {
      this.autoUnsubscribe(
        this.newsService
          .createFootballResult(this.formFootball.value)
          .subscribe()
      );
      setTimeout(() => {
        this.formFootball.reset();
      }, 500);
      this.isActive = false;
    }
  }

  userData() {
    if (
      this.formUser.valid &&
      this.formUser.value.password === this.formUser.value.repeatPassword
    ) {
      this.isActive = false;
      this.autoUnsubscribe(
        this.loginService
          .changePassword(this.id, this.formUser.value)
          .subscribe()
      );
      setTimeout(() => {
        this.formUser.reset();
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
        this.form.controls['title'].setValue(res.title);
        this.form.controls['imageUrl'].setValue(res.imageUrl);
        this.form.controls['content'].setValue(res.content);
        this.form.controls['category'].setValue(res.category);
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
