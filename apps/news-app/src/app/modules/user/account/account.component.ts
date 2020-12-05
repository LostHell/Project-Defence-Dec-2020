import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';
import { UserService } from '../../../core/services/auth/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent extends AutoUnsubscribe implements OnInit {
  isAdmin = false;

  isLoggedIn: boolean = this.state.getState();
  id: string = localStorage.getItem('id');

  constructor(
    private state: CheckUserStateService,
    private userService: UserService,
  ) {
    super();
  }

  ngOnInit() {
    if (this.id !== null) {
      this.autoUnsubscribe(
        this.userService.getUser(this.id).subscribe((res) => {
          if (res.role === 'admin') {
            this.isAdmin = true;
          }
        })
      );
    }
  }
}
