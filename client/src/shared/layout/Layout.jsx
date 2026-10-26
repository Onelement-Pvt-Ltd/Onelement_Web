import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import ScrollToTop from "@/shared/components/scroll/ScrollToTop";
import ScrollToTopButton from "@/shared/components/scroll/ScrollToTopButton";
import SmoothScroll from "@/shared/components/scroll/SmoothScroll";

const Layout = () => {
  const loc = ScrollToTop();
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-clip">
      <SmoothScroll />
      <Navbar loc={loc} />
      <div className="grow">
        <Outlet key={location.pathname} />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
