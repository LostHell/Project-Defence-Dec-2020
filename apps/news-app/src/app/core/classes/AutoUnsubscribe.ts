import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AutoUnsubscribe {
  private subscriptions: Subscription[] = [];

  autoUnsubscribe(data) {
    this.subscriptions.push(data);
  }

  ngOnDestroy() {
    if (this.subscriptions !== undefined) {
      for (const subscription of this.subscriptions) {
        subscription.unsubscribe();
      }
    }
  }
}
