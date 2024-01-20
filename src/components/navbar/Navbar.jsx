import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { CiCoffeeBean } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";

export const Navbar = () => {
	const [activeItem, setActiveItem] = useState('Home'); // Додайте стан для визначення активного елемента

	const handleItemClick = (item) => {
		setActiveItem(item);
	};

	return (
		<nav>
			<ul className='hidden md:flex space-x-10 font-normal text-xl text-white'>
				<li className={`hover:scale-[103%] hover:text-yellow-200 transition-all duration-200 ${activeItem === 'Home' ? 'underline mb-' : ''}`}>
					<a className='flex items-center' href='#main' onClick={() => handleItemClick('Home')}>
						<CiHome className='text-yellow-200 mr-0.5' />Home
					</a>
				</li>
				<li className={`hover:scale-[103%] hover:text-blue-200 transition-all duration-200 ${activeItem === 'Product' ? 'underline' : ''}`}>
					<a className='flex items-center' href='#product' onClick={() => handleItemClick('Product')}>
						<CiCoffeeBean className='text-blue-200 mr-0.5' />Product
					</a>
				</li>
			</ul>
		</nav>
	);
};