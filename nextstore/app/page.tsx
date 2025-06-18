import '@/components/assets/css/main.css'
import '@/components/assets/css/section.css'
import PRODUCTS from '@/core/api'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='main_container'>
			<div className='nextstore_items'>
				{PRODUCTS.map(i => (
					<div className='products'>
						<div className='product-card'>
							<div className='product-image'>
								<Image src={i.img} width={200} height={200} alt='product' />
							</div>
							<div className='flex flex-col items-center'>
								<div className='product-price'>{i.price}</div>
								<div className='product-title'>{i.name}</div>
							</div>
							<button className='busket-button'>В корзину</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
