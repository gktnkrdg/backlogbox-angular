import { Component, OnInit} from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { TheMovieDbService } from '../../../services/themoviedb.service';
import Movie from '../../../models/movie.model';
import { Router } from '@angular/router';
import { TheMovieDbMovieModel } from '../../../models/themoviedb/movie.model';


@Component({
  selector: 'app-list-employee',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit{
  
  testLint : String
  theMovieDbResult: TheMovieDbMovieModel
  movieList: Movie[];
  editMovies: Movie[] = [];
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private movieService: MovieService,
    private router: Router,
    private theMovieDbService: TheMovieDbService
  ) {
   
   }
   public newMovie: Movie = new Movie()




  ngOnInit(): void {
  this.movieService.getMovies()
    .subscribe(movies => {
      this.movieList = movies
    })
  }
 
  create() {
    this.theMovieDbService.getMovieIdByTitle(this.newMovie.title).subscribe(
      data => {
        console.log(data)
        this.theMovieDbResult = data[0];
        this.newMovie.overview = this.theMovieDbResult.overview;
        this.newMovie.title = this.theMovieDbResult.title;
      console.log(this.theMovieDbResult)
      
        this.theMovieDbService.getMovieCreditsById(this.theMovieDbResult.id).subscribe((data) => {
            this.movieService.createMovie(this.newMovie)
            .subscribe((res) => {
            this.movieList.push(res.data)
            this.newMovie = new Movie()
        })
      })
    })
  }

  editMovie(movie: Movie) {
   
    if (this.movieList.includes(movie)) {
      if (!this.editMovies.includes(movie)) {
        this.editMovies.push(movie)
      } else {
        this.editMovies.splice(this.editMovies.indexOf(movie), 1)
        this.movieService.editMovie(movie).subscribe(res => {
        
        }, err => {
          this.editMovie(movie)
        
        })
      }
    }
  }

  doneMovie(movie: Movie) {
    
    this.movieService.editMovie(movie).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editMovie(movie)
      console.error('Update Unsuccesful')
    })
  }

  submitMovie(event, movie: Movie) {
    if (event.keyCode == 13) {
      this.editMovie(movie)
    }
  }

  deleteMovie(movie: Movie) {
    console.log(movie.movie_id)
    this.movieService.deleteMovie(movie.movie_id).subscribe(res => {
      this.movieList.splice(this.movieList.indexOf(movie), 1);
    })
  }
  title = 'app';
}
