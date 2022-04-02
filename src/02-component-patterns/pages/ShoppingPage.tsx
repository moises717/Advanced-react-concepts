
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import { products } from '../data/products';
import useShopping from '../hooks/useShopping';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

    const { handleProductChange, shoppingCart } = useShopping();

    return (
        <div >
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
                <ProductCard
                    product={product} className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        // maxCount: 10
                    }}
                >
                    {
                        ({ reset, increaseBy, maxCount, isMaxCountReached, count }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />

                            </>
                        )
                    }

                </ProductCard>


            </div>
            <div className="shopping-card">

            </div>
        </div>
    )
}
