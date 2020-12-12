import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { AccessGuard } from '../../core/guards/access.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AccessGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AccessGuard],
  },
  { path: 'account', component: AccountComponent, canActivate: [AccessGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
