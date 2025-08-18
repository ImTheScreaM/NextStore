'use client'

import '@/components/assets/css/header.css'
import '@/components/assets/css/main.css'
import '@/components/assets/css/section.css'

import { MAIN } from '@/core/config/main.page.config'
import useApiSearchProducts from "@/components/shared/modals/api-search-products";
import { ProductCard } from '../product_ui/productCard'
import { Cart } from '@/types/types' 

import Link from 'next/link'
import {useState} from 'react'


export default function Header() {

	const [user] = useState<boolean>(false)

	const {result,search,setSearch} = useApiSearchProducts()



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
						<div className='search-result absolute top-20 '>
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
				<Link href={user ? MAIN.USER_PAGE : MAIN.REGISTER}>
					<img src='https://img.icons8.com/parakeet-line/48/gender-neutral-user.png' />
				</Link>
				<Link href={MAIN.BUSKET}>
					<img src='/img/basket.png' alt='' />
				</Link>
			</div>
		</div>
	)
}
