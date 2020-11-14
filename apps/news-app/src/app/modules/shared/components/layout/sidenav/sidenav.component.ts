import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NavigationItem } from '../../../models/NavigationItem';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() sidenavClose = new EventEmitter();
  @Input() navigation: NavigationItem[] = [];

  constructor() {}

  onSidenavClose() {
    this.sidenavClose.emit();
  }
}
