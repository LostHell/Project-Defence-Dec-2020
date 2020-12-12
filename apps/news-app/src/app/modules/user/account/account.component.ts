import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { LocalStorageService } from '../../../core/services/auth/user-local-storage/localStorageService.service';
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
    private state: LocalStorageService,
    private userService: UserService
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
