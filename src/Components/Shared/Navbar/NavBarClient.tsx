"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import { getAccessTokenFormlocalStorage } from "@/Services/Auth/Auth.servicec";
import { useRouter } from "next/navigation";
const NavBarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = getAccessTokenFormlocalStorage();
const router = useRouter()
  return (
    <>
      <NavBar
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        user={user}
        router = {router}
      ></NavBar>
    </>
  );
};

export default NavBarClient;
