import Movie from '../models/movie.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class MovieService {

  movieUrl = 'https://www.backlogbox.com/api/movies';

  constructor(
    private http: HttpClient
  ) { }
  createMovie(movie: Movie): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.movieUrl}`, movie);
  }

  //Read todo, takes  no arguments
  getMovies(): Observable<Movie[]>{

    return this.http.get(this.movieUrl)
    .pipe(
      map(res => res["data"] as Movie[] ) // or any other operator
    )
   

  }

  //Update todo, takes a ToDo Object as parameter
  editMovie(movie:Movie){
    let editUrl = `${this.movieUrl}`
    return this.http.put(editUrl, movie);
  }

  deleteMovie(id:number):any{
    //Delete the object by the id
    let deleteUrl = `${this.movieUrl}/${id}`
    return this.http.delete(deleteUrl).pipe(map(res  => {
      return res;
    }))
  }
  getMovieById(id:number): Observable<Movie>{
    var getUrl = `${this.movieUrl}/${id}`
    return this.http.get(getUrl)
    .pipe(
      map(res => res["data"] as Movie) // or any other operator
    )
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}