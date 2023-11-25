import GenreMovieList from "../Components/GenreMovieList";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const Home = () => {
	return (
		<div>
			<Header />
			<Hero />
			<GenreMovieList />
		</div>
	);
};

export default Home;
