import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
	const [counter, setCounter] = useState(value);

	const increaseBy = (val: number) => {
		let newValue = Math.max(counter + val, 0);
		setCounter(newValue);

		onChange && onChange({ product, quantity: newValue });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return { increaseBy, counter };
};
