import { Link } from "react-router-dom"
import { getProducts } from "../services/ProductService"

export async function loader(){
  await getProducts()
  return { }
}

export default function Products() {
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
    </>
  )
}
