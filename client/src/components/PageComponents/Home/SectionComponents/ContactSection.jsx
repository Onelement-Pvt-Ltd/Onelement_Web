import AboutContent from "./AboutSectionComponents/AboutContent";
import AboutVideo from "./AboutSectionComponents/AboutVideo";
import info_menu from "@/components/Partials/utils/InfoMenu";
import ReachoutSection from "./ContactSectionComponents/ReachoutSection";
import MessageSection from "./ContactSectionComponents/MessageSection";

const ContactSection = () => {
  return (
    <section id="contactus" key="contactus" className=" relative h-auto overflow-hidden group bg-[url('/src/assets/BlogImages/Blog1.png')] bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-[url('/src/assets/BlogImages/Blog4.png')] bg-cover bg-center" /> */}
      <div className="absolute inset-0 bg-[#0a2955]/30" />
      <div className="flex relative z-10 mx-15 flex-col text-white my-5">
        <div className="flex justify-center">
          <h1 className="text-5xl font-semibold underline">
            <span className="text-[#0A2955] underline">Contact </span>
            <span> </span> Us
          </h1>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-full gap-x-10 items-center justify-between">
            <div></div>
            <ReachoutSection />
            <div className="flex h-110  w-165">
              <MessageSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
