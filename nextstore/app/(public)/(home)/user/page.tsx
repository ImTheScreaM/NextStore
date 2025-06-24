'use client'

import { useBusket } from '@/core/store/busket'

export default function User() {
	const busket = useBusket(state => state.busket)
	const busket1 = useBusket(state => state.removeBusket)

	console.log(busket)

	return <button onClick={busket1}>hello</button>
}
