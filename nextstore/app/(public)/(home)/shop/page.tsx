
import '@/components/assets/css/main.css'

import { ProductCard } from '@/components/product_ui/productCard'

import { API_PRODUCT } from '@/core/api/api'
import { useBusket } from '@/core/store/busket'
import { Cart } from '@/types/types'


export default async function Shop() {
	const response = await fetch(API_PRODUCT)
	const products = (await response.json())

	

	return (
		<div className='main_container'>
			<div className='nextstore_items'>
				{products?.products.map((item: Cart) => (
					<ProductCard key={item.id} {...item}/>
				))}
			</div>
			
		</div>
	)
}
