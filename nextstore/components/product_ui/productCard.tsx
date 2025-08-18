'use client'

import '@/components/assets/css/main.css'
import { useCurrency } from '@/core/hooks/useСurrency'
import {Cart} from '@/types/types'

import Image from 'next/image'
import Link from 'next/link'
import {useBusketStore} from "@/components/shared/modals/busketStore";

export const ProductCard = ({ id, price, title, image,quantity}: Cart) => {
	const {addProduct} = useBusketStore()

	const addToBusket = () => {
		const props = {id, price, title, image, quantity}
		addProduct(props)
	}

	return (
		<div className='products'>
			<div className='product-card'>
			<Link href={`/productCite/${id}`} shallow={false}>
				<div className='product-image'>
					<Image src={image ?? ''} width={200} height={200} alt='product' />
				</div>
				<div className='flex flex-col items-center'>
					<div className='product-price'>{useCurrency(price,74)} ₽.</div>
					<div className='product-title'>{title}</div>
				</div>
			</Link>
				<button className='busket-button' onClick={addToBusket}>
					В корзину
				</button>
			</div>

		</div>
	)
}
