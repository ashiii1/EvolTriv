// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";
// import { WobbleCard } from "../ui/wobble-card";
// import KeenSlider from "keen-slider";
// import "keen-slider/keen-slider.min.css";
// import ThunderEffect from '../home/ThunderEffect'
// import GridShowCase from '../home/GridShowCase'
// import Gif from '../home/Gif'
// import {
//   Shield,
//   Target,
//   Users,
//   Sun,
//   Award,
//   Rocket,
//   ArrowRight,
//   ArrowLeft,
//   CheckCircle2,
//   Building2,
//   TrendingUp,
//   Medal,
//   Leaf,
//   Zap,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import OurServices from "./OurServices";





// const values = [
//   {
//     icon: Sun,
//     title: "Solar Energy Solutions",
//     description:
//       "Providing cost-effective, and highly efficient solar installations and maintenance services for residential, businesses, industries, and agriculture. From installation to decommissioning, we handle every step of your system's lifecycle with care, expertise, and reliability",
//   },
//   {
//     icon: Zap,
//     title: "Electric Mobility",
//     description:
// "Developing smart and next-generation electric mobility solutions for sustainable transportation. We design, build, and maintain electric vehicle infrastructure and mobility systems tailored for cities, businesses, and individuals.",
//   },
//   {
//     icon: Users,
//     title: "Student Consulting",
//     description:
// "Empowering students with hands-on experience through real-world consulting projects and industry collaboration. We provide mentorship, resources, and opportunities for students to work on impactful solutions across diverse sectors. ",


//   },
// ];

// const images = [
//   {
//     src: "/assets/Images/oneevol.jpg",
//     title: "Driving Sustainable Energy, Smart Mobility Solutions, and Student Innovation",
//     description: "Student Driven Innovations, EvolTriv promises in shaping a greener and smarter future. With advancements in solar energy integration, we harness renewable power to drive sustainable solutions. Our vision is to create efficient and eco-friendly technologies for a better tomorrow."
//   },
//   {
//     src: "/assets/Images/neweb.jpg",
//     title: "E-Bike Manufacturing",
//     description: "Design and production of high-performance electric bicycles for urban and off-road use. Our e-bikes are engineered for efficiency, offering long battery life and powerful motors. Perfect for eco-friendly commuting and adventure enthusiasts alike."
//   },
//   {
//     src: "/assets/Images/thirdevol.jpeg",
//     title: "Hands-On Technical Training for Students",
//     description: "Comprehensive educational programs designed to empower students with real-world skills. We focus on interactive learning, mentorship, and hands-on experience. Helping students build a strong foundation for their future careers."
//   }
  
// ];

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8 },
// };


// export function WobbleCardDemo() {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };


//   return (
//     <>

//       {/* banner images */}
//       <div className="p-0 m-0  ">
//         <div className="relative h-[90vh] w-full overflow-hidden ">

//           {images.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: currentIndex === index ? 1 : 0 }}
//               transition={{ duration: 0.8 }}
//               className={`absolute inset-0 w-full h-full ${currentIndex === index ? "block" : "hidden"}`}
//             >
//               <img src={image.src} alt={image.title} className="w-full  h-full object-cover" />
//               <div className="absolute  inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
//                 <div className="text-center text-white max-w-4xl">
//                   <h1 className="text-4xl md:text-5xl font-bold mb-4">{image.title}</h1>
//                   <p className="text-lg md:text-xl text-gray-200">{image.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//           <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
//             <ArrowLeft className="w-6 h-6" />
//           </button>
//           <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
//             <ArrowRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>



//       {/* <ThunderEffect/> */}


//       <div className=" mx-auto w-full space-y-8  dark:bg-black ">
//         <div className="relative  py-20 bg-gradient-to-b from-[#118B50]/10 to-transparent overflow-hidden">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="relative max-w-7xl mx-auto px-4 text-center space-y-8 mb-6"
//           >
//             <motion.h3
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-4xl md:text-6xl font-bold tracking-tight"
//             >
//               Driving the Future with <span className="text-[#118B50] dark:text-blue-700 relative">Sustainable Solutions, and Hands-On Learning</span>
//             </motion.h3>
//            <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg lg:text-xl dark:text-white leading-relaxed text-center px-4">
//   At our core, we are committed to transforming renewable energy, smart mobility, and hands-on technical education—while continuously expanding into new frontiers to build a sustainable, innovation-driven future.
// </p>

//           </motion.div>
//         </div>


//         {/* <Gif/> */}

//         {/* Mission & Vision Section */}
//         {/* Mission & Vision Section */}

//   <div className="max-w-7xl mx-auto px-4 mb-20">
//   <div className="grid md:grid-cols-2 gap-8">
//     {/* Mission Card */}
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5, scale: 1.02 }}
//       transition={{ duration: 0.4 }}
//       className="flex flex-col justify-between bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group h-full"
//     >
//       {/* Decorative bubble */}
//       <div className="absolute dark:bg-blue-900 top-0 right-0 w-40 h-40 bg-[#118B50]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />

//       <div className="relative flex flex-col gap-4 h-full">
//         {/* Title */}
//         <div className="flex items-center gap-3">
//           <motion.div whileHover={{ rotate: 15 }} className="p-3 bg-[#118B50]/10 rounded-xl">
//             <Sun className="text-[#118B50] dark:text-blue-700 w-6 h-6" />
//           </motion.div>
//           <h2 className="text-2xl font-bold">Our Mission</h2>
//         </div>

//         {/* Paragraph */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-gray-600 dark:text-white text-[17px] leading-[1.7] text-justify tracking-normal"
//         >
//           Our mission is to empower communities and industries through sustainable practices that combine renewable energy, smart mobility, and hands-on innovation. We aim to bridge the gap between technology and real-world results by offering practical support, efficient systems, and future-ready solutions. As we grow, we’re dedicated to expanding our reach across new areas in sustainability, shaping a smarter, cleaner, and more resilient future for all.
//         </motion.p>
//       </div>
//     </motion.div>

//     {/* Vision Card */}
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5, scale: 1.02 }}
//       transition={{ duration: 0.4 }}
//       className="flex flex-col justify-between bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group h-full"
//     >
//       {/* Decorative bubble */}
//       <div className="absolute dark:bg-blue-900 top-0 right-0 w-40 h-40 bg-[#009a8d]/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />

//       <div className="relative flex flex-col gap-4 h-full">
//         {/* Title */}
//         <div className="flex items-center gap-3">
//           <motion.div whileHover={{ rotate: -15 }} className="p-3 bg-[#118B50]/10 rounded-xl">
//             <Target className="text-[#009a8d] dark:text-blue-700 w-6 h-6" />
//           </motion.div>
//           <h2 className="text-2xl font-bold">Our Vision</h2>
//         </div>

//         {/* Paragraph */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-gray-600 dark:text-white text-[17px] leading-[1.7] text-justify tracking-normal"
//         >
//           Our vision is to lead in sustainable innovation by shaping the future of clean energy, smart mobility, and practical technology education. We imagine a world where sustainability is inclusive, innovation is applied, and every solution we build supports a healthier planet and a smarter tomorrow.
//         </motion.p>
//       </div>
//     </motion.div>
//   </div>
// </div>



// <div className="pt-24 ">
//         {/* <GridShowCase /> */}
//         </div>

//         {/* core values */}
//         <div className="bg-gradient-to-b to-[#118B50]/10 from-transparent dark:bg-[#00005c] pb-24 pt-24">
//           <div className="max-w-7xl mx-auto px-4 ">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               Our Core Values
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {values.map((value, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="bg-white dark:bg-black p-6 rounded-xl shadow-lg text-center">
//                   <value.icon className="w-12 h-12 text-[#118B50] dark:text-blue-800  mx-auto mb-1" />
//                   <h3 className="text-xl font-bold mb-2">{value.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-200">{value.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>


//         <OurServices />


//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import ThunderEffect from '../home/ThunderEffect';
import GridShowCase from '../home/GridShowCase';
import Gif from '../home/Gif';
import {
  Shield,
  Target,
  Users,
  Sun,
  Award,
  Rocket,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  TrendingUp,
  Medal,
  Leaf,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import OurServices from "./OurServices";

// Import videos for Mission & Vision
import missionVideo from "../../assets/Videos/vision.mp4";
import visionVideo from "../../assets/Videos/vision.mp4";

const values = [
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    description:
      "Providing cost-effective, and highly efficient solar installations and maintenance services for residential, businesses, industries, and agriculture. From installation to decommissioning, we handle every step of your system's lifecycle with care, expertise, and reliability",
  },
  {
    icon: Zap,
    title: "Electric Mobility",
    description:
      "Developing smart and next-generation electric mobility solutions for sustainable transportation. We design, build, and maintain electric vehicle infrastructure and mobility systems tailored for cities, businesses, and individuals.",
  },
  {
    icon: Users,
    title: "Student Consulting",
    description:
      "Empowering students with hands-on experience through real-world consulting projects and industry collaboration. We provide mentorship, resources, and opportunities for students to work on impactful solutions across diverse sectors.",
  },
];

const images = [
  {
    src: "/assets/Images/oneevol.jpg",
    title: "Driving Sustainable Energy, Smart Mobility Solutions, and Student Innovation",
    description:
      "Student Driven Innovations, EvolTriv promises in shaping a greener and smarter future. With advancements in solar energy integration, we harness renewable power to drive sustainable solutions. Our vision is to create efficient and eco-friendly technologies for a better tomorrow."
  },
  {
    src: "/assets/Images/neweb.jpg",
    title: "E-Bike Manufacturing",
    description:
      "Design and production of high-performance electric bicycles for urban and off-road use. Our e-bikes are engineered for efficiency, offering long battery life and powerful motors. Perfect for eco-friendly commuting and adventure enthusiasts alike."
  },
  {
    src: "/assets/Images/thirdevol.jpeg",
    title: "Hands-On Technical Training for Students",
    description:
      "Comprehensive educational programs designed to empower students with real-world skills. We focus on interactive learning, mentorship, and hands-on experience. Helping students build a strong foundation for their future careers."
  }
];

export function WobbleCardDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* Banner Slider */}
      <div className="p-0 m-0">
        <div className="relative h-[90vh] w-full overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 w-full h-full ${currentIndex === index ? "block" : "hidden"}`}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{image.title}</h1>
                  <p className="text-lg md:text-xl text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Intro Section */}
      <div className="mx-auto w-full space-y-8 dark:bg-black">
        <div className="relative py-20 bg-gradient-to-b from-[#118B50]/10 to-transparent overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative max-w-7xl mx-auto px-4 text-center space-y-8 mb-6"
          >
            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Driving the Future with{" "}
              <span className="text-[#118B50] dark:text-blue-700 relative">
                Sustainable Solutions, and Hands-On Learning
              </span>
            </motion.h3>
            <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg lg:text-xl dark:text-white leading-relaxed text-center px-4">
              At our core, we are committed to transforming renewable energy, smart mobility, and hands-on technical education—while continuously expanding into new frontiers to build a sustainable, innovation-driven future.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision Section with Videos */}
<div className="max-w-7xl mx-auto px-4 mb-20">
  <div className="grid md:grid-cols-2 gap-8">
    {/* Mission */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-start bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div whileHover={{ rotate: 15 }} className="p-3 bg-[#118B50]/10 rounded-xl">
          <Sun className="text-[#118B50] dark:text-blue-700 w-6 h-6" />
        </motion.div>
        <h2 className="text-2xl font-bold">Our Mission</h2>
      </div>

      <div className="rounded-lg overflow-hidden mb-4">
        <video
          src={missionVideo}
          className="w-full h-[250px] object-cover rounded-lg"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <p className="text-gray-600 dark:text-white text-[16px] leading-[1.6] text-justify tracking-normal">
        Our mission is to empower communities and businesses through sustainable solutions in renewable energy, smart mobility, and practical innovation. We aim to bridge the gap between technology and real-world results, delivering efficient systems and future-ready support for a cleaner, smarter future.
      </p>
    </motion.div>

    {/* Vision */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-start bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div whileHover={{ rotate: -15 }} className="p-3 bg-[#118B50]/10 rounded-xl">
          <Target className="text-[#009a8d] dark:text-blue-700 w-6 h-6" />
        </motion.div>
        <h2 className="text-2xl font-bold">Our Vision</h2>
      </div>

      <div className="rounded-lg overflow-hidden mb-4">
        <video
          src={visionVideo}
          className="w-full h-[250px] object-cover rounded-lg"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <p className="text-gray-600 dark:text-white text-[16px] leading-[1.6] text-justify tracking-normal">
        Our vision is to drive sustainable innovation by shaping the future of clean energy, smart mobility, and hands-on technology education. We imagine a world where every solution supports a healthier planet and smarter communities.
      </p>
    </motion.div>
  </div>
</div>


       
<div className="pt-24 ">
        {/* <GridShowCase /> */}
        </div>

        {/* core values */}
        <div className="bg-gradient-to-b to-[#118B50]/10 from-transparent dark:bg-[#00005c] pb-24 pt-0">
          <div className="max-w-7xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-black p-6 rounded-xl shadow-lg text-center">
                  <value.icon className="w-12 h-12 text-[#118B50] dark:text-blue-800  mx-auto mb-1" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        <OurServices />


      </div>
    </>
  );
}