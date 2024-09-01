import { Link, Form, useActionData, ActionFunctionArgs, redirect, LoaderFunctionArgs } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct, getProductById } from "../services/ProductService";

export async function loader({params} : LoaderFunctionArgs) {
  if(params.id !== undefined) {
    const product = await getProductById(+params.id)
    if(!product) {
      return redirect('/')
    }

    return product
  }
}

export async function action({ request } : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData()) 
  
  let error = ''
  if(Object.values(data).includes('')){
    error = 'All fields are required'
  }

  if(error.length) {
    return error
  }

  await addProduct(data)
  
  return redirect('/')
}

export default function EditProduct() {

  const error = useActionData() as string

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-600 uppercase">Edit product</h2>
        <Link
          to="/"
          className="rounded-md p-3 bg-red-700 hover:bg-red-500 text-sm text-white shadow-sm"
        >
          Go Back To Products
        </Link>
      </div>
      
      {error && <ErrorMessage>{ error }</ErrorMessage>}
      <Form
        className="mt-10"
        method="POST"
      >
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="name"
            >Name</label>
            <input 
                id="name"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-100"
                placeholder="Product Name"
                name="name"
            />
        </div>
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="price"
            >Price</label>
            <input 
                id="price"
                type="number"
                className="mt-2 block w-full p-3 bg-gray-100"
                placeholder="Product Price. Example: 199, 599"
                name="price"
            />
        </div>
        <input
          type="submit"
          className="mt-5 w-full uppercase bg-indigo-600 p-2 text-white font-bold cursor-pointer rounded"
          value="Register"
        />
      </Form>
    </>
  )
}
