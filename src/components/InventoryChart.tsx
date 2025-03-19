import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";
import Button from "./Button";

const dailyData = [
  { name: "Mon", sales: 100, purchases: 60 },
  { name: "Tues", sales: 200, purchases: 120 },
  { name: "Wed", sales: 250, purchases: 150 },
  { name: "Thurs", sales: 180, purchases: 110 },
  { name: "Fri", sales: 220, purchases: 140 },
  { name: "Sat", sales: 190, purchases: 125 },
  { name: "Sun", sales: 160, purchases: 100 },
];

const weeklyData = [
  { name: "Week 1", sales: 1200, purchases: 800 },
  { name: "Week 2", sales: 1500, purchases: 950 },
  { name: "Week 3", sales: 1300, purchases: 870 },
  { name: "Week 4", sales: 1700, purchases: 1100 },
];

export function InventoryChart() {
  const [select, setSelect] = useState("DAILY");

  return (
    <div className="animate-fadeIn  w-[500px] rounded-xl border border-border bg-card text-card-foreground shadow-sm bg-[#FFFFFF] px-5 py-3">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium">Inventory Overview</h3>
          <p className="text-sm text-gray-500">
            In-Stock Products: 3,200 Units
          </p>
        </div>

        <div
          className={
            "flex gap-1 border border-1 border-[#E5E5E5] rounded-[25px] px-1 py-0.5 bg-gray-100 text-[10px] text-gray-400 font-normal"
          }
        >
          <Button
            title={"DAILY"}
            onClick={() => setSelect("DAILY")}
            className={`px-5 py-1 rounded-[30px] font-bold ${
              select === "DAILY"
                ? "bg-[#4F45E4] text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          />
          <Button
            title={"WEAKLY"}
            onClick={() => setSelect("WEAKLY")}
            className={`px-5 py-1  rounded-[30px] font-bold ${
              select === "WEAKLY"
                ? "bg-[#4F45E4] text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          />
        </div>
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsContent value="daily">
          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={dailyData}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              barGap={8}
              barSize={18}
            >
              <CartesianGrid vertical={false} stroke="#EDF2F7" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#718096" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#718096" }}
              />
              <Bar dataKey="sales" fill="#5c4ad1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="purchases" fill="#d1d5db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="weekly">
          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={weeklyData}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              barGap={8}
              barSize={18}
            >
              <CartesianGrid vertical={false} stroke="#EDF2F7" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#718096" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#718096" }}
              />
              <Bar dataKey="sales" fill="#5c4ad1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="purchases" fill="#d1d5db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>

      <RadioGroup defaultValue="option-one">
        <div className="flex gap-3 justify-end mt-[1.5rem] ">
          <div className="flex gap-1 ">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one" className="text-[#4F45E4] text-[12px]">
              Sales
            </Label>
          </div>
          <div className="flex gap-1">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two" className="text-[#4F45E4] text-[12px]">
              Purchaces
            </Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
