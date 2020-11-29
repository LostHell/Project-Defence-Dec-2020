import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckUserStateService {
  constructor() {}

  getState(): boolean {
    const isActiveValue = localStorage.getItem('isActive');
    const userToken = localStorage.getItem('user-token');
    if (isActiveValue === 'false' || userToken === null) {
      return false;
    }
    return true;
  }

  setState(key: string, value: string) {
    localStorage.setItem(key, value);
    localStorage.setItem('isActive', 'true');
    this.refreshState();
  }

  removeState() {
    localStorage.removeItem('isActive');
    localStorage.removeItem('user-token');
    localStorage.removeItem('id');
    this.refreshState();
  }

  refreshState() {
    return setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
