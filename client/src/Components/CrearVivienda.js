import axios from 'axios'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const URI = 'http://localhost:4000/viviendas/crear'

const CrearVivienda = () => {

    const [tipo, setTipo] = useState('')
    const [superficie, setSuperficie] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [precio, setPrecio] = useState('')
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()

    const ingresarVivienda = async (e) => {
        e.preventDefault()
        const res = await axios.post(URI, {tipo: tipo, superficie: superficie, ubicacion: ubicacion, precio: precio, imagen: imagen})
        navigate('/')
    }

  return (
    <div>
        <h1>Ingrese una nueva vivienda</h1>
        <Link to="/" className='btn btn-primary'>Volver a la pagina principal</Link>
        <form onSubmit={ingresarVivienda}>
            <div className="container">
                <label className="form-label">tipo</label>
                <input type="text" className="form-control" onChange={(e) => setTipo(e.target.value)} value={tipo} placeholder="ingrese el tipo" />

                <label className="form-label">superficie</label>
                <input type="text" className="form-control" onChange={(e) => setSuperficie(e.target.value)} value={superficie} placeholder="ingrese la superficie" />

                <label className="form-label">ubicacion</label>
                <input type="text" className="form-control" onChange={(e) => setUbicacion(e.target.value)} value={ubicacion} placeholder="ingrese la ubicacion" />

                <label className="form-label">precio</label>
                <input type="text" className="form-control" onChange={(e) => setPrecio(e.target.value)} value={precio} placeholder="ingrese el precio" />

                <label className="form-label">imagen</label>
                <input type="url" className="form-control" onChange={(e) => setImagen(e.target.value)} value={imagen} placeholder="ingrese una imagen de la vivienda" />

                <button type="submit" className='btn btn-primary'>Ingresar Vivienda</button>
            </div>
        </form>
    </div>
  )
}

export default CrearVivienda