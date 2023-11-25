import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const Hero = () => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const getPopularMovies = () => {
			GlobalApi.getPopularMovies.then((res: any) => {
				const result = res.data.results;
				setMovieList(result);
			});
		};

		getPopularMovies();
	}, []);

	return <div>Hero</div>;
};

export default Hero;
