import React from 'react'
import { selectCart } from '../../store/cart/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/cart/cart.slice'

export const ProductItem = ({ name, price, image, region, product }) => {
	const dispatch = useDispatch();
	const coffee = useSelector(selectCart);
	const isExists = coffee.some(r => r.id === product.id)
	return (
		<div
			className='flex flex-col min-w-[250px] product-bg  rounded-md w-[300px] hover:scale-[101%] transition-all duration-200 m-5'>
			<div className='flex flex-col justify-center items-center'><img width={image.width} src={image}
				alt={name} /></div>
			<h2 className='font-bold text-center text-xl text-orange-400 '>{name}</h2>
			{/*<p>{description}</p>*/}
			<div className='flex justify-between items-center px-5 pt-2'>
				<span className='text-white'>{region} :</span>
				<div className='bg-amber-400/30 py-1 px-3 rounded-md'>
					<span className='font-bold text-amber-300'>{price} $</span>
				</div>
			</div>
			<button
				className={`${isExists ? 'bg-rose-500 text-white' : ''} mx-auto bg-amber-500 py-1 drop-shadow-lg px-5 m-5 rounded-sm font-bold text-black hover:scale-[110%] transition-all duration-200 ease-in-out`}
				onClick={() => dispatch(toggleCart(product))}>{isExists ? 'Remove' : 'Add'}
			</button>
		</div>
	)
}
