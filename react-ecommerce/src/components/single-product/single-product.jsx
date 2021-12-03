import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router'

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
	})
}
