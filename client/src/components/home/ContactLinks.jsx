import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
      {/* WhatsApp */}
      <a
  href="https://wa.me/919705130846?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Evoltriv's%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
>
  <FaWhatsapp size={24} />
</a>

      {/* Email */}
      <a
        href="mailto:evoltriv@gmail.com" // Replace with your email
        className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaEnvelope size={24} />
      </a>

      {/* Phone */}
      <a
        href="tel:+919705130846" // Replace with your phone number
        className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
