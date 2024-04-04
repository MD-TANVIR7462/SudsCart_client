import Footer from "@/Components/Shared/Navbar/Footer";
import NavBarClient from "@/Components/Shared/Navbar/NavBarClient";

const layoutNav = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <NavBarClient />
      {children}
      <Footer />
    </div>
  );
};

export default layoutNav;
