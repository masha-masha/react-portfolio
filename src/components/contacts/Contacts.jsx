import "./Contacts.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactsLeft from "./ContactsLeft";
import ContactsRight from "./ContactsRight";


const Contacts = () => {
 return (
  <section className="contact section" id="contact">
   <div className="container flex-center">
    <SectionTitle title="Contact Me" subtitle="Contact Me"/>
    <div className="contact-wrapper">
     <ContactsLeft />
     <ContactsRight/> 
    </div>
   </div>
  </section>
 );
};

export default Contacts;
