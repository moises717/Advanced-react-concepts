import { ReactElement } from "react";

export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}

export interface Product {
	id: number;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

export interface ProductCardIndexProps {
	({ product, children }: ProductCardProps): JSX.Element;
	Title: ({ title }: { title?: string }) => JSX.Element;
	Image: ({ img }: { img?: string }) => JSX.Element;
	Buttons: () => JSX.Element;
}
