import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/auth/user/user.service';
import { LocalStorageServiceService } from '../../../core/services/auth/check-user-state/LocalStorageService.service';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends AutoUnsubscribe {
  form: FormGroup;
  isLoggedIn: boolean = this.state.getState();

  statusError: string;

  constructor(
    private userService: UserService,
    private state: LocalStorageServiceService,
    private router: Router
  ) {
    super();
  }

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
      this.form.valid &&
      this.form.value.password === this.form.value.repeatPassword
    ) {
      this.statusError = undefined;

      this.autoUnsubscribe(
        this.userService.userRegister(this.form.value).subscribe(
          (res) => res,
          (error) => {
            this.statusError = `${error.status} ${error.statusText}`;
          }
        )
      );

      setTimeout(() => {
        if (!this.statusError) {
          this.router.navigateByUrl('user/login');
        }
      }, 1200);
    }
  }
}
