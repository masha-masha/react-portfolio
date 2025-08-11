import ServiceModal from './ServiceModal';
import { ImArrowRight } from "react-icons/im";
import { useState } from 'react';
import { slideInVariants } from '../../utils/animation';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ServiceItem = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      {services.map((item, index) => (
      <motion.li 
        className="services-container" 
        key={index}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amout: 0.5}}
        variants={slideInVariants("top", 0.7, 50, true)}
        >
       <div className="service-card">
        <item.icon className="services-icon"/>
        <h3>{item.title}</h3>
        <div className="learn-more-btn" onClick={() => openModal(index)}>
         Learn More
         <ImArrowRight className="learn-more-icon"/>
        </div>
       </div>
       <ServiceModal item={item} isActive={activeIndex === index} setActiveIndex={setActiveIndex}/>
      </motion.li>
     ))}
    </>
   
  )
}

export default ServiceItem