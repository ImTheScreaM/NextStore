import {use, useEffect, useState} from "react";
import {API_PRODUCT} from "@/core/api/api";
import {Cart} from "@/types/types";

export default function useApiCategoryClient({params} : {params:Promise<{slug:string}>}) {
    const [product, setProduct] = useState<Cart[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const category = decodeURIComponent(use(params).slug).replace('}', '')

    useEffect(() => {
        const fetchData = async (category: string) => {
            try {
                const response = await fetch(`${API_PRODUCT}/category?type=${category}`)

                if (!response.ok) {
                    throw new Error('Ошибка при получение данных')
                }

                const responseData = await response.json()
                const datas: Cart[] = []
                responseData.products.map((i:Cart) => {
                    if (i.category == category) {
                        datas.push(i)
                    }
                })
                setProduct(datas)
            } catch (e) {
                console.error('fetchData Error client', e)
                setError('Ошибка при загрузке данных')
            } finally {
                setLoading(false)
            }
        }
        fetchData(category)
    }, [category])

    return {product, loading, error}
}