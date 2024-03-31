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
    </div>
  );
};

export default layoutNav;
