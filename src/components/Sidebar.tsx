// import { cn } from "@/lib/utils";

import companyLogo from "../../public/assets/companyLogo.svg";
import sideBar1 from "../../public/assets/sideBar1.svg";
import sideBar2 from "../../public/assets/sideBar2.svg";
import sideBar3 from "../../public/assets/sideBar3.svg";
import sideBar4 from "../../public/assets/sideBar4.svg";
import sideBar5 from "../../public/assets/sideBar5.svg";
import sideBar6 from "../../public/assets/sideBar6.svg";
import sideBar7 from "../../public/assets/sideBar7.svg";
import sideBar8 from "../../public/assets/sideBar8.svg";
import sideBar9 from "../../public/assets/sideBar9.svg";
import sideBar10 from "../../public/assets/sideBar10.svg";
import sideBar11 from "../../public/assets/sideBar11.svg";
import sideBar12 from "../../public/assets/sideBar12.svg";

import { useState } from "react";

console.log("sideBar2----------->", sideBar2);

export function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex flex-col h-screen bg-white border-r border-[#00000010]">
      <div className="p-4 flex items-center justify-center border-b border-[#00000010]">
        <div className="w-8 h-8">
          <img src={companyLogo} />
        </div>
      </div>

      <div className="flex flex-col items-center py-8 flex-1 space-y-4">
        <div
          onClick={() => setActiveIndex(1)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] ${
            activeIndex === 1 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar1}
            style={{ filter: activeIndex === 1 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(2)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[145px]  ${
            activeIndex === 2 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar2}
            className="active-link"
            style={{ filter: activeIndex === 2 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(3)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 3 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar3}
            style={{ filter: activeIndex === 3 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(4)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 4 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar4}
            style={{ filter: activeIndex === 4 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(5)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 5 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar5}
            style={{ filter: activeIndex === 5 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(6)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 6 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar6}
            style={{ filter: activeIndex === 6 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(7)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 7 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar7}
            style={{ filter: activeIndex === 7 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(8)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 8 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar8}
            style={{ filter: activeIndex === 8 ? "invert(100%)" : "" }}
          />
        </div>
        <div
          onClick={() => setActiveIndex(9)}
          className={`flex items-center justify-center w-[38px] h-[38px]  rounded-[8px] mt-[193px]  ${
            activeIndex === 9 ? "bg-[#4F45E4]" : "opacity-[50%]"
          }`}
        >
          <img
            src={sideBar9}
            style={{ filter: activeIndex === 9 ? "invert(100%)" : "" }}
          />
        </div>

        <div>
          <div
            className={`flex items-center justify-center w-[38px] h-[38px]   rounded-[8px] mt-[8rem]`}
          >
            <img src={sideBar10} />
          </div>
        </div>

        <div className="flex items-center justify-center w-[38px] h-[2px] rounded-[2px] border-[#000000 10%]">
          <img src={sideBar11} />
        </div>

        <div className="flex items-center justify-center w-[38px] h-[38px] bg-[#F4F4F4] rounded-[8px] ">
          <img src={sideBar12} />
        </div>
      </div>
    </div>
  );
}
