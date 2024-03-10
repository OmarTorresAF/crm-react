import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export async function action({ request }) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  const email = formData.get('email')
  // validacion

  const errores = []

  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  if (!regex.test(email)) {
    errores.push('El email no es valido')
  }

  // RETORNAR DATOS SI HAY ERRORES
  if (Object.keys(errores).length) {
    return errores
  }
  // { return { ok: true }
}
// el return de arriba es necesario ya que en nuevas versiones de react esto ha sido implementado como requisito https://reactrouter.com/en/main/route/action

function NuevoCliente() {
  const errores = useActionData()
  const navigate = useNavigate()

  console.log(errores)
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
        <button
          className="px-3 py-1 text-white uppercase bg-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <button
          className="px-3 py-1 text-white uppercase bg-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <button
          className="px-3 py-1 text-white uppercase bg-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <button
          className="px-3 py-1 text-white uppercase bg-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <button
          className="px-3 py-1 text-white uppercase bg-blue-800"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className='px-5 mx-auto bg-white rounded-md shadow md:w-3/4 py10 mt20'>

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method='post' noValidate
        >
          <Formulario />
          <input
            type='submit'
            className='w-full p-3 mt-5 text-lg font-bold text-white uppercase bg-blue-800'
            value='Registrar Cliente'
          />

        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
