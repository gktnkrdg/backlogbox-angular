import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { TheMovieDbService } from '../../../services/themoviedb.service';
import Movie from '../../../models/movie.model';
import { Router } from '@angular/router';
import { TheMovieDbMovieModel } from '../../../models/themoviedb/movie.model';
import { TheMovieDbCrewModel } from 'src/app/models/themoviedb/moviecrew.model';
import { TheMovieDbGenreModel } from 'src/app/models/themoviedb/moviegenre.model';
import { MatDialog} from '@angular/material';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';


@Component({
  selector: 'app-list-employee',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

  testLint: String
  theMovieDbResult: TheMovieDbMovieModel
  theMovieDbCrewModel: TheMovieDbCrewModel
  movieList: Movie[];
  editMovies: Movie[] = [];
  name: any;
  animal: any;
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private movieService: MovieService,
    private router: Router,
    private theMovieDbService: TheMovieDbService,
    public dialog: MatDialog
  ) {

  }
  public newMovie: Movie = new Movie()




  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movieList = movies
      })
  }
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    console.log(this.clickMessage)
  }
 

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  create() {
    this.theMovieDbService.getMovieIdByTitle(this.newMovie.title).subscribe(
      data => {
        
        if (data.length>0) {
          this.theMovieDbResult = data[0];
          this.newMovie.overview = this.theMovieDbResult.overview;
          this.newMovie.title = this.newMovie.title;
          this.theMovieDbService.getMovieDetailyById(this.theMovieDbResult.id).subscribe((data) => {
            console.log(data)
            this.newMovie.tagline = data.tagline
            this.newMovie.themoviedb_rating = data.vote_average.toString()
            this.newMovie.title_en = data.title
            var genre = "";
            data.genres.forEach(_genre => {
              genre = genre + "," + _genre.name
            })
            this.newMovie.genres = genre;
            this.newMovie.release_date = new Date(data.release_date);


            this.theMovieDbService.getMovieCrewById(this.theMovieDbResult.id).subscribe((data) => {
              if (data.length > 0) {
                this.theMovieDbCrewModel = data[0];
                this.newMovie.director = this.theMovieDbCrewModel.name

              }
              this.movieService.createMovie(this.newMovie)
                .subscribe((res) => {

                  this.movieList.push(res.data)
                  this.newMovie = new Movie()
                })

            })

          })
        }
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
