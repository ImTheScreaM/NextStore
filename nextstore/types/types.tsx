export interface IProduct {
	brand:string
	category:string
	color:string
	description:string
	discount:number
	id:number
	image:string
	model:string
	onSale:boolean
	price:number
	title:string
}


export interface Cart {
	category?: string
	id:number
	title:string
	price:number
	image?:string
	quantity:number
}

export interface CartState {
	busket:Cart[]
	addBusketQuan: (product:Cart) => void
	removeBusket: (product:Cart) => void
	addProduct: (product: { id: number; price: number; title: string; image: string | undefined; quantity: number }) => void
}

export type TTotal = {
	price: number
	quantity: number
}