import { useContext } from 'react'

import FeaturedProduct from '../shared/featured-product'
import { ProductsContext } from '../../context/products-context'

const FeaturedCollection = () => {
	const { products } = useContext(ProductsContext)

	const productItems = products
		.filter((_product, i) => i < 4)
		.map(product => <FeaturedProduct {...product} key={product.id} />)

	return (
		<div className="featured-collection container">
			<h2 className="featured-collection-title">Featured Collection</h2>
			<div className="products">{productItems}</div>
		</div>
	)
}

export default FeaturedCollection
