import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ServiceModal = ({ item, isActive, setActiveIndex}) => {
 return (
  <>
   <div className={`service-modal ${isActive ? "active" : ""}`}>
    <div className="service-modal-body">
     <FaXmark className="modal-close-btn" onClick={() => setActiveIndex(false)}/>
     <h3>{item.title}</h3>
     <h4>{item.subtitle}</h4>
     <p>{item.description}</p>
     <ul>
      {item.list.map((item, index) => (
       <li key={index}>
        <FaCheckCircle/>
         {item}
       </li>
      ))}
     </ul>
    </div>
   </div>
  </>
 );
};

export default ServiceModal;
