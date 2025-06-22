export interface Cart {
	id:number,
	title:string,
	price:number,
	image?:string,
	quantity?:number
}

export interface CartState {
	removeBusket: any
	busket:Cart[],
	addProduct:(product:Cart) => void
}