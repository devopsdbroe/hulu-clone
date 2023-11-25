import { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
	IoChevronDownOutline,
	IoChevronUpOutline,
	IoSearch,
} from "react-icons/io5";

const Header = () => {
	const [toggle, setToggle] = useState(false);

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
			<ul className="hidden md:flex gap-8">
				{menu.map((item) => (
					<li
						key={item.id}
						className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md transition-all duration-500 ease-in-out"
					>
						{item.name}
					</li>
				))}
			</ul>
			<div onClick={() => setToggle(!toggle)} className="md:hidden">
				<h2 className="text-white font-medium flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-md cursor-pointer">
					Home
					{!toggle ? (
						<IoChevronDownOutline className="mt-1" />
					) : (
						<IoChevronUpOutline className="mt-1" />
					)}
				</h2>
				{toggle && (
					<ul className="absolute bg-gray-700 w-[200px] text-center mt-3 right-0 left-0 mx-auto rounded-md px-3">
						{menu.map((item) => (
							<li
								key={item.id}
								className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md transition-all duration-500 ease-in-out"
							>
								{item.name}
							</li>
						))}
					</ul>
				)}
			</div>
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
