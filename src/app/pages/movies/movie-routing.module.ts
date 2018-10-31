import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  MovieListComponent}    from './movie-list/movie-list.component';


const MoviesRoutes: Routes = [
  { path: 'moviees', redirectTo: '/supermoviees' },
  { path: 'movie/:id', redirectTo: '/supermovie/:id' },
  { path: 'supermoviees',  component: MovieListComponent, data: { animation: 'moviees' } }
  // { path: 'supermovie/:id', component: movieDetailComponent, data: { animation: 'movie' } }
];

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