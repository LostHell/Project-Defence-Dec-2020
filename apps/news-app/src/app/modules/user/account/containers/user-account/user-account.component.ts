import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from '../../../../../core/classes/AutoUnsubscribe';
import { UserService } from '../../../../../core/services/auth/user/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent extends AutoUnsubscribe implements OnInit {
  formChangePassword: FormGroup;
  formChangeName: FormGroup;
  formChangeEmail: FormGroup;

  isPasswordChanged = false;
  isNameChanged = false;
  isEmailChanged = false;

  id: string = localStorage.getItem('id');
  user: string;

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.createChangePasswordForm();
    this.createChangeNameForm();
    this.createChangeEmailForm();

    this.autoUnsubscribe(
      this.userService
        .getUser(this.id)
        .subscribe((res) => (this.user = res.name))
    );
  }

  // Forms
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

  // Methods
  changePassword() {
    if (
      this.formChangePassword.valid &&
      this.formChangePassword.value.password ===
        this.formChangePassword.value.repeatPassword
    ) {
      this.autoUnsubscribe(
        this.userService
          .changePassword(this.id, this.formChangePassword.value)
          .subscribe()
      );

      this.isPasswordChanged = true;

      setTimeout(() => {
        this.formChangePassword.reset();
      }, 500);

      setTimeout(() => {
        this.isPasswordChanged = false;
      }, 3500);
    }
  }

  changeName() {
    if (this.formChangeName.valid) {
      this.autoUnsubscribe(
        this.userService
          .changeName(this.id, this.formChangeName.value)
          .subscribe((res) => (this.user = res.name))
      );

      this.isNameChanged = true;

      setTimeout(() => {
        this.formChangeName.reset();
      }, 500);

      setTimeout(() => {
        this.isNameChanged = false;
      }, 3500);
    }
  }

  changeEmail() {
    if (this.formChangeEmail.valid) {
      this.autoUnsubscribe(
        this.userService
          .changeEmail(this.id, this.formChangeEmail.value)
          .subscribe()
      );

      this.isEmailChanged = true;

      setTimeout(() => {
        this.formChangeEmail.reset();
      }, 500);

      setTimeout(() => {
        this.isEmailChanged = false;
      }, 3500);
    }
  }
}
