import React from "react";
import "./bento.css"; // import the grid rules (ensure your bundler loads this)
import first  from "../../../assets/images/first.webp";
import second from "../../../assets/images/second.webp";
import three  from "../../../assets/images/three.webp";
import four   from "../../../assets/images/four.webp";
import five   from "../../../assets/images/five.webp";
import six    from "../../../assets/images/six.webp";
import seven  from "../../../assets/images/seven.webp";
import eight  from "../../../assets/images/eight.webp";

export default function BentoGrid() {
  return (
    <main className="min-h-screen text-[hsl(0,0%,7%)] mt-16 bg-[hsl(0,0%,96%)] py-8 px-6">
      {/* Grid layout handled by bento.css; visual styling below with Tailwind */}
      <div className="bento-grid">

        {/* 1 - Hero / primary card */}
        <div className="rounded-[21px] bg-[hsl(256,67%,59%)] text-[hsl(0,0%,100%)] p-12 flex flex-col items-center text-center gap-4">
          <h1 className="font-medium text-[4rem] leading-tight">
            Social Media <span className="text-[hsl(39,100%,71%)]">10x</span> Faster with AI
          </h1>
          <img src={first} alt="five stars" className="max-w-[70%] lg:max-w-[45%]" />
          <p className="text-base">Over 4,000 5-star reviews</p>
        </div>

        {/* 2 */}
        <div className="rounded-[21px] bg-[hsl(0,0%,100%)] text-[hsl(0,0%,7%)] p-8 flex flex-col gap-4">
          <h2 className="font-medium text-xl">Manage multiple accounts and platforms.</h2>
          <img src={second} alt="multiple platforms" className="w-full md:max-w-[150%] lg:max-w-[150%]" />
        </div>

        {/* 3 */}
        <div className="rounded-[21px] bg-[hsl(39,100%,71%)] text-[hsl(0,0%,100%)] p-8 flex flex-col gap-4">
          <h2 className="font-medium text-xl">Maintain a consistent posting schedule.</h2>
          <img src={three} alt="consistent schedule" className="max-w-[75%] md:max-w-full lg:mb-0" />
        </div>

        {/* 4 */}
        <div className="rounded-[21px] bg-[hsl(254,88%,90%)] p-8 flex flex-col items-center md:items-center lg:items-start gap-4 text-center lg:text-left">
          <h2 className="font-medium text-xl">Schedule to social media.</h2>
          <img src={four} alt="schedule posts" className="w-full max-w-full" />
          <p className="max-w-prose">Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>

        {/* 5 */}
        <div className="rounded-[21px] bg-[hsl(256,67%,59%)] text-[hsl(0,0%,100%)] p-8 flex flex-col items-center gap-4 md:grid md:grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-medium text-xl">Grow followers with non-stop content.</h2>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={five} alt="grow followers" className="max-w-[75%] md:max-w-full lg:max-w-full" />
          </div>
        </div>

        {/* 6 */}
        <div className="rounded-[21px] bg-[hsl(0,0%,100%)] p-8 flex flex-col gap-4">
          <h2 className="font-medium text-[4rem] leading-tight">&gt;56% <span className="block text-[1.25rem]">faster audience growth</span></h2>
          <img src={six} alt="audience growth" className="max-w-[60%] md:max-w-[80%]" />
        </div>

        {/* 7 */}
        <div className="rounded-[21px] bg-[hsl(31,66%,93%)] p-8 flex flex-col gap-4">
          <h2 className="font-medium text-xl">
            Create and schedule content <span className="italic text-[hsl(256,67%,59%)]">quicker.</span>
          </h2>
          <img src={seven} alt="create post" className="max-w-[60%] md:max-w-full" />
        </div>

        {/* 8 */}
        <div className="rounded-[21px] bg-[hsl(39,100%,71%)] text-[hsl(0,0%,100%)] p-8 flex flex-col justify-center gap-4">
          <h2 className="font-medium text-xl">Write your content using AI.</h2>
          <img src={eight} alt="ai content" className="max-w-[60%] md:max-w-[105%]" />
        </div>
      </div>
    </main>
  );
}
