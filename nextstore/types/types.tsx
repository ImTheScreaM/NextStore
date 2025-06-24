export interface Cart {
	id:number,
	title:string,
	price:number,
	image?:string,
	quantity?:number
}

export interface CartState {
	addBusketQuan: any
	removeBusket: any
	busket:Cart[] | Cart,
	addProduct:(product:Cart) => void
}

