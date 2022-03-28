import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

const useShopping = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const handleProductChange = ({ quantity, product }: { quantity: number; product: Product }) => {
		setShoppingCart((oldShoppingCart) => {
			///Primer caso:
			if (quantity === 0) {
				const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
				return newShoppingCart;
			}
			return {
				...oldShoppingCart,
				[product.id]: {
					...product,
					quantity,
				},
			};
		});
	};

	return {
		handleProductChange,
		shoppingCart,
	};
};

export default useShopping;
