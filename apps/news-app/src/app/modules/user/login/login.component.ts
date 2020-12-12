import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/auth/user/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/auth/user-local-storage/localStorageService.service';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AutoUnsubscribe {
  form: FormGroup;

  statusError: string;

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private userService: UserService,
    private state: LocalStorageService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
    });
  }

  submitLoginData() {
    if (this.form.valid) {
      this.autoUnsubscribe(
        this.userService.userLogin(this.form.value).subscribe(
          (res) => {
            if (res['user-token']) {
              this.state.setState('user-token', res['user-token']);
              localStorage.setItem('id', res['objectId']);
              this.router.navigateByUrl('/');
            }
          },
          (error) => {
            this.statusError = `${error.status} ${error.statusText}`;
          }
        )
      );
    }
  }
}
