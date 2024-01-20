import React from 'react'

export const ProductCart = ({ articul, name, count, price, image, product }) => {
	console.log(product)
	return (
		<tr className='text-center'>
			<td><img width={100} src={image} alt={name} className="cart-img" /></td>
			<td className=''>{name}</td>
			<td>{price}</td>
			<td>{count}</td>
			<td>{count * price}</td>
			<td>
				<button
					className="cart-plus flex justify-center items-center bg-emerald-400 text-center w-[30px] text-2xl rounded-md hover:bg-emerald-500 hover:scale-[110%] transition-all duration-200 ease-in-out"
					data-key={articul}>+
				</button>
			</td>
			<td>
				<button
					className="cart-minus flex justify-center items-center bg-rose-400 text-center w-[30px] text-2xl rounded-md hover:bg-rose-500 hover:scale-[110%] transition-all duration-200 ease-in-out"
					data-key={articul}>-
				</button>
			</td>
		</tr >
	)
}
