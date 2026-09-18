import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import LogoWhite from "../../../assets/Logo_White.png";
import "./Footer.css";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Technologies", to: "/technologies" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/#contactus" }
];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-accent" aria-hidden="true" />
    <div className="footer-shell">
      <div className="footer-lead">
        <Link to="/" className="footer-logo-link" aria-label="Onelement home">
          <img src={LogoWhite} alt="Onelement Energy" className="footer-logo" />
        </Link>
        <p>Practical technologies for a cleaner, more resilient energy future.</p>
      </div>

      <div className="footer-grid">
        <Motion.section className="footer-story" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <p className="footer-kicker">Why we build</p>
          <h2>Climate action and economic progress, working together.</h2>
          <p>
            Our path towards deploying these technologies is a dire necessity,
            not only for the present but for future generations.
          </p>
        </Motion.section>

        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-kicker">Explore</p>
          <ul>
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}<ArrowUpRight aria-hidden="true" size={15} /></Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-contact">
          <p className="footer-kicker">Get in touch</p>
          <address>
            <a href="mailto:info@onelement.in"><Mail aria-hidden="true" size={18} /><span>info@onelement.in</span></a>
            <p><MapPin aria-hidden="true" size={18} /><span>Jubilee Hills<br />Hyderabad, India</span></p>
          </address>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Onelement Pvt Ltd.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
