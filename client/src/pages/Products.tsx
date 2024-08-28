import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import ProductDetails from "../components/ProductDetails"
import { Product } from "../types"

export async function loader(){
  const products = await getProducts()
  
  return products
}

export default function Products() {

  const products = useLoaderData() as Product[]

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-600 uppercase">Products</h2>
        <Link
          to="products/new"
          className="rounded-md p-3 bg-green-700 hover:bg-green-500 text-sm text-white shadow-sm"
        >
          Add Product
        </Link>
      </div>

      <div>
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                  <th className="p-2 text-start">Product</th>
                  <th className="p-2 text-start">Price</th>
                  <th className="p-2 text-start">Availability</th>
                  <th className="p-2 text-start ">Actions</th>
              </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
