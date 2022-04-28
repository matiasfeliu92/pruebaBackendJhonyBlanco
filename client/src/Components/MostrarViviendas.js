import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const URI = 'http://localhost:4000/viviendas'

const MostrarViviendas = () => {

    const [viviendas, setViviendas] = useState([])

    const mostrarViviendas = async () => {
        const res = await axios.get(URI)
        console.log(res.data)
        setViviendas(res.data)
    }

    useEffect(() => {
        mostrarViviendas()
    }, [])

  return (
    <div className='container'>
        <div className="row">
            <h1>Elija su vivienda</h1>
            <Link to="/viviendas/crear" className='btn btn-primary'>Ingresar una vivienda para la venta</Link>
            {viviendas.map((vivienda) => (
                <div className="vivienda container-fluid col-md-12 d-flex flex-row justify-content-between align-items-center">
                    <h2>Tipo: {vivienda.tipo}</h2>
                    <h2>Superficie: {vivienda.superficie} m2</h2>
                    <p>Ubicacion: {vivienda.ubicacion}</p>
                    <p>Precio: ${vivienda.precio}</p>
                    <img className="imgVivienda img-thumbnail rounded img-fluid" src={vivienda.imagen} alt="img" />
                    <Link to={`/viviendas/actualizar/${vivienda.id}`} className='btn btn-info'>Actualizar</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MostrarViviendas