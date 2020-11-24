import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Travel } from '../../../modules/shared/models/Travel';
import { Observable, of } from 'rxjs';
import { TRAVEL } from '../../../modules/shared/constants';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Travel[]> {
    return this.http
      .get<Travel[]>(TRAVEL)
      .pipe(catchError((error) => of(error.json)));
  }
}
