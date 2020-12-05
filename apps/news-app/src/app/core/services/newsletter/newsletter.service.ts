import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsletterCredentials } from '../../../modules/shared/models/NewsletterCredentials';
import { NEWSLETTER_URL } from '../../../modules/shared/constants';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  constructor(private http: HttpClient) {}

  subscribeToNewsletter(
    data: NewsletterCredentials
  ): Observable<NewsletterCredentials> {
    return this.http
      .post<NewsletterCredentials>(NEWSLETTER_URL, data)
      .pipe(catchError((error) => of(error.json)));
  }
}
