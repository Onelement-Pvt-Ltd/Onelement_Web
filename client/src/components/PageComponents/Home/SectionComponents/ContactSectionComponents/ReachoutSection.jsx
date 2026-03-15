import info_menu from "@/components/Partials/utils/InfoMenu"
const ReachoutSection = () => {
  return (
    <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 grid-rows-2  mt-5">
                {info_menu.map((info, idx) => (
                  <div
                    key={idx}
                    className=" h-50 w-80 flex  text-white  items-center "
                  >
                    <div className=" bg-white p-3 rounded-full">
                      <info.logo className="size-8 text-[#0a2955]" />
                    </div>
                    <div className="flex flex-col ml-3 w-45">
                      <h1 className="text-2xl text-[#0a2955] font-black">
                        {info.name}
                      </h1>
                      <a className="underline" href={info.link}>
                        <h1 className="text-lg text-gray-200 font-semibold">
                          {info.content}
                        </h1>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  )
}
export default ReachoutSection