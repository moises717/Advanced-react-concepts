import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImgProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
	id: number;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
	maxCount?: number;
}

export interface ProductCardIndexProps {
	({ product, children }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImgProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	quantity: number;
}

export interface ProductInCart extends Product {
	quantity: number;
}

export interface initialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCartHandler {
	count: number;
	isMaxCountReached?: boolean;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
	reset: () => void;
}
