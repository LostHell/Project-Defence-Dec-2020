import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LOGIN_URL, LOGOUT_URL } from '../../../../modules/shared/constants';
import { catchError } from 'rxjs/operators';
import { LoginCredentials } from '../../../../modules/shared/models/LoginCredentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  userLogin(data: LoginCredentials): Observable<LoginCredentials> {
    return this.http.post<LoginCredentials>(LOGIN_URL, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  userLogout(): Observable<LoginCredentials> {
    return this.http.get<LoginCredentials>(LOGOUT_URL).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
