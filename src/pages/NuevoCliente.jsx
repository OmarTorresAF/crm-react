import { useNavigate } from 'react-router-dom'

function NuevoCliente () {
  const navigate = useNavigate()

  return (
    <>
          <h1 className="text-4xl font-black text-blue-900">Nuevo Cliente</h1>
          <p className="mt-3">llena todos los campos para registrar un nuevo campo</p>
          <div className="flex justify-end">
            <button
            className="px-3 py-1 text-white uppercase bg-blue-800"
            onClick={() => navigate(-1)}
            >
                Volver
            </button>
          </div>

          <div className='px-5 py-10 mx-auto bg-white rounded-md shadow md:w-3/4'>
            <p>formulario aqui</p>
          </div>
    </>
  )
}

export default NuevoCliente
