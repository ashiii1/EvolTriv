import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";



import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// User Pages
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import ServicesPage from "@/pages/ServicesPage";
// import BlogsPage from "@/pages/BlogsPage";
import EventsPage from "@/pages/EventsPage";
import ContactPage from "@/pages/ContactPage";
import GalleryPage from "@/pages/GalleryPage";


// Admin Pages
import AdminLoginPage from "@/pages/AdminLoginPage";
import DashboardPage from "@/pages/DashboardPage";
import BlogManagement from "@/pages/BlogManagement";
import EventManagement from "@/pages/EventManagement";

// SEO Metadata for each route
const routeMetadata = {
  home: {
    title: "EvolTriv | Powering India with Affordable Solar, E-mobility & Smart Student Support",
    description:
      "EvolTriv brings affordable and high-efficient clean energy to your homes, institutions, and farms. From solar energy solutions to E-bikes and Student support, we make india's future smarter and greener.| Trusted by indian households , students and farmers. Join us in our mission to build a cleaner and smarter india",
    keywords:
      "evoltriv, Solar, student support, indias biggest business, solar PV consulting, electric mobility, sustainable energy, e-bikes, renewable energy, EvolTriv",
  },
  about: {
    title: "About EvolTriv | Pioneering Clean Energy & Mobility",
    description:
      "Learn how EvolTriv is leading the way in solar energy consulting, e-mobility solutions, and hands-on technical education for students and professionals.",
    keywords:
      "about EvolTriv, clean energy company, solar expertise, e-mobility, project consulting",
  },
  products: {
    title: "Our Services | EvolTriv",
    description:
      "Explore EvolTriv’s advanced solar services and e-mobility solutions, including solar panels, inverters, batteries, and electric bicycles.",
    keywords:
      "solar panels, solar inverters, electric bikes, renewable energy solutions, sustainable transportation",
  },
  services: {
    title: "Our Services | EvolTriv",
    description:
      "EvolTriv offers solar consulting, e-bike design, and project-based learning programs for students and professionals.",
    keywords:
      "solar consulting, electric bike manufacturing, technical project guidance, renewable energy services",
  },
  blogs: {
    title: "Insights & Updates | EvolTriv Blog",
    description:
      "Stay updated with the latest in solar energy, electric mobility, and hands-on technical innovations at EvolTriv.",
    keywords:
      "solar energy blog, electric mobility news, renewable energy insights, sustainability trends",
  },
  events: {
    title: "Workshops & Events | EvolTriv",
    description:
      "Join our workshops and events on renewable energy, electric mobility, and hands-on technical projects.",
    keywords:
      "solar workshops, e-bike training, technical learning, clean energy events",
  },
  contact: {
    title: "Contact EvolTriv | Get in Touch",
    description:
      "Reach out to EvolTriv for expert consulting on solar energy, e-mobility, and technical project guidance.",
    keywords:
      "contact EvolTriv, solar consulting, electric mobility inquiries, project guidance",
  },
  gallery: {
    title: "Gallery | EvolTriv",
    description:
      "Join our workshops and events on renewable energy, electric mobility, and hands-on technical projects.",
    keywords:
      "solar workshops, e-bike training, technical learning, clean energy events",
  },
};



const PageHelmet = ({ metadata }) => {
  const currentUrl = `https://www.evoltriv.com${window.location.pathname}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title,
    description: metadata.description,
    url: currentUrl,
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.evoltriv.com/assets/Images/evoltriv.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content="https://www.evoltriv.com/assets/Images/evoltriv.jpg" />

      {/* Schema.org */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>   
      <ScrollToTop />
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<><PageHelmet metadata={routeMetadata.home} /><HomePage /></>} />
          <Route path="about" element={<><PageHelmet metadata={routeMetadata.about} /><AboutPage /></>} />
          <Route path="products" element={<><PageHelmet metadata={routeMetadata.products} /><ProductsPage /></>} />
          <Route path="services" element={<><PageHelmet metadata={routeMetadata.services} /><ServicesPage /></>} />
          {/* <Route path="blogs" element={<><PageHelmet metadata={routeMetadata.blogs} /><BlogsPage /></>} /> */}
          <Route path="events" element={<><PageHelmet metadata={routeMetadata.events} /><EventsPage /></>} />
          <Route path="contact" element={<><PageHelmet metadata={routeMetadata.contact} /><ContactPage /></>} />
          <Route path="gallery" element={<><PageHelmet metadata={routeMetadata.gallery}/><GalleryPage/></>}/>
        </Route>

        <Route path="admin">
          <Route index element={<><PageHelmet metadata={routeMetadata.adminLogin} /><AdminLoginPage /></>} />
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<><PageHelmet metadata={routeMetadata.dashboard} /><DashboardPage /></>} />
            <Route path="blogs" element={<><PageHelmet metadata={routeMetadata.blogManagement} /><BlogManagement /></>} />
            <Route path="events" element={<><PageHelmet metadata={routeMetadata.eventManagement} /><EventManagement /></>} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />

    </>
  );
};

export default App;
