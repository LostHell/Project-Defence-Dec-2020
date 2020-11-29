import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../core/services/auth/login/login.service';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';
import { NewsService } from '../../../core/services/news/news.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent extends AutoUnsubscribe implements OnInit {
  form: FormGroup;
  isAdmin = false;
  isActive = true;
  isActiveNews = false;

  isLoggedIn: boolean = this.state.getState();
  id: string = localStorage.getItem('id');

  constructor(
    private state: CheckUserStateService,
    private loginService: LoginService,
    private newsService: NewsService
  ) {
    super();
  }

  ngOnInit() {
    this.createForm();
    this.autoUnsubscribe(
      this.loginService.getUser(this.id).subscribe((res) => {
        if (res.role === 'admin') {
          this.isAdmin = true;
        }
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

  data() {
    if (this.form.valid) {
      this.autoUnsubscribe(
        this.newsService.createNews(this.form.value).subscribe()
      );
      this.isActive = false;
    }
  }

  activateAddNews() {
    this.isActiveNews = !this.isActiveNews;
  }
}
