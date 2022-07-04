
import logo from '../images/earth.svg'
import { useNavigate, } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className='nav-container'>
      <div className='nav-title' onClick={()=> navigate("/")}>
        <img className="nav-title-logo" src={logo} alt="Globe" /> 
        <span className='nav-title-text'>WorldMap</span>
      </div>
      <div>
        <button className="button login-button" onClick={()=> navigate("/login")}>Login</button>
        <button className="button register-button" onClick={()=> navigate("/register")}>Register</button>
      </div>
    </div>
  )
}

export default Header