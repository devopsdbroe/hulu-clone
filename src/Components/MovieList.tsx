import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }: any) => {
	const [movieList, setMovieList] = useState<any>([]);

	useEffect(() => {
		const getMovieListByGenreId = () => {
			GlobalApi.getMovieByGenreId(genreId).then((res: any) => {
				const result = res.data.results;
				setMovieList(result);
			});
		};

		getMovieListByGenreId();
	}, []);

	return (
		<div>
			<div className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16">
				{movieList.map(
					(item: any, index: any) => index < 7 && <MovieCard movie={item} />
				)}
			</div>
		</div>
	);
};

export default MovieList;
