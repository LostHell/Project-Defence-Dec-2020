import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NavigationItem } from '../../../models/NavigationItem';
import { CheckUserStateService } from '../../../../../core/services/auth/check-user-state/check-user-state.service';
import { LoginService } from '../../../../../core/services/auth/login/login.service';
import { AutoUnsubscribe } from '../../../../../core/classes/AutoUnsubscribe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends AutoUnsubscribe {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public sidenavClose = new EventEmitter();

  @Input() navigation: NavigationItem[] = [];

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private state: CheckUserStateService,
    private loginService: LoginService
  ) {
    super();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onCloseSidenav() {
    this.sidenavClose.emit();
  }

  logout() {
    this.state.removeState();
    this.autoUnsubscribe(this.loginService.userLogout().subscribe());
  }
}