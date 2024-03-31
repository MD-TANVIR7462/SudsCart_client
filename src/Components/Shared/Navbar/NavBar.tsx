import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function NavBar({ setIsMenuOpen, isMenuOpen }) {
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Categories", route: "categories" },
    { name: "Products", route: "products" },
    { name: "Flash Sale", route: "flash-sale" },
    { name: "About Us", route: "about" },
    { name: "Contact Us", route: "contact" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      shouldHideOnScroll
      height="90px"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold  text-green">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6  w-full" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold  text-green">ACME</p>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            className="text-black font-semibold hover:text-green"
          >
            <Link href={`/${item.route}`}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={`/${item.route}`} >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
