import { safeParse } from "valibot";
import { DraftProductSchema } from "../types"

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const addProduct = async (data : ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })
        if(result.success) {
            console.log('valid data')
        } else {
            throw new Error('not valid data')
        }
    } catch (error) {
        console.log(error)
    }
}