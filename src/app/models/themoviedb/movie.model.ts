import { TheMovieDbGenreModel } from './moviegenre.model';

export class TheMovieDbMovieModel {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: TheMovieDbGenreModel;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

