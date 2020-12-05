import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegisterCredentials } from '../../../../modules/shared/models/RegisterCredentials';
import { GET_USER } from '../../../../modules/shared/constants';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

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
