import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../core/services/auth/register/register.service';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;
  isLoggedIn: boolean = this.state.getState();

  constructor(
    private registerService: RegisterService,
    private state: CheckUserStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[A-Z]{1}[a-z]{2,20}\\s[A-Z]{1}[a-z]{2,20}$|^[A-Z]{1}[a-z]{2,20}\\s[A-Z]{0,1}[a-z]{2,20}\\s[A-Z]{1}[a-z]{2,20}$'
        ),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
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

  submitRegisterData() {
    if (
      this.form.value.password === this.form.value.repeatPassword &&
      this.form.valid
    ) {
      this.registerService
        .userRegister(this.form.value)
        .subscribe((res) => res);
      this.router.navigate(['user/login']);
    }
  }
}
