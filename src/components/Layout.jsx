import { Outlet } from 'react-router-dom'

function Layout () {
  return (
       <div className='md:flex md:min-h-screen'>
            <aside className='px-5 py-10 bg-blue-900 md:w-1/4'>
                <h2 className='text-4xl font-black text-center text-white'>crm clientes</h2>
            </aside>

            <main className='p-10 overflow-scroll md:w-3/4 md:h-screen'>
              <Outlet />
            </main>
       </div>
  )
}

export default Layout
