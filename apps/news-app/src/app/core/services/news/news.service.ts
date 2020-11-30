import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../../../modules/shared/models/News';
import { Observable, of } from 'rxjs';
import { FOOTBALL, NEWS } from '../../../modules/shared/constants';
import { catchError } from 'rxjs/operators';
import { FootballResult } from '../../../modules/shared/models/Football-Result';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http
      .get<News[]>(NEWS)
      .pipe(catchError((error) => of(error.json)));
  }

  getNewsById(id: string): Observable<News> {
    return this.http
      .get<News>(NEWS + `/${id}`)
      .pipe(catchError((error) => of(error.json)));
  }

  getFootballResult(): Observable<FootballResult[]> {
    return this.http
      .get<FootballResult[]>(FOOTBALL)
      .pipe(catchError((error) => of(error.json)));
  }

  createNews(item: News): Observable<News> {
    return this.http
      .post<News>(NEWS, item)
      .pipe(catchError((error) => of(error.json)));
  }

  createFootballResult(data: FootballResult): Observable<FootballResult> {
    return this.http
      .post<FootballResult>(FOOTBALL, data)
      .pipe(catchError((error) => of(error.json)));
  }

  updateNews(newsId: string, item: News): Observable<News> {
    return this.http
      .put<News>(NEWS + `/${newsId}`, item)
      .pipe(catchError((error) => of(error.json)));
  }

  deleteNews(objectId: string): Observable<News> {
    return this.http
      .delete<News>(NEWS + `/${objectId}`)
      .pipe(catchError((error) => of(error.json)));
  }
}
