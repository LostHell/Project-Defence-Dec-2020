import { Injectable, Provider } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const userToken = localStorage.getItem('user-token');

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      (userToken !== null && request.url.includes('/data/Users')) ||
      request.url.includes('/data/footballResult') ||
      request.url.includes('/data/news') ||
      request.url.includes('/users/logout')
    ) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'user-token': userToken,
        }),
      });
    }

    return next.handle(request);
  }
}

export const TokenInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};
