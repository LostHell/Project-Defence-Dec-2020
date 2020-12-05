import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { RegisterCredentials } from '../../../../modules/shared/models/RegisterCredentials';
import {
  GET_USER,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
} from '../../../../modules/shared/constants';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials } from '../../../../modules/shared/models/LoginCredentials';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Login
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

  // Register
  userRegister(data: RegisterCredentials): Observable<RegisterCredentials> {
    if (data.role === undefined) {
      data.role = 'user';
    }
    return this.http.post<RegisterCredentials>(REGISTER_URL, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  // Other
  getUser(id: string): Observable<RegisterCredentials> {
    return this.http.get<RegisterCredentials>(GET_USER + `/${id}`);
  }

  changePassword(
    id: string,
    password: string
  ): Observable<RegisterCredentials> {
    return this.http
      .put<RegisterCredentials>(GET_USER + `/${id}`, password)
      .pipe(catchError((error) => of(error.json)));
  }

  changeName(id: string, fullName: string): Observable<RegisterCredentials> {
    return this.http
      .put<RegisterCredentials>(GET_USER + `/${id}`, fullName)
      .pipe(catchError((error) => of(error.json)));
  }

  changeEmail(id: string, email: string): Observable<RegisterCredentials> {
    return this.http
      .put<RegisterCredentials>(GET_USER + `/${id}`, email)
      .pipe(catchError((error) => of(error.json)));
  }
}
