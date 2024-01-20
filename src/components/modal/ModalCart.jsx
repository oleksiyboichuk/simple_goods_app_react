import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectCart,
	cartminus,
	pluscart

} from '../../store/cart/cart.slice';
import { ProductCart } from "../product-cart/ProductCart";

export const ModalCart = ({ active, setActive }) => {
	const dispatch = useDispatch();
	const product = useSelector(selectCart);
	console.log(product.length)

	let total = product.reduce((acc, item) => acc += item.count * item.price, 0).toFixed(2);

	let clickHandler = (event) => {
		event.preventDefault();
		let t = event.target;
		if (t.classList.contains('cart-plus')) {
			dispatch(pluscart(t.getAttribute('data-key')));
		}
		if (t.classList.contains('cart-minus')) {
			dispatch(cartminus(t.getAttribute('data-key')));
		}

	}

	let isCartEmpty = product.length > 0;

	return (
		<div
			className={`flex justify-end items-center fixed top-0 left-0 h-[100%] w-full bg-black/50 z-20 ${active ? '' : 'hidden'}`}
		>
			<div className='relative p-5 bg-white/70 backdrop-blur-lg h-full w-[500px] overflow-y-auto z-20'>
				<div
					className='flex flex-col flex-wrap fixed right-5 top-4 text-2xl font-bold text-rose-400 cursor-pointer hover:text-rose-500 hover:scale-[115%] transition-all duration-300 ease-in-out z-20'
					onClick={() => setActive(false)}
				>
					[X]
				</div>
				{isCartEmpty ? (<table className='flex justify-between pt-20 z-20' onClick={clickHandler}>
					<tbody>
						<tr>
							<th>[Image]</th>
							<th>[Name]</th>
							<th className='pr-4'>[Cost]</th>
							<th>[Count]</th>
							<th>[All costs]</th>
						</tr>
						{product.map((item, index) => <ProductCart key={item._id} articul={item._id} count={item.count}
							name={item.name}
							price={item.price}
							description={item.description} image={item.image_url}
							region={item.region}
							weight={item.weight} product={item} />)}
						<tr>
							<td className='flex flex-row flex-nowrap font-bold text-xl pt-5'>Total:<span
								className='flex flex-row flex-nowrap text-rose-500 pl-1'>{total}$</span></td>
						</tr>
					</tbody>
				</table>) : (<p className='pt-20 text-center text-2xl text-black font-bold'>Empty...</p>)}
				{isCartEmpty && (<div className='flex justify-center items-center mx-auto relative left-0 p-10'>
					<button
						className='text-2xl bg-amber-500 py-2 px-4 font-bold rounded-md hover:scale-[105%] hover:bg-rose-500 hover:text-white transition-all duration-500 ease-in-out z-20'>Order
						now!
					</button>
				</div>)}
			</div>
		</div >
	);
};