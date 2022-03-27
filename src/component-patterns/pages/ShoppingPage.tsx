import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/'


const product = {
    id: 1,
    title: 'Coffee Mug',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image img='./coffee-mug.png' />
                    <ProductCard.Image />
                    <ProductCard.Title title='Hola mundo' />
                    <ProductCard.Buttons />
                </ProductCard>


                <ProductCard product={product} >
                    <ProductImage img='./coffee-mug.png' />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}
