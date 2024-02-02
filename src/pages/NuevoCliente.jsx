import { useNavigate } from 'react-router-dom'
import Formulario from './Formulario'

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

          <form>
                <div className='px-5 py-10 mx-auto mt-20 bg-white rounded-md shadow md:w-3/4'>
                    <Formulario/>
                    <input
                        type='submit'
                        className='w-full p-3 mt-5 text-lg font-bold text-white uppercase bg-blue-800'
                        value='Registrar Cliente'
                    />
                </div>
          </form>
    </>
  )
}

export default NuevoCliente
