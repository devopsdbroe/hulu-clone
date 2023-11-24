import logo from "../assets/Images/logo.png";
import { IoSearch } from "react-icons/io5";

const Header = () => {
	const menu = [
		{
			id: 1,
			name: "Home",
		},
		{
			id: 2,
			name: "Movies",
		},
		{
			id: 3,
			name: "TV",
		},
		{
			id: 4,
			name: "Sports",
		},
		{
			id: 5,
			name: "News",
		},
		{
			id: 6,
			name: "My Stuff",
		},
		{
			id: 7,
			name: "Hubs",
		},
	];

	return (
		<div className="flex justify-between items-center py-4 px-10">
			<img src={logo} alt="logo" className="w-[65px]" />
			<ul className="flex gap-8">
				{menu.map((item) => (
					<li
						key={item.id}
						className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md transition-all duration-500 ease-in-out"
					>
						{item.name}
					</li>
				))}
			</ul>
			<div className="flex gap-10">
				<IoSearch className="text-[35px] text-gray-300 hover:bg-gray-700 hover:text-white px-[3px] py-[2px] cursor-pointer rounded-md transition-all duration-500 ease-in-out" />
				<h2 className="px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full">
					R
				</h2>
			</div>
		</div>
	);
};

export default Header;
