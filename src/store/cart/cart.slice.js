import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart: (state, action) => {
			const product = action.payload;
			const index = state.findIndex(item => item.id === product.id);

			if (index !== -1) {
				if (state[index].count > 1) {
					state[index].count -= 1;
				} else {
					state.splice(index, 1);
				}
			} else {
				state.push({...product, count: 1}); // Додаємо новий товар з кількістю 1
			}
		},
		pluscart: (state, action) => {
			const productId = action.payload;
			const index = state.findIndex(item => item._id === productId);

			if (index !== -1) {
				state[index].count += 1;
			}
		},
		cartminus: (state, action) => {
			const productId = action.payload;
			const index = state.findIndex(item => item._id === productId);

			if (index !== -1) {
				if (state[index].count > 1) {
					state[index].count -= 1;
				} else {
					// Якщо кількість менше або дорівнює 1, видаляємо товар з корзини
					state.splice(index, 1);
				}
			}
		},
	}
})

export const {toggleCart, pluscart, cartminus} = cartSlice.actions;
export const selectCart = state => state.cart;
export default cartSlice.reducer;