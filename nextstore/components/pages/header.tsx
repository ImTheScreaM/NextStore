'use client'

import '@/components/assets/css/header.css'
import '@/components/assets/css/main.css'
import '@/components/assets/css/section.css'

import { API_PRODUCT } from '@/core/api/api'
import { MAIN } from '@/core/config/main.page.config'
import { useDebounce } from '@/core/hooks/useDebounce'
import { ProductCard } from '../product_ui/productCard'
import { Cart } from '@/types/types' 

import Link from 'next/link'
import {JSX, SetStateAction, useEffect, useState } from 'react'


export default function Header() {
	const [search, setSearch] = useState<string>()
	const [result, setResult] = useState<Cart[]>([])
	const [products, setProducts] = useState<Cart[]>()

	const debouncedSearch = useDebounce(search, 500)

	useEffect(() => {
		const searchFetch = () => {
			try {
				fetch(API_PRODUCT)
					.then(res => res.json())
					.then(data => {
						if (!data) return console.error('No data')
						setProducts(data.products)
					})
			} catch (error) {
				console.error(error)
			}
		}
		searchFetch()
	}, [])

	

	useEffect(() => {
		if (search) {
			const lowerSearchTerm = debouncedSearch?.toLowerCase() ?? ''
			const filteredProducts:Cart[] = (products?.filter((product: { title: string }) =>
				product.title.toLowerCase().includes(lowerSearchTerm)
			)) ?? []
			setResult(filteredProducts)
		} else {
			setResult([])
		}
	}, [debouncedSearch])

	return (
		<div className='header_container flex justify-around'>
			<article className='header-return  p-1'>
				<Link href={MAIN.HOME}>Return to Home</Link>
			</article>

			<article className='header-search flex p-1'>
				<div className='flex w-100 flex-col'>
					<input
						type='text'
						placeholder='Search...'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>

					{result.length > 0 ? (
						<div className='search-result gap-4 flex absolute top-20 '>
							{result.map((i:Cart) => (
								<ProductCard key={i.id} {...i} />
							))}
						</div>
					) : (
						''
					)}
				</div>
			</article>

			<div className='header-interface flex flex-row gap-12'>
				<Link href={MAIN.USER_PAGE}>
					<img src='https://img.icons8.com/parakeet-line/48/gender-neutral-user.png' />
				</Link>
				<Link href={MAIN.BUSKET}>
					<img src='/img/basket.png' alt='' />
				</Link>
			</div>
		</div>
	)
}
