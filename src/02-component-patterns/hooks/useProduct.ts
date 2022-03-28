import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
	const [counter, setCounter] = useState(value);
	const isControlled = useRef(!!onChange);

	const increaseBy = (val: number) => {
		if (isControlled.current) {
			// signo de admiración onChange! significa que estas segur@ que la variable onChange existe
			return onChange!({ product, quantity: val });
		}
		let newValue = Math.max(counter + val, 0);
		setCounter(newValue);

		onChange && onChange({ product, quantity: newValue });
	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return { increaseBy, counter };
};
