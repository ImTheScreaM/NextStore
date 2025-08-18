export function useCurrency(value:number,toValue:number):string {
	const result:string = (value * toValue).toFixed(0)
	return result
}