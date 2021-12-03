import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router'

import Layout from '../shared/layout'
import { ProductsContext } from '../../context/products-context'
import './single-product.styles.scss'

const SingleProduct = () => {
	const [product, setProduct] = useState(null)
	const { products } = useContext(ProductsContext)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const product = products.find(item => Number(item.id) === Number(id))

		if (!product) {
			return navigate('/shop')
		}

		setProduct(product)
	}, [products, id, navigate])

	if (!product) {
		return null
	}

	const { imageUrl, title, price, description } = product

	return (
		<Layout>
			<div className="single-product-container">
				<div className="product-image">
					<img src={imageUrl} alt="product" />
				</div>
				<div className="product-details">
					<div className="name-proce">
						<h3>{title}</h3>
						<p>{price}</p>
					</div>
					<div clasName="add-to-cart-btns">
						<button
							className="button is-white nomad-btn"
							id="btn-white-outline"
						>
							Add TO CART
						</button>
						<button
							className="button is-black nomad-btn"
							id="btn-white-outline"
						>
							PROCEED TO CHECKOUT
						</button>
					</div>
					<div className="product-description">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default SingleProduct
