import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = () => {
  const loc = ScrollToTop();
  const location = useLocation();

  return (
    <div className="min-h-screen rajdhani-medium flex flex-col">
      <Navbar loc={loc} />
      <main className="grow">
        <Outlet key={location.pathname + location.search} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;