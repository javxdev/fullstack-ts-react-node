import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
        <header className="bg-slate-800">
            <div className="mx-auto max-w-5xl py-10 px-2 lg:px-0">
                <h1 className="text-3xl font-extrabold text-white uppercase">
                    Products Administrator
                </h1>
            </div>
        </header>

        <main className="my-10 mx-auto max-w-5xl p-10 bg-white shadow-md">
          <Outlet/>
        </main>
    </>
  )
}
