import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo_White from "../../../assets/Logo_White.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a2955] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section - Brand & Copyright */}
        <motion.div
          className="text-center flex flex-col justify-center items-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            {" "}
            <img src={Logo_White} alt="OEPL" className="w-40" />{" "}
          </Link>
          <p className=" opacity-90 mt-2 flex justify-center items-center">
            <span className="font-sans text-lg mr-1">&copy;</span>
            <span>{new Date().getFullYear()} All Rights Reserved.</span>
          </p>
          <p className=" relative  text-center mt-3 text-gray-200">
            {/* <p className="absolute text-4xl top-2 left-0">"</p>
          <p className="absolute text-4xl top-1/2 right-0">"</p> */}
            Our path towards deploying these technologies is a dire necessity
            not only for the present but potentially for the future generations.
          </p>
        </motion.div>

        {/* Center Section - Quick Links */}
        <motion.div
          className="flex flex-col items-center text-lg font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className=" flex flex-col  items-center">
            <h1 className="relative inline-block text-3xl font-bold after:content-['']  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-4/5 after:h-1 after:bg-[#1d6903]">
              Quick Links
            </h1>
            <ul className="flex flex-col mt-3 w-40 justify-start">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Technologies", link: "/technologia" },
                { name: "Blogs", link: "/blogs" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                // <span>
                <motion.li key={index}>
                  <Link
                    to={item.link}
                    className=" hover:underline hover:text-xl hover:text-[#1f7902]  hover:cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </motion.li>
                // </span>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="text-center flex flex-col  items-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <h1 className="relative inline-block text-3xl font-bold after:content-['']  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-4/5 after:h-1 after:bg-[#1d6903]">
              Contact Us
            </h1>
            <div className="flex flex-col gap-y-2 leading-6 text-lg w-40 mt-4">
              <p>
                St No - 8, Jublee Hills,
                <br /> Hyderabad, India
              </p>
              <p>info@onelement.in</p>
              <p>+91 9988776655</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Subscribe & Social Media Links */}
        {/* <div className="text-center flex flex-col justify-center items-center md:flex-none   md:text-left"> */}
        {/* Subscribe Form */}
        {/* <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
            <form className="flex mt-4 justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md w-72"
              />
              <button type="submit" className="bg-white text-[#009ca6] p-2 rounded-r-md">Subscribe</button>
            </form>
          </motion.div> */}

        {/* {/* Social Media Links */}

        <motion.div
          className="flex gap-y-2 flex-col justify-start items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="relative inline-block text-3xl font-bold after:content-['']  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-4/5 after:h-1 after:bg-[#1d6903]">
            Contact Us
          </h1>
          <div className="flex mt-4 flex-col items-center gap-y-2">
            {/* <div className="flex gap-y-2 flex-col h-full justify-start items-center md:justify-center"> */}
            {[
              // { icon: <FaFacebook size={24} />, link: "#", name: "FACEBOOK" },
              { icon: <FaLinkedin size={24} />, link: "#", name: "LINKEDIN" },
              { icon: <FaTwitter size={24} />, link: "#", name: "TWITTER" },
              { icon: <FaInstagram size={24} />, link: "#", name: "INSTAGRAM" },
              // { icon: <FaGithub size={24} />, link: "#", name: "GITHUB" },
              // { icon: <FaYoutube size={24} />, link: "#", name: "YOUTUBE" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="p-1 rounded-full flex justify-between bg-white w-40 px-3 text-[#0a2955] hover:bg-opacity-80 transition"
                whileHover={{ scale: 1.1 }}
              >
                <span>{social.icon}</span>
                <h1>{social.name}</h1>
                {/* <div className="flex flex-col items-center">
                {social.name.split("").map((letter, index) => (
                  <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                  {letter}
                  </motion.span>
                  ))}
                  </div> */}
              </motion.a>
            ))}
          </div>
          {/* </div> */}
        </motion.div>

        {/* Bottom Section - Contact Info */}
      </div>
      <motion.div
        className="  text-center text-[#0a2955] bg-white text-sm opacity-80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h1 className="text-lg font-semibold">
          <span className="font-bold">
            <Link
              className="underline text-[#0a2955eb] hover:text-[#0a2955]"
              to="/"
            >
              Onelement Pvt Ltd.
            </Link>
          </span>{" "}
          Rights reserved Copyright <span className="font-sans">&copy;</span>{" "}
          2025
        </h1>
      </motion.div>
    </footer>
  );
};

export default Footer;
