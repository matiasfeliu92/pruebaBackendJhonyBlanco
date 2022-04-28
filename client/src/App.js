import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CrearVivienda from './Components/CrearVivienda';
import MostrarViviendas from './Components/MostrarViviendas';
import ActualizarVivienda from './Components/ActualizarVivienda';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MostrarViviendas/>}/>
          <Route path='/viviendas/crear' element={<CrearVivienda/>}/>
          <Route path='/viviendas/actualizar/:id' element={<ActualizarVivienda/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
