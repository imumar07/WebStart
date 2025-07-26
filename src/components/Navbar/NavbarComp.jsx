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
  { name: "Services", route: "#services" },
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
  className="text-color h-100px md:h-[100px] sm:h-[80px] font-body" // apply Nunito to overall nav
  maxWidth="full"
>
  {/* Logo Section */}
  <NavbarContent justify="start">
    <NavbarBrand className="font-heading"> {/* Apply Garamond to branding */}
      <img
        src={logo}
        alt="Tech"
        className="h-[100px] sm:h-[130px] w-auto"
      />
    </NavbarBrand>
    <NavbarMenuToggle
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="lg:hidden"
    />
  </NavbarContent>

  {/* Center Nav Links */}
  <NavbarContent justify="center" className="hidden lg:flex gap-6 font-2xl font-heading">
    {menuItems.map((item, index) => (
      <NavbarItem key={index} isActive={item.name === itemSelected}>
        <Link
          href={item.route}
          onClick={() => handleClick(item.name)}
          className={`px-3 py-1 rounded-xl transition-colors ${
            item.name === itemSelected
              ? "bg-green-500 text-white"
              : "text-black"
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
      href="https://www.instagram.com/thewebstart?igsh=dTFxZW0zYWcweWp6"
      color="primary"
      variant="flat"
      className="text-white bg-[#4588ff] hover:bg-[#3574e2] transition"
    >
      Join Community
    </Button>
  </NavbarContent>

  {/* Mobile Menu */}
  <NavbarMenu className="font-body">
    {menuItems.map((item, index) => (
      <NavbarMenuItem key={index}>
        <Link
          href={item.route}
          onClick={() => handleClick(item.name)}
          className={`px-3 py-2 rounded-xl transition-colors block ${
            item.name === itemSelected
              ? "bg-green-500 text-white"
              : "text-black"
          }`}
        >
          {item.name}
        </Link>
      </NavbarMenuItem>
    ))}
    <NavbarMenuItem>
      <Button
        as={Link}
        href="https://www.instagram.com/thewebstart?igsh=dTFxZW0zYWcweWp6"
        fullWidth
        className="mt-2 bg-[#4588ff] text-white"
      >
        Join Community
      </Button>
    </NavbarMenuItem>
  </NavbarMenu>
</Navbar>

  );
}
