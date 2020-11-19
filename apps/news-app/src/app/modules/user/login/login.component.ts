import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../core/services/auth/login/login.service';
import { Router } from '@angular/router';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private loginService: LoginService,
    private state: CheckUserStateService,
    private router: Router
  ) {}

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
      this.loginService.userLogin(this.form.value).subscribe((res) => {
        if (res['user-token']) {
          this.state.setState('user-token', res['user-token']);
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
