import { useNavigate, Form, ActionFunctionArgs, redirect } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"

type ProductDetailsPros = {
    product: Product
}

export async function action({ params } : ActionFunctionArgs) {
    if(params.id !== undefined){
        await deleteProduct(+params.id)
        return redirect('/')
    }
}
  

export default function ProductDetails({product} : ProductDetailsPros) {

    const navigate = useNavigate()
    const isAvailable = product.availability

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
                
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Available' : 'Not Available'}
            </td>
            <td className="text-lg text-gray-800">
                <div className="flex gap-3 items-center">
                    <button
                        onClick={() => navigate(`/products/${product.id}/edit`)}
                        className="border  border-blue-700 text-blue-700 rounded w-full p-2 font-bold text-xs text-center"
                    >Edit</button>

                    <Form
                        className="w-full"
                        method="POST"
                        action={`products/${product.id}/delete`}
                    >
                        <input
                            type="submit"
                            value="Delete"
                            className="border  border-red-700 text-red-700 rounded w-full p-2 font-bold text-xs text-center cursor-pointer"
                        />
                    </Form>
                </div>
            </td>
        </tr> 
    )
}
