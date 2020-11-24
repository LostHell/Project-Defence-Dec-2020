import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCredentials } from '../../../../modules/shared/models/RegisterCredentials';
import { Observable, throwError } from 'rxjs';
import { REGISTER_URL } from '../../../../modules/shared/constants';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

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
}
