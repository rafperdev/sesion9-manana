import logo from './logo.svg';
import './App.css';
import { Productos } from './componentes/Productos';
import { ProductList } from './componentes/ProductList';
import { Comentarios } from './componentes/Comentarios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './componentes/Login';
import { Home } from './componentes/Home';
import { Ventas } from './componentes/Ventas';
import { VentasListado } from './componentes/VentasListado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/producto" element={<Productos />} />
        <Route exact={true} path="/ventas" element={<Ventas />} />
        <Route exact={true} path="/ventas/listar" element={<VentasListado />} />
        <Route path="/home" element={<Home />} />
        <Route path="/producto/lista" element={<ProductList />} />
        <Route path="/comments" element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
