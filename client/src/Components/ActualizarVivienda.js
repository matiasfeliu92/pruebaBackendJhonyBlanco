import axios from 'axios'
import {useEffect, useState} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const URI = 'http://localhost:4000/viviendas/actualizar/'

const CrearVivienda = () => {

    const [tipo, setTipo] = useState('')
    const [superficie, setSuperficie] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [precio, setPrecio] = useState('')
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    const actualizarVivienda = async (e) => {
        e.preventDefault()
        const res = await axios.put(URI+id, {tipo: tipo, superficie: superficie, ubicacion: ubicacion, precio: precio, imagen: imagen})
        navigate('/')
    }

    const viviendaById = async () => {
        const res = await axios.get(URI+id)
        setTipo(res.data.tipo)
        setSuperficie(res.data.superficie)
        setUbicacion(res.data.ubicacion)
        setPrecio(res.data.precio)
        setImagen(res.data.imagen)
    }

    useEffect(() => {
        viviendaById()
    }, [])

  return (
    <div>
        <h1>Actualice las viviendas</h1>
        <Link to="/" className='btn btn-primary'>Volver a la pagina principal</Link>
        <form onSubmit={actualizarVivienda}>
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

                <button type="submit" className='btn btn-primary'>Actualizar Vivienda</button>
            </div>
        </form>
    </div>
  )
}

export default CrearVivienda