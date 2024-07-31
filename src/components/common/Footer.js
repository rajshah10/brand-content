/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer class="bg-slate-50">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a class="flex items-center">
              <img src={require("../../assets/images/Logo.png")} class="h-40 me-3" alt="FlowBite Logo" />
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
              <ul class="text-gray-500  font-medium">
                <li onClick={() => navigate("/about")} class="mb-4 cursor-pointer">
                  <a class="hover:underline">About Us</a>
                </li>
                <li onClick={() => navigate("/faq")} class="mb-4 cursor-pointer">
                  <a class="hover:underline">FAQ</a>
                </li>
                <li onClick={() => navigate("/join")} class="mb-4">
                  <a class="hover:underline cursor-pointer">Join</a>
                </li>
                <li onClick={() => navigate("/events")}>
                  <a class="hover:underline cursor-pointer">Events</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
              <ul class="text-gray-500  font-medium">
                <li class="mb-4 flex gap-2 items-center cursor-pointer">
                <FacebookIcon/>
                  <a href="https://www.facebook.com/equellence/" target="_blank" class="hover:underline ">Facebook</a>
                </li>
                <li class="mb-4 flex gap-2 items-center cursor-pointer">
                  <YouTubeIcon/>
                  <a href="http://youtube.com/theequellencegroup" target="_blank" class="hover:underline ">YouTube</a>
                </li>
                <li class="flex gap-2 items-center cursor-pointer">
                 <InstagramIcon/>
                  <a href="https://www.instagram.com/theequellencegroup/" target="_blank" class="hover:underline ">Instagram</a>
                </li>
              </ul>
            </div>
            <div style={{visibility:"hidden"}}>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Subscribe</h2>
              <form action="#">
                <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row md:items-center lg:items-center gap-3">

                  <input
                    type="email"
                    class="w-full p-2.5 text-sm border border-gray-300 rounded-lg outline-none"
                    placeholder="Your email address"
                    required
                  />
                  <button
                    type="submit"
                    class="p-2.5 text-sm font-medium text-white bg-[#4F46E5] rounded-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { useNavigate } from "react-router";

// export default function Footer() {
//   const navigate = useNavigate();
//   return (
//     <footer className="bg-slate-50">
//       <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           {/* Logo Section */}
//           <div className="mb-6 md:mb-0">
//             <a className="flex items-center justify-center">
//               <img 
//                 src={require("../../assets/images/Logo.png")} 
//                 className="h-40" 
//                 alt="Logo" 
//               />
//             </a>
//           </div>
          
//           {/* Resources Section */}
//           <div className="flex justify-center">
//             <div className="mb-6 md:mb-0">
//               <h2 className="text-sm font-semibold text-gray-900 uppercase mb-4 text-center">Resources</h2>
//               <ul className="text-gray-500 font-medium">
//                 <li onClick={() => navigate("/about")} className="mb-4 cursor-pointer">
//                   <a className="hover:underline">About Us</a>
//                 </li>
//                 <li onClick={() => navigate("/faq")} className="mb-4 cursor-pointer">
//                   <a className="hover:underline">FAQ</a>
//                 </li>
//                 <li onClick={() => navigate("/join")} className="mb-4 cursor-pointer">
//                   <a className="hover:underline">Join</a>
//                 </li>
//                 <li onClick={() => navigate("/events")} className="cursor-pointer">
//                   <a className="hover:underline">Events</a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Follow Us Section */}
//           <div className="flex justify-center">
//             <div>
//               <h2 className="text-sm font-semibold text-gray-900 uppercase mb-4 text-center">Follow Us</h2>
//               <ul className="text-gray-500 font-medium">
//                 <li className="mb-4 flex gap-2 items-center cursor-pointer">
//                   <FacebookIcon />
//                   <a href="https://www.facebook.com/equellence/" target="_blank" className="hover:underline">Facebook</a>
//                 </li>
//                 <li className="mb-4 flex gap-2 items-center cursor-pointer">
//                   <YouTubeIcon />
//                   <a href="http://youtube.com/theequellencegroup" target="_blank" className="hover:underline">YouTube</a>
//                 </li>
//                 <li className="flex gap-2 items-center cursor-pointer">
//                   <InstagramIcon />
//                   <a href="https://www.instagram.com/theequellencegroup/" target="_blank" className="hover:underline">Instagram</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
