import '@/components/assets/css/main.css'

import {ProductCard} from '@/components/product_ui/productCard'
import {API_PRODUCT} from '@/core/api/api'
import {Cart} from '@/types/types'


async function getProducts() {
	const response = await fetch(`${API_PRODUCT}`)
	return await response.json()
}


export default async function Shop() {
	const productsData = getProducts()
	const [products] = await Promise.all([productsData])


	return (
		<div className='main_container'>
			<div className='nextstore_items'>
				{products?.products.map((item: Cart) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</div>
	)
}
