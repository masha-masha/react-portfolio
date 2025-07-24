import { ImArrowRight } from "react-icons/im";

const ServiceItem = ({ services }) => {
  return (
    <>
      { services.map((item, index) => (
      <li className="services-container" key={index}>
       <div className="service-card">
        <item.icon className="services-icon"/>
        <h3>{item.title}</h3>
        <div className="learn-more-btn">
         Learn More
         <ImArrowRight className="learn-more-icon"/>
        </div>
       </div>
      </li>
     ))}
    </>
   
  )
}

export default ServiceItem