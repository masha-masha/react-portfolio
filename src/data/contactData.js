import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { PiPhone } from "react-icons/pi";

export const contactData = [
    {
        id: 1,
        icon: FaPhone,
        title: "Phone",
        value: "+00 123-777-9999",
        link: "tel:001237779999"

    },

    {
        id: 2,
        icon: FaEnvelope,
        title: "Email Address",
        value: "ilay@email.com",
        link: "mailto:ilay@еmail.com"
    },
    {
        id: 3,
        icon: FaLocationDot,
        title: "Official Address",
        value: "Sweden, Goteborg 415 17",
        link: "#",
    }

];