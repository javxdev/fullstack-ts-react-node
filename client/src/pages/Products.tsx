import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import ProductDetails from "../components/ProductDetails"

export async function loader(){
  const products = await getProducts()
  
  return products
}

export default function Products() {

  const products = useLoaderData()
  console.log(products)

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

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                  <th className="p-2">Producto</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Disponibilidad</th>
                  <th className="p-2">Acciones</th>
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
