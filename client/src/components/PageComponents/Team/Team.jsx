import { useState, useEffect } from "react";
import { X, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Blog2 from "@/assets/BlogImages/Blog2.png";

const teamMembers = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: "Barry Allen",
  role: "CEO / Founder",
  image: Blog2,
  quote: "A Monday is a Monday, but every Monday is not a Monday",
  description: `Lorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicinorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia culpa at ut hoc, porro inceptos bibendum phasellus augue etiam lobortis dignissim praesent.

  Congue mattis erat ad lectus nisl justo nostrud sed natoque malesuada. Quisque primis pellentesque iaculis enim.`,
}));

export default function Team() {
  const [activeMember, setActiveMember] = useState(null);

  // lock body scroll when sidebar is open

  useEffect(() => {
    if (activeMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [activeMember]);

  return (
    <section className="bg-[#d9d9d9] min-h-screen py-12 px-4 sm:px-6">
      <div className="pt-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a2955] mb-3">
          Meet Our <span className="text-[#1d6903]"> Team</span>       </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Meet the minds turning bold ideas into a cleaner, more sustainable      
          world.
        </p>
      </div>
{/* Responsive Grid */}
<div className="max-w-7xl mx-auto">
  <div className="grid gap-8 justify-center 
                  grid-cols-[repeat(auto-fit,minmax(260px,260px))]">

    {teamMembers.map((member) => (
      <div
        key={member.id}
        onClick={() => setActiveMember(member)}
        className="group cursor-pointer bg-white rounded-2xl 
                   shadow-md hover:shadow-xl transition overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative aspect-7/6 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition 
                          flex items-center justify-center gap-4 text-white">
            <Facebook className="hover:scale-110 transition" />
            <Twitter className="hover:scale-110 transition" />
            <Linkedin className="hover:scale-110 transition" />
            <Instagram className="hover:scale-110 transition" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-[#0a2540]">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-gray-400">
            {member.role}
          </p>
        </div>
      </div>
    ))}

  </div>
</div>


      {/* Sidebar Overlay */}
      {activeMember && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setActiveMember(null)}
          />

          {/* Sidebar */}
          <aside className="w-full max-w-md bg-white h-screen overflow-y-auto relative">
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
              <X />
            </button>

            <img
              src={activeMember.image}
              alt={activeMember.name}
              className="w-full h-64 object-cover"
              />

            <div className="p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540]">
                {activeMember.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                {activeMember.role}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6 text-[#0a2540]">
                <Facebook className="cursor-pointer hover:opacity-70" />
                <Twitter className="cursor-pointer hover:opacity-70" />
                <Linkedin className="cursor-pointer hover:opacity-70" />
                <Instagram className="cursor-pointer hover:opacity-70" />
              </div>

              <blockquote className="italic text-center text-base sm:text-lg font-serif text-gray-700 mb-6">
                “{activeMember.quote}”
              </blockquote>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {activeMember.description}
              </p>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setActiveMember(null)}
                  className="px-6 py-2 rounded-full bg-[#0a2540] text-white text-sm hover:opacity-90"
                  >
                  Close
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
      </div>
    </section>
  );
}
