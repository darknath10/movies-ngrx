import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IMovieSearchResult, IMovie, ITmdbResponsePaging } from '../models';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'd1dd5a7fd77c933e088112709eb711e7';

  constructor(private http: HttpClient) {}

  searchMovies(term: string): Observable<IMovieSearchResult[]> {
    const url = `${this.baseUrl}/search/movie`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('query', term);

    return this.http.get<ITmdbResponsePaging<IMovieSearchResult>>(url, { params })
      .pipe(
        map(res => res.results),
        catchError(this.handleError)
      );
  }

  getMovieDetails(id: number): Observable<IMovie> {
    const url = `${this.baseUrl}/movie/${id}`;
    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get<IMovie>(url, { params });
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}