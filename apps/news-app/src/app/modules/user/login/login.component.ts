import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../core/services/auth/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}

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
          localStorage.setItem('user-token', res['user-token']);
          this.router.navigate(['/']);
          setTimeout(() => {
            this.refresh();
          }, 100);
        }
      });
    }
  }

  refresh(): void {
    window.location.reload();
  }
}
