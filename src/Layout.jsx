import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet /> {/* This will load the current page content */}
      <Footer />
    </div>
  );
};

export default Layout;
