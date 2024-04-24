import { logoutUser } from "@/Services/Auth/Logout";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import Link from "next/link";
import { toast } from "sonner";

export default function NavBar({
  setIsMenuOpen,
  isMenuOpen,
  user,
  router 

}: {
  setIsMenuOpen: any;
  isMenuOpen: boolean;
  user: any;
  router : any

}) {
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Categories", route: "categories" },
    { name: "Products", route: "dishwashing-items/?category=&price=&rating=" },
    { name: "Flash Sale", route: "flash-sale" },
    { name: "About Us", route: "about" },
    { name: "Contact Us", route: "contact" },
  ];

  const handleLogout = () => {
    logoutUser();
    toast.success("User Logout Successfully")
    router.refresh()

  };

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
          <p className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-xl">
            SudsCart
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6  w-full" justify="center">
        <NavbarBrand>
          <p className="font-bold  text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-xl">
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

      <NavbarContent justify="end">
        {user?.role ? (
          <NavbarItem>
            <Button
              onClick={handleLogout}
              color="danger"
              href="/login"
              variant="flat"
            >
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

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
