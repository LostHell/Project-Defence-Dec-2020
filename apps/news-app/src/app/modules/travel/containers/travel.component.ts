import { Component, OnInit } from '@angular/core';
import { CheckUserStateService } from '../../../core/services/auth/check-user-state/check-user-state.service';
import { Travel } from '../../shared/models/Travel';
import { AutoUnsubscribe } from '../../../core/classes/AutoUnsubscribe';
import { TravelService } from '../../../core/services/travel/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent extends AutoUnsubscribe implements OnInit {
  public destinations: Travel[] = [];

  isLoggedIn: boolean = this.state.getState();

  constructor(
    private state: CheckUserStateService,
    private travelService: TravelService
  ) {
    super();
  }

  ngOnInit() {
    this.autoUnsubscribe(
      this.travelService
        .getDestinations()
        .subscribe((data) => (this.destinations = data))
    );
  }
}
