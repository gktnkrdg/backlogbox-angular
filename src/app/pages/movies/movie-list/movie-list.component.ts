import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { TheMovieDbService } from '../../../services/themoviedb.service';
import Movie from '../../../models/movie.model';
import { Router } from '@angular/router';
import { TheMovieDbMovieModel } from '../../../models/themoviedb/movie.model';
import { TheMovieDbCrewModel } from 'src/app/models/themoviedb/moviecrew.model';
import { TheMovieDbGenreModel } from 'src/app/models/themoviedb/moviegenre.model';
import { MatDialog } from '@angular/material';
import { ModalService } from '../../../services/modal.service';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

  testLint: String
  theMovieDbResult: TheMovieDbMovieModel
  theMovieDbResults: TheMovieDbMovieModel[] = [];
  theMovieDbCrewModel: TheMovieDbCrewModel
  movieList: Movie[];
  editMovies: Movie[] = [];
  name: any;
  animal: any;
  constructor(

    private movieService: MovieService,
    private router: Router,
    private theMovieDbService: TheMovieDbService,
    public dialog: MatDialog,
    private modalService: ModalService
  ) {

  }
  public newMovie: Movie = new Movie()
  display: boolean = false;



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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  searchMovie() {
    this.theMovieDbService.getMovieIdByTitle(this.newMovie.title).subscribe(
      data => {
        this.theMovieDbResults  = []
        if (data.length > 0) {
          // this.theMovieDbResult = data[0];
          this.theMovieDbResults = data;
        }
      })
  }

  private createMovie(index : number) {
    this.theMovieDbResult = this.theMovieDbResults[index] 
    console.log(this.theMovieDbResult)
    this.newMovie.overview = this.theMovieDbResult.overview;
    this.newMovie.title = this.theMovieDbResult.title;
    this.theMovieDbService.getMovieDetailyById(this.theMovieDbResult.id).subscribe((data) => {
      console.log("test ",data.tagline )
     
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
       
          this.theMovieDbCrewModel = data[0];
          this.newMovie.director = this.theMovieDbCrewModel.name
       
        this.movieService.createMovie(this.newMovie)
        .subscribe((res) => {
          this.movieList.push(res.data);
          this.newMovie = new Movie();
          this.theMovieDbResults = []
          this.modalService.open('custom-modal-2')
         this.modalService.changeType('custom-modal-2')
        });
      })
     
     

    })
  
  }
  showDialog() {
    this.display = true;
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
