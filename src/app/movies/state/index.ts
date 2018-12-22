import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '@state/index';
import * as fromMovies from './reducers/movies.reducer';

export interface State extends fromRoot.State {
  movies: fromMovies.State;
}

const getMoviesFeatureState = createFeatureSelector<fromMovies.State>('movies');

export const getSearchQuery = createSelector(getMoviesFeatureState, state => state.searchQuery);

export const getSearchResults = createSelector(getMoviesFeatureState, state => state.searchResults);

export const getError = createSelector(getMoviesFeatureState, state => state.error);