import "./Clients.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import { clientsData } from "../../data/clientsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Clients = () => {
 return (
  <section className="section our-client" id="clients">
   <div className="container flex-center">
    <SectionTitle title="Our Clients" subtitle="Our Clients" />
    <div className="our-client-wrapper">
     <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="client-swiper"
     >
      {clientsData.map((client) => (
       <SwiperSlide key={client.id}>
        <div className="swiper-slide swiper-client-block">
         <div className="client-img">
          <img src={client.imgSrc} alt="client1" />
         </div>
         <div className="client-details">
          <p>
           {client.description}
          </p>
          <h3>{client.name}</h3>
          <span>{client.position}</span>
         </div>
        </div>
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </div>
  </section>
 );
};

export default Clients;
