import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MovieListComponent }    from './movie-list/movie-list.component';
import { MoviesRoutesModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MaterialModule } from '../../material.module';
import {ModalComponent} from '../../directives/modal.component'
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutesModule,
    MaterialModule,
    RatingModule,
    DialogModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent ,
    ModalComponent
  ]
})
export class MoviesModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/