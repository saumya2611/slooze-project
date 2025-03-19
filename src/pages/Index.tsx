import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { InventoryChart } from "@/components/InventoryChart";
import { ShipmentAnalytics } from "@/components/ShipmentAnalytics";
import SpotlightMap from "@/components/SpotlightMap";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatCard2 from "@/components/StatCard2";
import paymentCard1 from "../../public/assets/paymentCard1.svg";
import paymentCard2 from "../../public/assets/paymentCard2.svg";
import paymentCard3 from "../../public/assets/paymentCard3.svg";
import paymentCard4 from "../../public/assets/paymentCard4.svg";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="border-b border-bg-[#E5E5E5 1px]">
          <div className="container flex justify-between items-center mb-2">
            <UserProfile
              name="Rahul"
              company="ORQUE PVT.LTD."
              badge="CUSTOMER"
            />
            <div className="flex items-center opacity-[50%] text-[#000000] font-medium">
              <Select>
                <SelectTrigger className="w-[180px] focus:ring-0">
                  <SelectValue placeholder="LAST 30 DAYS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">LAST 15 DAYS</SelectItem>
                  <SelectItem value="dark">LAST 10 DAYS</SelectItem>
                  <SelectItem value="system">LAST 5 DAYS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-center gap-2 py-5">
              <StatCard2
                title="Payment Receivables"
                src={paymentCard1}
                value="₹12,40,000"
                change="+3.87%"
                metaText="OVERDUE PAYMENTS: ₹1,40,000"
              />
              <StatCard2
                title="Payments Made"
                src={paymentCard2}
                value="₹9,50,000"
                metaText="NEXT PAYMENT DUE: 1 WEEK"
              />
              <StatCard2
                src={paymentCard3}
                metaText="SUPPLIERS: 6"
                title="Total Purchases"
                value="₹15,20,000"
                change="+3.87%"
              />
              <StatCard2
                src={paymentCard4}
                metaText="TOP SELLING PRODUCT: ELECTRONICS"
                title="Total Sales"
                value="₹18,00,000"
                change="+3.87%"
              />
            </div>

            <div className="flex gap-4 pb-3">
              <InventoryChart />
              <ShipmentAnalytics />
            </div>
            <div>
              <SpotlightMap />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
