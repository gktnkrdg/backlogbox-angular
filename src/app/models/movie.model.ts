
class Movie {
    movie_id : number ;
    title: string;
    overview: string;
    genre: string;
    director:string;
    imdb_rating:string;
    image_url:string
    constructor(
        ){
            this.title = ""
            this.overview = ""
            this.genre  = "";
            this.director = "";
            this.imdb_rating = ""
            this.image_url = "";


        }
}

export default Movie;