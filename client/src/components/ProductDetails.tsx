import { Product } from "../types"

type ProductDetailsPros = {
    product: Product
}

export default function ProductDetails({product} : ProductDetailsPros) {
  return (
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
            {product.name}
            
        </td>
        <td className="p-3 text-lg text-gray-800">
            {product.price}
        </td>
        <td className="p-3 text-lg text-gray-800">
            {product.id}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
            {product.availability}
        </td>
    </tr> 
  )
}
