import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TheMovieDbService } from './services/themoviedb.service';
import { MoviesModule } from './pages/movies/movies.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './directives/modal.component';
@NgModule({
<<<<<<< HEAD
=======
  declarations: [
    AppComponent,
    PageNotFoundComponent,HeaderComponent,DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
>>>>>>> 320f0d421c6c9a06be489d233a995af9e7efd84c
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    MoviesModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,HeaderComponent,
    
  ],

  providers: [MovieService,TheMovieDbService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {

  }
}