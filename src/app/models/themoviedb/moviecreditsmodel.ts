import { TheMovieDbCastModel } from './moviecast.model';
import { TheMovieDbCrewModel } from './moviecrew.model';

export class TheMovieDbCreditsModel {
    id: number;
    cast: TheMovieDbCastModel[];
    crew: TheMovieDbCrewModel[];
}