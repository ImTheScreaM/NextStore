import {Cart} from "@/types/types";

type CategoryPromise = {
    status:string
    products:Cart[]
    message:string

}

export const  categoriesFind = ({categories}:{categories:CategoryPromise}) => {
    const categoriesFind:string[] = []

    categories.products.map((i:Cart) => categoriesFind.push(<string>i.category))

    const result = categoriesFind.reduce((acc:string[],item:string) => {
        if (acc.includes(item)) {
            return acc
        }
        return [...acc,item]
    },[])
    return {result}
}