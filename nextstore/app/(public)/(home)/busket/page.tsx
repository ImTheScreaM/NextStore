'use client'

import '@/components/assets/css/busket.css'
import '@/components/assets/css/section.css'

import {useBusketStore} from "@/components/shared/modals/busketStore";
import { Cart } from '@/types/types'

import Image from 'next/image'
import Link from "next/link";


// styles

const styleNormalSyze = {
	fontSize: '24px',
}

const styleSize = {
	fontSize: '34px',
	padding: '15px',
	marginLeft: '15px',
}


export default function Busket() {

	const {busket, remove, addBusketQuan, totalPrice} = useBusketStore({})

	return (
		<div className='busket-container flex flex-row'>
			{busket.length > 0 ? (
				<div className='container-top' style={styleNormalSyze}>
					<h1 style={styleSize}>Корзина</h1>
					<div className='container'>
						<div className='busket '>
							{busket.map((i: Cart) => (
								<div
									key={i.id}
									className='busket-items'
								>

									<div className='busket-info flex justify-evenly p-4 m-4'>

										<div className='busket-img'>
											<Image
												src={i.image ?? ''}
												alt={`${i.title}`}
												width={300}
												height={200}
											/>
										</div>
										<div className='busket-product_info'>
											<div className='busket-product_info-top'>
												<Link href={`/productCite/${i.id}`}>
													<div className='busket-title'>{i.title}</div>
												</Link>
												<div className='busket-price text-green-500'>
													{i.price * 74} ₽.
												</div>
											</div>
											<div className='busket-product_info-top pt-15'>
												<p className='busket-price'>Количество: {i.quantity}</p>
											</div>
										</div>

										<div className='busket-function flex flex-col gap-6'>
											<button onClick={() => addBusketQuan(i)}>Add</button>

											<button onClick={() => remove(i)}>Remove</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className='border-l border-l-white w-1/4 text-center'>totalPrice {totalPrice}</div>
					</div>
				</div>
			) : (
				<h1 style={styleSize}>Корзина пуста</h1>
			)}
		</div>
	)
}
