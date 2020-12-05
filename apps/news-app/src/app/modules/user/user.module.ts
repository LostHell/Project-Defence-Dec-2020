import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { MaterialModule } from '../material/material.module';
import { UserAccountComponent } from './account/containers/user-account/user-account.component';
import { AdminAccountComponent } from './account/containers/admin-account/admin-account.component';
import { FormComponent } from './account/components/form/form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    UserAccountComponent,
    AdminAccountComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class UserModule {}
