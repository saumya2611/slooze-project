import { Search, Calendar, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import headerLogo1 from "../../public/assets/headerLogo1.svg";
import headerLogo2 from "../../public/assets/headerLogo2.svg";

export function Header() {
  return (
    <header className="bg-[#4F45E4] text-white border-b border-blue-600 py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className=" bg-opacity-20 backdrop-blur-lg rounded-md p-1.5">
            <img src={headerLogo1} />
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-white opacity-70" />
            <Input
              placeholder="Search"
              className="w-full font-normal  bg-[#3830B7] bg-opacity-70 border-0 pl-10 rounded-[9.33px] focus:ring-0  text-white placeholder:text-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Calendar className="h-5 w-5 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          <Bell className="h-5 w-5 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          <Settings className="h-5 w-5 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />

          <div className="flex items-center ml-2 bg-[#3830B7] bg-opacity-70 backdrop-blur-lg rounded-lg py-1 px-3">
            <div className="mr-3 text-right">
              <p className="text-xs text-gray-200">rahulshetty.xyz</p>
              <p className="text-xs font-medium">ETLS PVT. LTD.</p>
            </div>
            <img src={headerLogo2} />
          </div>
        </div>
      </div>
    </header>
  );
}
