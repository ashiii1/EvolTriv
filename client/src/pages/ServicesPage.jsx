import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/Assets";
import ProductsPage from "../pages/ProductsPage";
import {
  Sun,
  Building2,
  Battery,
  Wrench,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Solar Energy Solutions",
    image: "https://www.soleosenergy.com/wp-content/uploads/2024/09/1650368737-5-environmental-benefits-of-solar-energy.jpg",
    icon: Sun,
    description:
    "Harnessing Sun’s Energy to Power Residential, Businesses, Industrial, and Agriculture Sector – Delivering Sustainable, Efficient, and Innovative Solar Solutions.",
    benefits: [
      " Sustainable Energy",
      " Reduced Carbon Emissions",
     " Reduced Electricity Bills",
     " Lower Operational Costs",
     " Tax Benefits",
     " ROI within 3-5 years",
     " Highly Efficient Panels",
     " 25+ years Reliability",
     " Smart Maintenance"
    ],
    stats: {
      installations: "500+",
      satisfaction: "98%",
      savings: "40%",
    },
  },
  
  {
    title: "Electric Mobility Solutions",
    image: "https://images.squarespace-cdn.com/content/v1/5abfd225fcf7fd318b9d1fce/d8019050-867b-46ea-89f3-5b6b74506ab0/ciclo-ebikes.com+%7C+2019.09.30+%7C+177.jpg",
    icon: Battery,
    description:
    "Experience the future of mobility with our advanced e-bike solutions, offering a perfect blend of efficiency, Internet of Things, and performance.",
    benefits: [
      " Eco- Friendly Transportation",
" Cost Effective",
" Health Benefits",
" Convenient & Time-Saving",
" Less Maintenance"
    ],
    stats: {
      reliability: "99.9%",
      response: "2hrs",
      backup: "48hrs",
    },
  },
  {
    title: "Student Support",
    image: "https://mariposabicycles.ca/wp-content/uploads/2019/11/coc19-1010-bike-shop-george-harvey02.jpg",
    icon: Wrench,
    description:
    "Empowering students with hands-on experience and guidance in renewable energy, e-mobility, and Internet of Things.",
    benefits: [
      "Expert mentorship",
      "Industry insights",
      "Hands-on learning",
      "Innovative projects",
      "Prototyping support",
      "Career guidance"
    ],
    stats: {
      uptime: "99.9%",
      response: "4hrs",
      support: "24/7",
    },
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">
    

    {/* <ProductsPage/> */}
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://www.sembcorp.com/media/cj4fyspz/rtsbanner-1510x450.jpg?width=1510&height=450&quality=100&v=133685230918630000&format=webp"
          alt="Rooftop Solar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Driving Sustainable Energy, Smart Mobility Solutions, and
             Student Innovation</h1>
<p className="text-lg md:text-xl text-gray-200 mb-8">
Student Driven Innovations, EvolTriv
promises in shaping a greener and smarter future.  
</p>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#009a8d] hover:bg-[#008075] text-white px-8 py-3 rounded-lg flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-6 right-6 w-12 h-12 text-white" />
                </motion.div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600">{service.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-[#118B50]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>




                <div className="grid grid-cols-3 gap-4 pt-6">
                  {Object.entries(service.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-[#118B50]">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>


          <div className="pl-12 pt-8">    
                <Link to={"/products"}>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#118B50] text-white px-6 py-3 rounded-lg flex items-center ">
    Explore Now
    <ArrowRight className="ml-2 h-5 w-5" />
  </motion.button>
</Link>
</div>  
              </div>
            </motion.div>
          ))}
        </div>
      </div>


<ProductsPage/>

      {/* CTA Section
      <div className="bg-[#C1D8C3] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-black">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">
  Ready to Power Your Journey?
</h2>
<p className="text-xl text-black mb-8 max-w-2xl mx-auto">
  Get in touch today to explore cutting-edge e-bikes, innovative solar solutions, 
  and hands-on student projects that drive a sustainable future.
</p>

            <Link to={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#118B50] text-white px-8 py-3 rounded-lg flex items-center mx-auto">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </motion.button>
            </Link>
          </motion.div>
           </div>
        </div> */}
     
    </div>
  );
};

export default ServicesPage;
