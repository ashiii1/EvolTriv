// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "./ui/button";

// const Footer = () => {
 
//   const events = [
//     { event: "Latest News", link: "/events" },
//     { event: "Upcoming Events", link: "/events" },
//     { event: "Media Gallery", link: "/gallery" },
//   ];

//   return (
//     <footer className="w-full dark:bg-[#00005c] mx-auto bg-[#000000] my-5 md:my-10 py-6 md:py-12 rounded-lg md:rounded-xl">
//       <div className="w-[80vw] mx-auto grid gap-y-10 gap-x-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white">
//         {/* about us */}
//         <div>
//           <h4 className="text-lg font-medium pb-1">About Us</h4>
//           <p className="text-[16px] leading-[1.15] opacity-95 pb-3">
// EvolTriv delivers high-efficient, cost-effective renewable energy solutions, eco-
// friendly e-mobility services, and practical training and consulting for students and businesses
// seeking to embrace sustainability and drive real-world impact.
//           </p>
//           <h4 className="text-lg font-medium pb-2">Follow us</h4>
//           <div className="flex gap-3 mb-4">
            
            // <div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover pl-1">
            //   <a href="https://www.facebook.com/share/16Xtt4taog/" target="_blank" rel="noopener noreferrer">

            //     <svg
            //       className="h-4 fill-white svg-hover"
            //       viewBox="0 0 12 10"
            //       xmlns="http://www.w3.org/2000/svg">
            //       <path d="M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08697L6.80791 6.75026H4.94376V12.3038H2.70873Z" />
            //     </svg>
            //   </a>
            // </div>
            // <div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover">
            //   <a href="https://www.instagram.com/evoltriv_official?igsh=MWIzbGE2c2ttMDYyeQ==" target="_blank" rel="noopener noreferrer">

            //     <svg
            //       className="w-4 fill-white svg-hover"
            //       viewBox="0 0 14 14"
            //       xmlns="http://www.w3.org/2000/svg">
            //       <path d="M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z" />
            //       <path d="M7.00215 3.52344C6.31412 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93482C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08688 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021V9.26021Z" />
            //       <path d="M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z" />
            //     </svg>
            //   </a>
            // </div>
            // <div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover">
            //   <a href="https://www.linkedin.com/company/evoltriv/" target="_blank" rel="noopener noreferrer">
            //     <svg
            //       className="w-4 h-4 fill-current text-white svg-hover" // Changed text-zinc-700 to text-white
            //       viewBox="0 0 24 24"
            //       xmlns="http://www.w3.org/2000/svg"
            //     >
            //       <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            //     </svg>
            //   </a>
            // </div>
//           </div>
         
//         </div>
//         {/* Services */}
       

//         {/* Event and Media */}
//         <div className="flex flex-col gap-2">
//           <h4 className=" text-lg font-medium pb-2">Event and Media</h4>
//           {events.map((item, index) => (
//             <Link
//               to={item.link}
//               key={index}
//               className="text-[16px] opacity-75 hover:opacity-100">
//               {item.event}
//             </Link>
//           ))}
//         </div>
//         {/* Contact Us */}

//         <div className="flex flex-col gap-2">
//           <h4 className=" text-lg font-medium pb-2">Contact Us</h4>
//           {/* Add actual contact information here */}
//           <a
//             href="mailto:evoltriv@gmail.com"
//             className="text-[16px] opacity-75 hover:opacity-100">
//             Email: evoltriv@gmail.com
//           </a>
//           <p className="text-[16px] opacity-75">
//             Phone: 9705130846
//           </p>
//           <p className="text-[16px] opacity-75">
//             Address: Vijayawada, Andhra Pradesh, India
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const events = [
    { event: "Latest News", link: "/events" },
    { event: "Upcoming Events", link: "/events" },
    { event: "Media Gallery", link: "/gallery" },
  ];

  return (
<footer className="w-full dark:bg-[#00005c] mx-auto bg-[#000000] mt-0 mb-0 py-6 md:py-12 rounded-lg md:rounded-xl text-white">
      <div className="w-[90vw] mx-auto grid gap-y-10 gap-x-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img
            src="/favicon.png" // Replace with your actual logo path
            alt="EvolTriv Logo"
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Event and Media */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-medium pb-2">Event and Media</h4>
          {events.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="text-[16px] opacity-75 hover:opacity-100"
            >
              {item.event}
            </Link>
          ))}
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-medium pb-2">Contact Us</h4>
          <a
            href="mailto:evoltriv@gmail.com"
            className="text-[16px] opacity-75 hover:opacity-100"
          >
            Email: evoltriv@gmail.com
          </a>
          <p className="text-[16px] opacity-75">Phone: +91  9705130846</p>
          <p className="text-[16px] opacity-75">
            Address: Vijayawada, Andhra Pradesh, India
          </p>
        </div>

        {/* About Us at far right */}
        <div>
          <h4 className="text-lg font-medium pb-1">About Us</h4>
          <p className="text-[16px] leading-[1.15] opacity-95">
            EvolTriv delivers high-efficient, cost-effective renewable energy
            solutions, eco-friendly e-mobility services, and practical training
            and consulting for students and businesses seeking to embrace
            sustainability and drive real-world impact.
          </p>
        </div>
      </div>

      {/* Follow Us Section at Bottom Centered */}
      <div className="mt-10 flex flex-col items-center">
        <h4 className="text-lg font-medium pb-3">Follow us</h4>
        <div className="flex gap-4">
         <div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover pl-1">
              <a href="https://www.facebook.com/share/16Xtt4taog/" target="_blank" rel="noopener noreferrer">

                <svg
                  className="h-4 fill-white svg-hover"
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08697L6.80791 6.75026H4.94376V12.3038H2.70873Z" />
                </svg>
              </a>
            </div>

          {/* Instagram */}
          <div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover">
              <a href="https://www.instagram.com/evoltriv_official?igsh=MWIzbGE2c2ttMDYyeQ==" target="_blank" rel="noopener noreferrer">

                <svg
                  className="w-4 fill-white svg-hover"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z" />
                  <path d="M7.00215 3.52344C6.31412 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93482C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08688 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021V9.26021Z" />
                  <path d="M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z" />
                </svg>
              </a>
            </div>
          {/* LinkedIn */}
         <div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover">
              <a href="https://www.linkedin.com/company/evoltriv/" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-4 h-4 fill-current text-white svg-hover" // Changed text-zinc-700 to text-white
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>


<div className="w-7 h-7 rounded border border-zinc-300 flex justify-center items-center icon-hover">
  <a
    href="https://wa.me/919705130846?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Evoltriv's%20services."
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="w-4 h-4 fill-current text-white svg-hover"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.001 0.003c-8.836 0-16 7.164-16 16 0 2.813 0.729 5.582 2.105 8.013l-2.207 8.013 8.271-2.164c2.325 1.27 4.944 1.937 7.83 1.937h0c8.836 0 16-7.164 16-16s-7.164-16-16-16zM16.001 29.096c-2.561 0-5.063-0.686-7.25-1.986l-0.52-0.303-4.908 1.283 1.3-4.789-0.339-0.54c-1.27-2.022-1.941-4.357-1.941-6.761 0-7.117 5.79-12.907 12.907-12.907s12.907 5.79 12.907 12.907c0 7.117-5.79 12.907-12.907 12.907z"></path>
      <path d="M24.061 19.158c-0.375-0.188-2.219-1.094-2.561-1.219s-0.594-0.188-0.844 0.188-0.969 1.219-1.188 1.469c-0.219 0.219-0.438 0.25-0.813 0.063s-1.594-0.594-3.031-1.906c-1.125-1-1.875-2.219-2.094-2.594-0.219-0.375-0.031-0.578 0.156-0.75 0.156-0.156 0.375-0.406 0.563-0.625 0.188-0.219 0.25-0.375 0.375-0.625s0.063-0.469-0.031-0.656c-0.094-0.188-0.844-2.031-1.156-2.781-0.312-0.75-0.625-0.656-0.844-0.656s-0.438-0.031-0.688-0.031c-0.25 0-0.656 0.094-1 0.469-0.344 0.375-1.313 1.281-1.313 3.125s1.344 3.625 1.531 3.875c0.188 0.25 2.625 4 6.375 5.625 0.891 0.375 1.594 0.594 2.125 0.75 0.891 0.281 1.703 0.25 2.344 0.156 0.719-0.094 2.219-0.906 2.531-1.781 0.312-0.875 0.312-1.625 0.219-1.781-0.094-0.156-0.344-0.25-0.719-0.438z"></path>
    </svg>
  </a>
</div>




        </div>
                <p className="mt-5 text-sm opacity-75">© EvolTriv 2025. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
