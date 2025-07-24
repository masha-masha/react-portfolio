import { services } from '../../data/services';
import ServiceModal from './ServiceModal';
import ServiceItem from './ServiceItem';
import SectionTitle from '../sectionTitle/SectionTitle';
import './Services.css';


const Services = () => {
 return (
  <section className='services section' id='services'>
   <div className='container flex-center'>
    <SectionTitle title="Services" subtitle="Services"/>
    <div className='services-wrapper'>
     <h3 className='services-description'>What I provide</h3>
     <ul className='services-list'>
      <ServiceItem services={services}/>
     </ul>
    </div>
   </div>
  </section>
 );
};

export default Services;
