'use client'

import { ProductCard } from '@/components/product_ui/productCard'
import {Cart} from '@/types/types'


import '@/components/assets/css/main.css'
import useApiCategoryClient from "@/components/shared/modals/api-category_client";

export default function CatalogPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const {product,loading,error} = useApiCategoryClient({params})

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
