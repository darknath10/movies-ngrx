import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromMovies from '@movies/state';
import * as moviesActions from '@movies/state/actions/movies.actions';
import { IMovieSearchResult } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngm-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchMovieForm: FormGroup;
  searchResults$: Observable<IMovieSearchResult[]>;

  constructor(private fb: FormBuilder, private store: Store<fromMovies.State>) { }

  ngOnInit() {
    this.initForm();
    this.searchResults$ = this.store.pipe(select(fromMovies.getSearchResults));
  }

  initForm(): void {
    this.searchMovieForm = this.fb.group({
      'term': ['', Validators.minLength(2)]
    });
  }

  onSubmit(): void {
    if(this.searchMovieForm.valid) {
      const query = this.searchMovieForm.value['term'];
      this.store.dispatch(new moviesActions.SearchMovies({query}));
    }
    else
      console.log('invalid');
  }

}
