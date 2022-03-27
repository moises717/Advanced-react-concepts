import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);
    let imageToShow: string;

    if (img) imageToShow = img;
    else if (product.img) imageToShow = product.img;
    else imageToShow = noImg;

    return (
        <img className={styles.productImg} src={img ?? noImg} alt="" />
    )
}