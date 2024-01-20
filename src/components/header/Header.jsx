import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/cart.slice';
import { PiShoppingCartFill } from "react-icons/pi";
import { ModalCart } from "../modal/ModalCart";
import { Navbar } from "../navbar/Navbar";
import { IoMdMenu } from "react-icons/io";
import BurgerMenu from '../navbar/BurgerMenu';

export const Header = () => {
	const [modalActive, setModalActive] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const count = useSelector(selectCart);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const shouldChangeColor = scrollTop > 0;

			setIsScrolled(shouldChangeColor);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<header
				className={`fixed top-0 right-0 w-full flex justify-between items-center h-16 px-2 md:px-20 z-10 ${isScrolled ? 'bg-black/70 z-10' : 'bg-black/10'
					}`}
			>
				<div className='flex items-center ml-5'>
					<a className='flex hover:scale-[105%] transition-all duration-200' href="/">
						<img
							width={27}
							src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/owl-256.png"
							alt=""
						/>

						<h1 className='text-2xl font-bold ml-1 text-white'>Coffee Shop</h1>
					</a>
				</div>
				<div>
					<Navbar />
				</div>
				<div
					className='cursor-pointer mr-6 hover:scale-110 transition-all duration-300 relative'
					onClick={() => setModalActive(true)}
				>
					<PiShoppingCartFill className='text-white text-[1.5rem]  transition-all duration-200' />
					<div
						className='absolute flex justify-center items-center bg-white w-5 h-5 rounded-full transform translate-x-4 -translate-y-3 transition-all duration-300'>
						<span className='text-xl text-rose-700 font-bold w-5 text-center'>{count.length}</span>
					</div>
				</div>
				<div className="flex sm:hidden cursor-pointer text-conduit-100 text-2xl mr-3 z-40" onClick={toggleMenu}>
					<IoMdMenu className='text-white' />
				</div>
				<BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
			</header >
			{modalActive && <ModalCart active={modalActive} setActive={setModalActive} />
			}

		</>
	);
};
