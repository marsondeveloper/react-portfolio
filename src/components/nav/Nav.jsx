import { Link } from 'react-scroll'
import './Nav.css'


const Nav = () => {
  const items = ["home", "about", "skills", "services", "portfolio", "clients", "contact"];
  return (
    <nav className="nav">
      <div className="nav-menu">
        {items.map((item, index) => (
            <Link to={item}
              key={index}
              className="nav-link"
            >{item}</Link>
        ))}
      </div>
      
    </nav>
                  
  )
}

export default Nav
