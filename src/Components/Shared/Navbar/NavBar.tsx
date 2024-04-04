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

export default function NavBar({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: any;
  isMenuOpen: boolean;
}) {
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Categories", route: "categories" },
    { name: "Products", route: "dishwashing-items/?category=&price=&rating=" },
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
      height="70px"
    >
      <NavbarContent className="sm:hidden  " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-lg">
            SudsCart
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6  w-full" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-lg">
            SudsCart
          </p>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            className="text-black font-semibold hover:text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600"
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
            <Link className="w-full" href={`/${item.route}`}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
