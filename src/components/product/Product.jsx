import React from 'react'
import { ProductItem } from "../product-item/ProductItem";
import { useGetProductsQuery } from "../../store/api/api";
import { Container } from "../../wrapper/Container";

export const Product = () => {
	const { isLoading, data } = useGetProductsQuery()
	if (isLoading) {
		return <p className='text-2xl text-black font-bold text-center pt-20'>Loading...</p>;
	}

	if (!data) {
		return <p className='text-2xl text-black font-bold text-center pt-20'>No products available...</p>;
	}
	return (
		<Container>
			<h1 className='text-3xl font-bold text-center mt-10'>Our products: </h1>
			<div id='product'
				className='flex flex-row m-10 items-center overflow-hidden slider-bg rounded-md overflow-x-auto border-black/50'>
				{data.map(item => <ProductItem key={item._id} name={item.name} price={item.price}
					description={item.description} image={item.image_url}
					region={item.region}
					weight={item.weight} product={item} />)}
			</div>
		</Container>
	)
}
