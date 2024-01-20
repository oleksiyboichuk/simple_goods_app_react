import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "../../wrapper/Container";
import Marquee from "react-fast-marquee";

export const Banner = () => {
	return (
		<div id='main' className='my-block'>
			<Container>
				<div className='flex flex-col justify-between text-white text-2xl py-28 md:py-40'>
					<div className='flex flex-col md:flex-row'>
						<div className='flex justify-center items-center order-1 w-full  md:w-1/2 px-10'>

							<div className='leading-10 text-3xl text-whit pb-16'>
								<div className="overflow-hidden w-full mb-5">
									<Marquee speed={30}>
										<div>
											<p className="inline-block flex-nowrap font-bold text-4xl text-orange-400 mr-1">Welcome to Night Coffee Store!</p>
										</div>
									</Marquee>
								</div>
								<p className='text-2xl md:text-3xl' >Hi! Visit us and immerse yourself in
									an atmosphere where every cup is a little fairy tale, and every sip is a tireless
									journey
									taste Discover the best coffee varieties and sophisticated coffee drinks that are made
									our <span className='italic font-semibold text-rose-500' >Coffee Shop</span> is a special place for real coffee connoisseurs.</p>
							</div>
						</div>
						<div className='hidden w-full md:w-1/2 order-2 mx-auto	md:block'>
							<img className='block mx-auto w-[90%] animate-pulse-banner' src="/image/owl.png" alt="" />
						</div>
					</div>
					<div
						className='absolute bottom-0 right-[30%] md:right-[45%] pb-10 flex flex-col justify-center items-center mx-auto pt-52 animate-pulse transition-all duration-200 ease-in-out'>
						<a className='text-3xl font-extralight' href="#product">Order Now!</a>
						<IoIosArrowDown className='text-4xl ' />
					</div>
				</div>


			</Container>
		</div>

	)
}