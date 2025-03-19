import { Badge } from "@/components/ui/badge";

interface UserProfileProps {
  name: string;
  company: string;
  badge: string;
}

import userProfile1 from "../../public/assets/useProfile1.svg";

export function UserProfile({ name, company, badge }: UserProfileProps) {
  return (
    <div className="flex items-center p-6 pb-2 animate-fadeIn">
      <div className="flex-shrink-0 mr-4 relative">
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[4px] bg-[#FFFFFF]">
          <img src={userProfile1} />
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-3">Hello, {name}</h2>
          <Badge className="bg-[#4F45E4] text-white  h-[30px] w-[90px] rounded-[5.71px]">
            {badge}
          </Badge>
        </div>
        <p className="text-gray-400 text-sm"> {company}</p>
      </div>
    </div>
  );
}
