import { useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsPros = {
    product: Product
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
                        className="bg-blue-500 hover:bg-blue-300 text-white rounded w-full p-2 uppercase font-bold text-xs text-center"
                    >Edit</button>
                </div>
            </td>
        </tr> 
    )
}
