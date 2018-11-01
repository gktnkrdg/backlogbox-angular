import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


import MovieModel  from '../../../models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-Movie-detail',
  templateUrl: './Movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  movie:  MovieModel;
  movie_id :number
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      console.log(paramsId)
    this.movie_id = paramsId.id ;
    this.service.getMovieById(this.movie_id).subscribe(movie=> {
      console.log(movie)
      this.movie = movie;
     })
    });
   

    // this.Movie$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getMovie(params.get('id')))
    // );
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/