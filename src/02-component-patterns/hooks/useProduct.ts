import { useCallback, useEffect, useRef, useState } from "react";
import { initialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: initialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count ?? value);
	const isMounted = useRef<boolean>(false);

	const increaseBy = (val: number) => {
		let newValue = Math.max(counter + val, 0);
		newValue = Math.min(newValue, initialValues?.maxCount ?? Infinity);
		setCounter(newValue);

		onChange && onChange({ product, quantity: newValue });
	};

	const reset = () => {
		setCounter(initialValues?.count || value);
	};

	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		maxCount: initialValues?.maxCount,
		isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
		increaseBy,
		reset,
	};
};
