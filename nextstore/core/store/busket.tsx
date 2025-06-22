import { Cart,CartState } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBusket = create<CartState>()(
	persist(
		(set, get) => ({
			busket: [],
			addProduct: (product:Cart) => {
				const getIdProduct = get().busket.find((elem: { id: number }) => elem.id === product.id)

				if (!getIdProduct) {
					console.log('add')
				} else {
					console.log('already add')
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
			removeBusket: (id: any) => {
				set({ busket: [] })
				console.log('remove')
			},
		}),
		{
			name: 'busket',
		}
	)
)
