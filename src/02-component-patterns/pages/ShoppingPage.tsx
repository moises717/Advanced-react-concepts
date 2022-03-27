import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import '../styles/custom-styles.css'

const product = {
    id: 1,
    title: 'Coffee Mug',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image img='./coffee-mug.png' className="custom-img" />
                    <ProductCard.Image />
                    <ProductCard.Title title='Hola mundo' className="text-white" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard
                    product={product} className="bg-dark text-white" >
                    <ProductImage img='./coffee-mug.png' className="custom-img" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product} style={{
                        backgroundColor: '#70D1F8',
                    }}>
                    <ProductImage img='./coffee-mug.png' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end',
                    }} />
                </ProductCard>

            </div>
        </div>
    )
}
