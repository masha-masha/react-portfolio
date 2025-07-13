import { Link } from "react-scroll";
import "./Nav.css";

const Nav = ({ isMenuOpen }) => {
 const items = ["home", "about", "skills", "services", "portfolio", "contacts"];
 return (
  <nav className={isMenuOpen ? "nav nav-active" : "nav"}>
   <div className="nav-menu">
    {items.map((item, index) => (
     <Link to={item} key={index} className="nav-link">
      {item}
     </Link>
    ))}
   </div>
  </nav>
 );
};

export default Nav;
