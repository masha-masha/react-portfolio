import { Link } from "react-scroll";
import "./Nav.css";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
 const items = ["home", "about", "skills", "services", "portfolio","clients", "contacts"];
 return (
  <nav className={isMenuOpen ? "nav nav-active" : "nav"}>
   <div className="nav-menu">
    {items.map((item, index) => (
     <Link to={item} key={index} className="nav-link" onClick={handleMenuClick}>
      {item}
     </Link>
    ))}
   </div>
  </nav>
 );
};

export default Nav;
