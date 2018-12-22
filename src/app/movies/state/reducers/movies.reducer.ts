import { MoviesActions, MoviesActionTypes } from '../actions/movies.actions';

import { IMovieSearchResult } from '../../models';

export interface State {
  searchQuery: string;
  searchResults: IMovieSearchResult[];
  error: any;
}

export const initialState: State = {
  searchQuery: '',
  searchResults: [],
  error: null
};

export function reducer(state = initialState, action: MoviesActions): State {
  switch (action.type) {

    case MoviesActionTypes.SearchMovies:
      return { ...state, searchQuery: action.payload.query };

    case MoviesActionTypes.SearchMoviesSuccess:
      return { ...state, searchResults: action.payload.results };

    case MoviesActionTypes.SearchMoviesFailed:
      return { ...state, searchResults: [], error: action.payload.error };

    default:
      return state;
  }
}
