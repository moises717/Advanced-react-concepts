import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

const useShopping = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const handleProductChange = ({ quantity, product }: { quantity: number; product: Product }) => {
		setShoppingCart((oldShoppingCart) => {
			// refactor
			const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, quantity: 0 };

			if (Math.max(productInCart.quantity + quantity, 0) > 0) {
				productInCart.quantity += quantity;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			// Borrar el producto
			const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
			return newShoppingCart;

			// Primer caso:
			// if (quantity === 0) {
			//     const { [product.id]: _, ...newShoppingCart } = oldShoppingCart;
			//     return newShoppingCart;
			// }
			// return {
			//     ...oldShoppingCart,
			//     [product.id]: {
			//         ...product,
			//         quantity
			//     }
			// }
		});
	};

	return {
		handleProductChange,
		shoppingCart,
	};
};

export default useShopping;
