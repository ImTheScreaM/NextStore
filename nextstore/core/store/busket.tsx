import { Cart, CartState } from '@/types/types'

import { toast } from 'react-toastify'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBusket = create<CartState>()(
	persist(
		(set, get) => ({
			busket: [],
			addProduct: (product: Cart) => {
				const getIdProduct = get().busket.find(
					(elem: { id: number }) => elem.id === product.id
				)

				if (!getIdProduct) {
					toast.success('Product add')
				} else {
					toast.success('Product already add')
				}
				
				set({
					busket: getIdProduct
						? get().busket
						: [
								...get().busket,
								{
									id: product.id,
									title: product.title,
									price: product.price,
									image: product.image,
									quantity: 1,
								},
						  ],
				})
			},
			removeBusket: (product: Cart) => {
				const item = get().busket.find(
					(item: { id: number }) => item.id == product.id
				)

				if (!item) {
					return
				}
				if (item && item.quantity == 1) {
					set({
						busket: get().busket.filter(
							(item: { id: number }) => item.id !== product.id
						),
					})
					toast.success('Product deleted')
				}

				item.quantity -= 1

				set({
					busket: [...get().busket],
				})
			},

			addBusketQuan: (product: Cart) => {
				const item = get().busket.find(
					(item: { id: number }) => item.id == product.id
				)
				if (!item) {
					return toast.error('No found item')
				}
				item.quantity += 1
				set({
					busket: [...get().busket],
				})
			},
		}),
		{
			name: 'busket',
		}
	)
)
