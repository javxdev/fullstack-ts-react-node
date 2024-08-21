import { Link, Form } from "react-router-dom";

export async function action() {
  console.log('from action...')
  return {}
}

export default function NewProduct() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-600 uppercase">Register new product</h2>
        <Link
          to="/"
          className="rounded-md p-3 bg-red-700 hover:bg-red-500 text-sm text-white shadow-sm"
        >
          Go Back To Products
        </Link>
      </div>

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
                className="mt-2 block w-full p-3 bg-gray-50"
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
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Product Price. Example: 199, 599"
                name="price"
            />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Register"
        />
      </Form>
    </>
  )
}
