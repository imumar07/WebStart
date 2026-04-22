import React, { useEffect } from "react";
import logo from "../../assets/logo_with_title.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import "./index.css";

export default function NavbarComp() {
  const [itemSelected, setItemSelected] = React.useState("Home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
  { name: "Home", route: "/" },
  // { name: "Services", route: "#services" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
];


  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = menuItems.find((item) => item.route === currentPath);
    if (currentItem) setItemSelected(currentItem.name);
  }, []);

  const handleClick = (name) => {
    setItemSelected(name);
  };

  return (
    // Inside return(...)

<Navbar
  onMenuOpenChange={setIsMenuOpen}
  isBordered
  className="text-color h-[72px] sm:h-[80px] md:h-[92px] font-body bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-sm"
  maxWidth="full"
>
  {/* Logo Section */}
  <NavbarContent justify="start">
    <NavbarBrand className="font-heading"> {/* Apply Garamond to branding */}
      <img src={logo} alt="Tech" className="h-[56px] sm:h-[72px] md:h-[86px] w-auto" />
    </NavbarBrand>
    <NavbarMenuToggle
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="lg:hidden"
    />
  </NavbarContent>

  {/* Center Nav Links */}
  <NavbarContent justify="center" className="hidden lg:flex gap-4 font-2xl font-heading">
    {menuItems.map((item, index) => (
      <NavbarItem key={index} isActive={item.name === itemSelected}>
        <Link
          href={item.route}
          onClick={() => handleClick(item.name)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            item.name === itemSelected
              ? "bg-gradient-to-r from-[#4588ff] to-[#36b4ff] text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {item.name}
        </Link>
      </NavbarItem>
    ))}
  </NavbarContent>

  {/* Button Section */}
  <NavbarContent justify="end" className="hidden lg:flex font-body">
  <Button
    as={Link}
    href="mailto:info@thewebstart.in"
    color="primary"
    variant="flat"
    className="text-white bg-gradient-to-r from-[#4588ff] to-[#36b4ff] hover:opacity-95 transition gap-2 rounded-full px-5 shadow-md"
  >
    
    Email Us
  
    <i className="fa-regular fa-envelope"></i>
  </Button>
</NavbarContent>


  {/* Mobile Menu */}
  <NavbarMenu className="font-body pt-6">
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={index}>
        <Link
          href={item.route}
          onClick={() => handleClick(item.name)}
          className={`px-4 py-3 rounded-xl transition-colors block text-base ${
            item.name === itemSelected
              ? "bg-gradient-to-r from-[#4588ff] to-[#36b4ff] text-white"
              : "text-gray-700"
          }`}
        >
          {item.name}
        </Link>
      </NavbarMenuItem>
    ))}
    <NavbarMenuItem>
      <Button
        as={Link}
        href="mailto:info@thewebstart.in"
        fullWidth
        className="mt-2 bg-gradient-to-r from-[#4588ff] to-[#36b4ff] text-white"
      >
        Email Us
      </Button>
    </NavbarMenuItem>
  </NavbarMenu>
</Navbar>

  );
}
