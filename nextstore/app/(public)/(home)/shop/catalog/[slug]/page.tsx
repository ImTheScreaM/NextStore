import { API_PRODUCT } from '@/core/api/api'
import { Cart } from '@/types/types'
import CatalogPage from './catalog_client'

export async function generateStaticParams() {
	const response = await fetch(`${API_PRODUCT}`)
	const data = await response.json()

	if (!response) {
		console.log('fetch Error')
		return
	}

	if (!data) {
		console.log('No data')
		return
	}

	return data?.products.map((product: Cart) => ({
		slug: product.category
	}))
}

export default function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	return <CatalogPage params={params} />
}
