import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollToTop from "@/shared/components/scroll/ScrollToTop";
import ScrollToTopButton from "@/shared/components/scroll/ScrollToTopButton";
import SmoothScroll from "@/shared/components/scroll/SmoothScroll";

const Layout = () => {
  const loc = ScrollToTop();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <SmoothScroll />
      <Navbar loc={loc} />
      <main className="grow">
        <Outlet key={location.pathname} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
