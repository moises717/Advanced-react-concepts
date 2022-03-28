import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import { products } from '../data/products';
import useShopping from '../hooks/useShopping';
import '../styles/custom-styles.css'

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
                {
                    products.map((product) => (
                        <ProductCard
                            onChange={handleProductChange}
                            value={shoppingCart[product.id]?.quantity}
                            key={product.id}
                            product={product} className="bg-dark text-white" >
                            <ProductImage className="custom-img" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-white" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>
            <div className="shopping-card">
                {
                    shoppingCart && Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            onChange={handleProductChange}
                            key={key}
                            product={{
                                ...product,
                            }} className="bg-dark text-white" style={{
                                width: '100px'
                            }}
                            value={product.quantity}

                        >
                            <ProductImage className="custom-img" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons className="custom-buttons" style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} />
                        </ProductCard>
                    ))

                }


            </div>
        </div>
    )
}
