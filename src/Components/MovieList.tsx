import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = ({ genreId }: any) => {
	const elementRef = useRef(null);
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

	const slideRight = (element: any) => {
		element.scrollLeft += 500;
	};

	const slideLeft = (element: any) => {
		element.scrollLeft -= 500;
	};

	return (
		<div className="flex items-center">
			<IoChevronBackOutline
				onClick={() => slideLeft(elementRef.current)}
				className="text-[40px] text-white bg-black p-2 z-10 cursor-pointer mb-[120px] rounded-full"
			/>
			<div
				id="slider"
				ref={elementRef}
				className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16 ml-[-20px] mr-[-20px]"
			>
				{movieList.map(
					(item: any, index: any) => index < 7 && <MovieCard movie={item} />
				)}
			</div>
			<IoChevronForwardOutline
				onClick={() => slideRight(elementRef.current)}
				className="text-[40px] text-white bg-black p-2 z-10 cursor-pointer mb-[120px] rounded-full"
			/>
		</div>
	);
};

export default MovieList;
