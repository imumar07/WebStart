import { Link } from "@nextui-org/react";
import logo from "../../assets/favicon.svg"; // Adjust path if needed

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // { name: "Services", href: "/services" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-[60px]" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-gray-300">Contact us:</p>
          <p className="text-gray-400">info@thewebstart.com</p>
          {/* <p className="text-gray-400">+91 6305535725</p> */}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {currentYear} The WebStart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
