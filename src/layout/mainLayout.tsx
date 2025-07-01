import { Outlet } from "react-router-dom";
import Navbar from "../elements/components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full h-full p-4 md:p-6 lg:p-10 bg-slate-950">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
