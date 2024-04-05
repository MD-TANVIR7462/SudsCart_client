
import Footer from "@/Components/Shared/Navbar/Footer";
import NavBarClient from "@/Components/Shared/Navbar/NavBarClient";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBarClient />
      {children}
    <Footer/>
    </>
  );
};

export default MainLayout;
