import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MostrarViviendas from './Components/MostrarViviendas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MostrarViviendas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
