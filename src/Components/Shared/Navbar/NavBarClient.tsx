"use client";

import { useState } from "react";
import NavBar from "./NavBar";
const NavBarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}></NavBar>
    </>
  );
};

export default NavBarClient;
