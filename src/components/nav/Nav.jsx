import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
 const items = ["home", "about", "skills","services","portfolio","contacts"];
 return (
  <nav className="nav nav-menu">
   {items.map((item, index)=> (
    <Link 
    to={item}  
    key={index}
    className="nav-link"
    >{item}</Link>
   )
   )}
   {/* <ul className="nav-menu">
    <li className="nav-item">
     <a href="" className="nav-link">
      home
     </a>
    </li>
    <li className="nav-item">
     <a href="" className="nav-link">
      About
     </a>
    </li>
    <li className="nav-item">
     <a href="" className="nav-link">
      Skills
     </a>
    </li>
    <li className="nav-item">
     <a href="" className="nav-link">
      Services
     </a>
    </li>
    <li className="nav-item">
     <a href="" className="nav-link">
      Portfolio
     </a>
    </li>
    <li className="nav-item">
     <a href="" className="nav-link">
      Contacts
     </a>
    </li>
   </ul> */}

  </nav>
 );
};

export default Nav;
