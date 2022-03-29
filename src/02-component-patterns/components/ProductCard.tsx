import { createContext, } from 'react';

import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs, initialValues, ProductCartHandler } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export interface Props {
    product: Product;
    //children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCartHandler) => JSX.Element | JSX.Element[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, reset, isMaxCountReached } = useProduct({ onChange, product, value, initialValues, });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}
