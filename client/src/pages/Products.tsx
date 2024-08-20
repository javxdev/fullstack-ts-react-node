import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-600 uppercase">Products</h2>
        <Link
          to="products/new"
          className="rounded-md p-3 bg-blue-700 hover:bg-blue-500 text-sm text-white shadow-sm"
        >
          Add Product
        </Link>
      </div>
    </>
  )
}
