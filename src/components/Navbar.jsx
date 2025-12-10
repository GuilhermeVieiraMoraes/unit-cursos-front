import './Navbar.css';
import { ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Unit" className='logo' />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/meuaprendizado">Aprendizado</Link></li>
            <li><Link to="/certificacoes">Certificações</Link></li>
        </ul>
        <div className='nav_user'>
            <ShoppingCart color="white"/>
            <div className="user"></div>
        </div>
    </nav>
    
  )
}

export default Navbar