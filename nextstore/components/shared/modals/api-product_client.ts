import {use, useEffect, useState} from "react";
import {API_PRODUCT} from "@/core/api/api";
import {IProduct} from "@/types/types";

export default function useApiProductClient({params}:{params:Promise<{ product_id: number }>}) {
    const [products, setProduct] = useState<IProduct | undefined>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const id = use(params).product_id

    useEffect(() => {
        const fetchData = async (id: number) => {
            try {
                const response = await fetch(`${API_PRODUCT}/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (!response.ok) {
                    console.error('Ошибка при получение данных')
                }

                const responseData = (await response.json()).product
                setProduct(responseData)
            } catch (e) {
                console.error('fetchData Error client', e)
                setError('Ошибка при загрузке данных')
            } finally {
                setLoading(false)
            }
        }
        fetchData(id)
    }, [id])
    return {products,loading,error}
}