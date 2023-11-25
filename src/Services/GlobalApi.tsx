import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const movieByGenreBaseURL =
	"https://api.themoviedb.org/3/discover/movie?api_key=";
const api_key = import.meta.env.VITE_MOVIEDB_API_KEY;

const getPopularMovies = axios.get(movieBaseURL + api_key);

const getMovieByGenreId = (id: number) =>
	axios.get(movieByGenreBaseURL + api_key + "&with_genres=" + id);

export default { getPopularMovies, getMovieByGenreId };
