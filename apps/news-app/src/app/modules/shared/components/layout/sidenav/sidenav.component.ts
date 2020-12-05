import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NavigationItem } from '../../../models/NavigationItem';
import { LocalStorageServiceService } from '../../../../../core/services/auth/check-user-state/LocalStorageService.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() sidenavClose = new EventEmitter();
  @Input() navigation: NavigationItem[] = [];

  isLoggedIn: boolean = this.state.getState();

  constructor(private state: LocalStorageServiceService) {}

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  logout() {
    this.state.removeState();
  }
}
