'use client'

import {useEffect, useState} from "react";
import {API_PRODUCT} from "@/core/api/api";
import {Cart} from "@/types/types";
import {useDebounce} from "@/core/hooks/useDebounce";

export default function useApiSearchProducts() {
    const [search, setSearch] = useState<string>()
    const [result, setResult] = useState<Cart[]>([])
    const [products, setProducts] = useState<Cart[]>()

    const debouncedSearch = useDebounce(search, 500)

    useEffect(() => {
        const searchFetch = () => {
            try {
                fetch(API_PRODUCT)
                    .then(res => res.json())
                    .then(data => {
                        if (!data) return console.error('No data')
                        setProducts(data.products)
                    })
            } catch (error) {
                console.error(error)
            }
        }
        searchFetch()
    }, [])



    useEffect(() => {
        if (search) {
            const lowerSearchTerm = debouncedSearch?.toLowerCase() ?? ''
            const filteredProducts:Cart[] = (products?.filter((product: { title: string }) =>
                product.title.toLowerCase().includes(lowerSearchTerm)
            )) ?? []
            setResult(filteredProducts)
        } else {
            setResult([])
        }
    }, [debouncedSearch])

    return {result,search,setSearch}
}