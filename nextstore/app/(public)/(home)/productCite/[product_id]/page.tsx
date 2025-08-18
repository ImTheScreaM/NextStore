import { API_PRODUCT } from '@/core/api/api'
import ProductClient from './product_client'
import { Cart } from '@/types/types'


export async function generateStaticParams() {
	const res = await fetch(API_PRODUCT)
	const data = await res.json()

	if (!res) {
		console.log('fetch Error')
		return
	}

	if (!data) {
		console.log('No data') 
		return
	}

	return data?.products.map((products:Cart) => ({
		product_id: products.id.toString(),
	}))
}

export default function Page({
	params,
}: {
	params: Promise<{ product_id: number }>
}) {
	
	return <ProductClient params={params}/>
}
