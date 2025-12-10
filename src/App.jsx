import './App.css';

// componentes
import Navbar from './components/Navbar';

// react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Cursos from './pages/Cursos';
import MeuAprendizado from './pages/MeuAprendizado';
import Certificacoes from './pages/Certificacoes';
import Login from './pages/Login';


function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/about" element={<About />} />
          <Route path="/meuaprendizado" element={<MeuAprendizado />} />
          <Route path="/certificacoes" element={<Certificacoes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
