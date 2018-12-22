import { Action } from '@ngrx/store';

import { IMovieSearchResult } from '@movies/models';

export enum MoviesActionTypes {
  SearchMovies = '[TMDB-API] Search Movies',
  SearchMoviesSuccess = '[TMDB-API] Search Movies Success',
  SearchMoviesFailed = '[TMDB-API] Search Movies Failed'
}

export class SearchMovies implements Action {
  readonly type = MoviesActionTypes.SearchMovies;

  constructor(public payload: {query: string}) {}
}

export class SearchMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.SearchMoviesSuccess;

  constructor(public payload: {results: IMovieSearchResult[]}) {}
}

export class SearchMoviesFailed implements Action {
  readonly type = MoviesActionTypes.SearchMoviesFailed;

  constructor(public payload: {error: any}) {}
}

export type MoviesActions = SearchMovies | SearchMoviesSuccess | SearchMoviesFailed;
