import ServiceModal from './ServiceModal';
import { ImArrowRight } from "react-icons/im";
import { useState } from 'react';

const ServiceItem = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      { services.map((item, index) => (
      <li className="services-container" key={index}>
       <div className="service-card">
        <item.icon className="services-icon"/>
        <h3>{item.title}</h3>
        <div className="learn-more-btn" onClick={() => openModal(index)}>
         Learn More
         <ImArrowRight className="learn-more-icon"/>
        </div>
       </div>
       <ServiceModal item={item} isActive={activeIndex === index} setActiveIndex={setActiveIndex}/>
      </li>
     ))}
    </>
   
  )
}

export default ServiceItem