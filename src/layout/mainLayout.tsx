import { Outlet } from "react-router-dom";
import Navbar from "../elements/components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full h-full bg-surface">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
