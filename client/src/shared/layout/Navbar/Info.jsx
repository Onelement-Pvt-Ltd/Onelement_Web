import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

import info_menu from "./contactData.js";

const Info = () => {
  return (
    <div className="max-w-full z-50 px-5 py-1 max-h-8 hidden items-center bg-[#0B2440] text-white md:flex justify-between">
      <div className="flex-center gap-5">
        {info_menu.map((info, key) => (
          <div className="flex-center gap-2" key={key}>
            <info.logo className="size-5" />
            <div className="text-[15px]">
              <a className="underline" href={info.link}>{info.content}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center gap-x-5">
        <FaInstagram className="size-5" />
        <FaFacebookF className="size-5" />
        <FaXTwitter className="size-5" />
        <FaLinkedinIn className="size-5" />
      </div>
    </div>
  );
};

export default Info;
