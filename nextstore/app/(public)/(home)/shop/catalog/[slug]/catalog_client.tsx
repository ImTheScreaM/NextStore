'use client'

import { ProductCard } from '@/components/product_ui/productCard'
import { API_PRODUCT } from '@/core/api/api'
import {Cart} from '@/types/types'
import { use, useEffect, useState } from 'react'

import '@/components/assets/css/main.css'

export default function CatalogPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const [product, setProduct] = useState<Cart | undefined>()

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	const category = decodeURIComponent(use(params).slug).replace('}', '')

	useEffect(() => {
		const fetchData = async (category: string) => {
			try {
				const response = await fetch(`${API_PRODUCT}`, {
					headers: {
						'Content-Type': 'application/json',
					},
				})

				if (!response.ok) {
					throw new Error('Ошибка при получение данных')
				}

				const responseData = await response.json()
				const datas: Cart[] = []
				responseData.products.map((i:Cart) => {
					if (i.category == category) {
						datas.push(i)
					}
				})
				setProduct(datas)
			} catch (e) {
				console.error('fetchData Error client', e)
				setError('Ошибка при загрузке данных')
			} finally {
				setLoading(false)
			}
		}
		fetchData(category)
	}, [category])

	if (loading) {
		return 'loading'
	}

	if (error) {
		return error
	}

	

	return (
		<div className='nextstore_items'>
			{product?.map((item: Cart) => (
				<ProductCard key={item.id} {...item} />
			))}
		</div>
	)
}
