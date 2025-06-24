'use client'

import '@/components/assets/css/busket.css'
import '@/components/assets/css/section.css'

import { useCurrency } from '@/core/hooks/useСurrency'
import { useBusket } from '@/core/store/busket'
import { Cart } from '@/types/types'

import Image from 'next/image'

// styles

const styleSize = {
	fontSize: '34px',
	padding: '15px',
	marginLeft: '15px',
}

export default function Busket() {
	const busket = useBusket(state => {
		const a = state.busket
		return Array.isArray(a) ? a : [a]
	})

	const remove = useBusket(state => state.removeBusket)
	const addBusketQuan = useBusket(state => state.addBusketQuan)

	return (
		<div className='busket-container'>
			{busket.length > 0 ? (
				<div className='container'>
					<h1 style={styleSize}>Корзина</h1>
					<div className='flex flex-col gap-5'>
						{busket.map((i: Cart) => (
							<div key={i.id} className='busket-items h-94 w-300 p-4 m-auto'>
								<div className='flex justify-center p-4 gap-10'>
									<div className='busket-img'>
										<Image
											src={i.image ?? ''}
											alt={`${i.title}`}
											width={200}
											height={200}
											className='w-80'
										/>
									</div>
									<div>
										<div>
											<h1 className='busket-title w-150'>{i.title}</h1>
											<div className='busket-price text-green-500'>
												{useCurrency(i.price, 74)}р.
											</div>
										</div>
										<div className='pt-15'>
											<p className='busket-price'>Количество: {i.quantity}</p>
										</div>
									</div>
									<div className='grid grid-rows-7'>
										<button onClick={() => addBusketQuan(i)}>Add</button>

										<button onClick={() => remove(i)}>Remove</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<h1 style={styleSize}>Корзина пуста</h1>
			)}
		</div>
	)
}
