'use client'

import '@/components/assets/css/productClient.css'

import Image from "next/image";
import {useBusketStore} from "@/components/shared/modals/busketStore";
import useApiProductClient from "@/components/shared/modals/api-product_client";


export default function ProductClient({params}:{params: Promise<{ product_id: number }>}) {

	const {products,loading,error} = useApiProductClient({params})
	const { addToBusket } = useBusketStore({products: products})

	if (loading) {
		return 'loading'
	}

	if (error) {
		return error
	}



	return (
		<div className="product-client grid justify-center gap-20">
			<div  className='product-client__top flex flex-col gap-10'>
				<div className='product-client__top__title'>
					<h1 style={{fontSize:'23px'}}>{products?.title}</h1>
				</div>
				<div className="product-client__middle flex gap-20 p-10" style={{background:'#212121',borderRadius:'22px'}}>
					<div className='product-client__top__image-left'>
						<Image src={products?.image ?? ''} width={470} height={470} alt={products?.title ?? ''}/>
					</div>
					<div className='product-client__top-right flex flex-col gap-20'>
						<div className='product-client__top__description'>
							<p className='w-250'>{products?.description}</p>
						</div>
						<div className='product-client__top__price_btn flex justify-between items-center'>
							<div className='product-client__top__price text-black w-150 p-3 border-1' style={{background:'#f7f7f7',borderRadius:'22px'}}>
								<p style={{fontSize:'22px'}}>{products!.price * 74} ₽.</p>
								<p style={{fontSize:'15px'}}>от {(((products!.price*74) / 10).toFixed(0))} ₽/ мес.</p>
							</div>
							<button onClick={addToBusket}>В корнизу</button>
						</div>
						<div className='product-client__color'>
							<h3>Цвета</h3>
							<div style={{background:products?.color,width:'30px',height:'30px',cursor:'pointer'}}/>
						</div>
					</div>
				</div>
			</div>

			<div className='product-client-information grid justify-end gap-20'>
				<div className='product-client-information__desc'>
					<p className='w-200'>{products?.description}</p>
				</div>
				<div className='product-client-perfomance '>
					<h1>Характеристики:</h1>
					<div className='product-client-perfomance__information grid gap-5 p-4'>
						<div className='product-client-perfomance__standart-data '>
							<h3>Заводские данные</h3>
							<div>
								Гарантия продавца / производителя 12 мес.
								Страна-производитель Китай
							</div>
						</div>
						<div className='product-client-perfomance__all-param'>
							<h3>Параметры</h3>
							<div>
								Тип: {products?.category}
								Модель:{products?.model}
							</div>
						</div>
						<div className='product-client-perfomance__color'>
							<h3>Цвет</h3>
							<div>
								Цвет: {products?.color}
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
