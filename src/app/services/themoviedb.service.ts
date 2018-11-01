import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Response, RequestOptions, Jsonp} from '@angular/http';
import { Injectable } from '@angular/core';
import { TheMovieDbDetailsModel } from '../models/themoviedb/moviedetails.model';
import { TheMovieDbMovieModel } from '../models/themoviedb/movie.model';
import { TheMovieDbCreditsModel } from '../models/themoviedb/moviecreditsmodel';
import { TheMovieDbCrewModel } from '../models/themoviedb/moviecrew.model';

@Injectable()
export class TheMovieDbService {
  url_discover = 'https://api.themoviedb.org/3/discover/movie';
  url_search = 'https://api.themoviedb.org/3/search/movie';
  url_movie = 'https://api.themoviedb.org/3/movie';
  url_person = 'https://api.themoviedb.org/3/person';
  url_genre = 'https://api.themoviedb.org/3/genre';
  api_main_url='https://api.themoviedb.org/3/'
  private api_key = '302fdefb6b47bb339eb874a9cae37a22';
  get_movie_by_query='search/movie?'
  get_movie_detail_by_id='/movie/'

  api_execute_url = '';
  headers: any;
  options: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Credentials" :  "true", 
      "Access-Control-Allow-Headers" :  "Access-Control-Allow-Headers,Access-Control-Allow-Credentials, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization" 
    })
  };
  constructor(
    private http: HttpClient
  ) { 

  
  }

  //Read todo, takes no arguments
  getMovieIdByTitle(title:string):Observable<TheMovieDbMovieModel>{
    this.api_execute_url= `${this.url_search}?api_key=${this.api_key}&query=${title}&language=tr-TR`;
    console.log(this.api_execute_url)
    return this.http.get(this.api_execute_url).pipe(map(res =>res['results']));
  }
  getMovieDetailyById(id:number) :Observable<TheMovieDbDetailsModel>{
    this.api_execute_url= `${this.url_movie}/${id}?api_key=${this.api_key}&language=tr-TR`;
    console.log(this.api_execute_url)
    return this.http.jsonp(this.api_execute_url,'callback').pipe(map(res => res['results']  ));
  } 
  getMovieCrewById(id:number):Observable<TheMovieDbCrewModel>{
   
    this.api_execute_url= `${this.url_movie}/${id}/credits?api_key=${this.api_key}&language=tr-TR`;
    
 
    return this.http.jsonp(this.api_execute_url,'callback').pipe(map(res =>res['crew'] ));
  }
  
}