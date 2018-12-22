import { IMovieSearchResult } from './movie-search-result.interface';

export interface IMovie extends IMovieSearchResult {
  belongs_to_collection: {
    id: number;
    backdrop_path: string;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string
  }[];
  production_countries: {
    iso_639_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
}