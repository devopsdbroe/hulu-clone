import genre from "../Constant/GenresList";
import { IoChevronForwardSharp } from "react-icons/io5";
import MovieList from "./MovieList";

const GenreMovieList = () => {
	return (
		<div className="mt-24 py-5 px-10 md:px-20">
			{genre.map(
				(item: any, index) =>
					index <= 4 && (
						<div>
							<h2 className="text-white text-[20px] font-bold">
								{item.name}
								<span className="font-normal text-[16px] cursor-pointer text-gray-400 float-right flex">
									View All <IoChevronForwardSharp className="text-white ml-1" />
								</span>
							</h2>
							<MovieList genreId={item.id} />
						</div>
					)
			)}
		</div>
	);
};

export default GenreMovieList;
