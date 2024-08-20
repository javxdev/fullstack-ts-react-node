import { Link } from "react-router-dom";

export default function NewProduct() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-600 uppercase">Register new product</h2>
        <Link
          to="/"
          className="rounded-md p-3 bg-blue-700 hover:bg-blue-500 text-sm text-white shadow-sm"
        >
          Go Back To Products
        </Link>
      </div>
    </>
  )
}
