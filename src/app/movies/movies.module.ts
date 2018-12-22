import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MaterialSharedModule } from '../material-shared.module';

import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent } from './movies.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

/* --- NgRx & State Related --- */
import { StoreModule } from '@ngrx/store';
import * as fromMovies from './state/reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/effects/movies.effects';

@NgModule({
  declarations: [MoviesComponent, MovieSearchComponent],
  imports: [
    SharedModule,
    MaterialSharedModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', fromMovies.reducer),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesModule { }
