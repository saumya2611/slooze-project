import { ArrowUpRight } from "lucide-react";
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  metaText?: string;
  change?: string;
  src: string;
}

function StatCard2({ title, value, metaText, change, src }: StatCardProps) {
  return (
    <div className="flex items-center justify-around bg-[#FFFFFF] w-[500px] h-[114px] border border-1 border-[#E5E5E5] rounded-[12px]">
      <div className="flex flex-col">
        <div className="text-[16px] text-[#000000] opacity-[50%] font-normal">
          <h3>{title}</h3>
        </div>
        <div className="flex gap-1">
          <div className="text-[#4F45E4] font-bold	text-[26px]">{value}</div>
          <div className="text-[#19AC59] text-[10px] w-[50px] h-[17.59px] mt-4">
            <span className="flex items-center font-semibold">
              {change}
              {change ? <ArrowUpRight /> : null}
            </span>
          </div>
        </div>
        <div className="h-[15px]  opacity-[30%] font-semibold text-[12px] text-[#000000]">
          {metaText}
        </div>
      </div>
      <div className="w-[34px] h-[34px] rounded-[8px] mb-[2.5rem]">
        <img src={src} />
      </div>
    </div>
  );
}

export default StatCard2;
