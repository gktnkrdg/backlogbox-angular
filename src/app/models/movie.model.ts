
class Movie {
    movie_id : number ;
    title: string;
    overview: string;
    genres: string;
    director:string;
    imdb_rating:string;
    image_url:string;
    release_date:Date;
    title_en:string;
    themoviedb_rating:string;
    tagline:string;


    constructor(
        ){
            this.title = ""
            this.overview = ""
            this.genres  = "";
            this.director = "";
            this.imdb_rating = ""
            this.image_url = "";
            this.release_date =  new Date();
            this.title_en = "";
            this.themoviedb_rating = "";
            this.tagline = "";


        }
}

export default Movie;