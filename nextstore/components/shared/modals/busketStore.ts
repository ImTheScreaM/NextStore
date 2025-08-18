import {TTotal} from "@/types/types";
import { useBusket } from '@/core/store/busket'


/**
 * Use busket function
 *
 */


export const useBusketStore = () => {
    const busket = useBusket(state => state.busket)
    const addProduct = useBusket(state => state.addProduct)
    const remove = useBusket(state => state.removeBusket)
    const addBusketQuan = useBusket(state => state.addBusketQuan)

    const totalPrice = useBusket(
        state =>
            state.busket.reduce(
                (total: number, item: TTotal) => total + item.price * item.quantity,
                0
            ) * 74
    )

    return {busket, remove, addBusketQuan, totalPrice,addProduct}
}