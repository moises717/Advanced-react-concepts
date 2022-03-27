import { lazy } from "react";

type JSXComponent = () => JSX.Element;
interface Route {
	to: string;
	path: string;
	Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
	{
		to: "/lazy1",
		path: "/lazy1",
		Component: Lazy1,
		name: "LazyPage1",
	},
	{
		to: "/lazy2",
		path: "/lazy2",
		Component: Lazy2,
		name: "LazyPage2",
	},
	{
		to: "/lazy3",
		path: "/lazy3",
		Component: Lazy3,
		name: "LazyPage3",
	},
];
