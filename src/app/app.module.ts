import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TheMovieDbService } from './services/themoviedb.service';
import { MoviesModule } from './pages/movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,
    MoviesModule
  ],
  providers: [MovieService,TheMovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
