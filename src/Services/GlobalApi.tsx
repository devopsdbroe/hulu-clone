import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3/movie";
const api_key = import.meta.env.VITE_MOVIEDB_API_KEY;

const getPopularMovies = axios.get(
	movieBaseURL + "/popular?api_key=" + api_key
);

const getMovieByGenreId = (id: number) =>
	axios.get(movieBaseURL + "&with_genres" + id);

export default { getPopularMovies, getMovieByGenreId };
