'use client'
import '@/components/assets/css/main.css'
import { useBusket } from '@/core/store/busket'
import Image from 'next/image'

interface IProductCard {
	id: number
	price: number
	title: string
	image?: string
}

export const ProductCard = ({ id, price, title, image }: IProductCard) => {
	const addProduct = useBusket(state => state.addProduct)

	const addToBusket = () => {
		const props = { id, price, title, image }

		addProduct(props)
	}

	return (
		<div className='products'>
			<div className='product-card'>
				<div className='product-image'>
					<Image src={image ?? ''} width={200} height={200} alt='product' />
				</div>
				<div className='flex flex-col items-center'>
					<div className='product-price'>{price * 74}р.</div>
					<div className='product-title'>{title}</div>
				</div>
				<button className='busket-button' onClick={addToBusket}>
					В корзину
				</button>
			</div>
		</div>
	)
}
