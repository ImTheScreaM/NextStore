
import '@/components/assets/css/shop.layout.css'

import { Categories } from '@/components/product_ui/categories'
import { API_PRODUCT } from '@/core/api/api'
import {categoriesFind} from "@/components/shared/modals/categoriesFind";

async function getCategories() {
	const response = await fetch(API_PRODUCT)
	return await response.json()
}

export default async function MainLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const categoriesData = getCategories()
	const [categories] = await Promise.all([categoriesData])

	const {result} = categoriesFind({categories})


	return (
		<div className='shop layout'>
			<div className='nextstore_categories'>
				<h1 style={{fontSize:'35px'}}>Категории</h1>
				<div>
					{(result as string[]).map((item: string, index: number) => (
						<div key={index}>
							<Categories name={item} />
						</div>
					))}
				</div>
			</div>
			<div>
				{children}
			</div>
		</div>
	)
}
