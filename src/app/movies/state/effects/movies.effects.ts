import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { TmdbService } from '@movies/services/tmdb.service';

import { MoviesActionTypes } from '../actions/movies.actions';
import * as moviesActions from '../actions/movies.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class MoviesEffects {

  constructor(private actions$: Actions, private tmdbSvc: TmdbService) {}
  
  @Effect()
  searchMovies$ = this.actions$.pipe(
    ofType<moviesActions.SearchMovies>(MoviesActionTypes.SearchMovies),
    switchMap(action => this.tmdbSvc.searchMovies(action.payload.query)
      .pipe(
        map(results => new moviesActions.SearchMoviesSuccess({results})),
        catchError(err => of(new moviesActions.SearchMoviesFailed(err)))
      ))
  );

}
