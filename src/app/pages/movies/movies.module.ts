import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MovieListComponent }    from './movie-list/movie-list.component';
import { MoviesRoutesModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutesModule,
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent 
  ]
})
export class MoviesModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/