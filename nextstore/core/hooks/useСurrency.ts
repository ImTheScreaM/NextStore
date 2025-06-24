export function useCurrency(value:number,toValue:number) {
	return (value * toValue).toFixed(0)
}