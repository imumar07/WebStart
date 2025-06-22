import React, { useEffect } from "react";
import logo from "../../assets/logo_with_title.svg" 
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
    { name: "About Us", route: "/about" },

  ];

  // Update itemSelected based on the current path
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentItem = menuItems.find(item => item.route === currentPath);
    if (currentItem) {
      setItemSelected(currentItem.name);
    }
  }, []);

  const handleClick = (name) => {
    setItemSelected(name);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="text-color md:h-[120px] sm:h-[60px]" maxWidth="full" >
      {/* Logo content */}
      <NavbarContent justify="start" className="h-full w-full">
        <NavbarBrand className="flex flex-row justify-start">
          <img src={logo} alt="Tech" className="h-[100px] w-full sm:h-[160px] sm:w-[200px] lg:h-[200px] lg:w-[350px]" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="visible"
        />
      </NavbarContent>

  
       <NavbarContent className="hidden lg:flex gap-5" justify="start">
        {menuItems.slice(0, 7).map((item, index) => (
          <NavbarItem key={index} isActive={item.name === itemSelected}>
            <Link
              href={item.route}
              className="text-black hover:text-gray-600"
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
           (
            <NavbarMenuItem key={index} isActive={item.name === itemSelected}>
              <Link
                href={item.route}
                className="text-black hover:text-gray-600"
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          )
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
