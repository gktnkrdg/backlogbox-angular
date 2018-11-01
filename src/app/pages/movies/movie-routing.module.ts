import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  MovieListComponent}    from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const MoviesRoutes: Routes = [
  { path: 'movies',  component: MovieListComponent, data: { animation: 'movies' } },
  { path: 'movie/:id', component: MovieDetailComponent, data: { animation: 'movie' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(MoviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutesModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/