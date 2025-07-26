import FooterNav from "./FooterNav";
import FollowMe from "./FollowMe";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-main">
        <FooterNav />
        <FollowMe />
      </div> */}
      <div className="footer-bottom text-center flex flex-col ">
        <div>
          <p>
            Build with <span className="text-red-500 animate-pulse">♥</span> by WebStart
          {/* <span className="animate-pulse">♥</span> */}
          </p>
        </div>
        <div>
          <p>© 2025 The WebStart. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// import React from "react";
// import { Link } from "@nextui-org/react";
// import logo from "../../assets/logo_with_title.svg"; // adjust path if needed

// const Footer = () => {
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Team", href: "/team" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//   ];

//   return (
//     <footer className="bg-[#f9fafb] text-[#111827] py-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//         {/* Logo Section */}
//         <div className="flex justify-center md:justify-start">
//           <img src={logo} alt="Logo" className="h-12" />
//         </div>

//         {/* Navigation Links */}
//         <div className="flex justify-center space-x-6">
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Contact Section */}
//         <div className="flex flex-col items-center md:items-end text-center md:text-right">
//           <p className="text-gray-700">Contact us:</p>
//           <p className="text-gray-600">teamtechies@email.com</p>
//           <p className="text-gray-600">+91 98765 43210</p>
//         </div>
//       </div>

//       {/* Bottom line */}
//       <div className="mt-8 text-center text-sm text-gray-500">
//         © 2024 Team Techies. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
