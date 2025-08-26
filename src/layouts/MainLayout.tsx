import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./share/Navbar";



const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col  font-Hind">
      <ScrollRestoration />
      <Navbar/>
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
