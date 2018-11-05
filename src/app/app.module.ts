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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSidenavContainer,MATERIAL_SANITY_CHECKS } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { DialogComponent } from './components/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,HeaderComponent,DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    MoviesModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [MovieService,TheMovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {

  }
}