import { useState } from "react";

export const useProduct = () => {
	const [counter, setCounter] = useState(0);

	const increaseBy = (val: number) => {
		setCounter((counter) => Math.max(counter + val, 0));
	};

	return { increaseBy, counter };
};
