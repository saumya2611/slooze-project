import Button from "./Button";
import map2 from "../../public/assets/map2.svg";
import { useState } from "react";
import Parts from "./parts";

function SpotlightMap() {
  const [select, setSelect] = useState("CLIENTS");
  const [selected, setSelected] = useState("VALUE,");
  const [active, setActive] = useState("VALUE,");

  return (
    <div
      className="flex animate-fadeIn rounded-xl border border-border bg-card
      text-card-foreground shadow-sm bg-[#FFFFFF] px-5 py-3"
    >
      <div className="px-2 flex-initial w-[700px] border-r-[1px] border-gray-200">
        <div className="flex justify-between items-center">
          <div className="font-bold">Spotlight</div>
          <div>
            <Button
              onClick={() => {}}
              title={"ALL REGIONS"}
              className={`border bg-gray-50 hover:bg-gray-100 text-[10px] rounded-lg font-bold px-3 py-2`}
            />
          </div>
        </div>
        <div>
          <img src={map2} />
        </div>

        <div className="flex mt-[3rem] justify-between border border-1 border-[#E5E5E5] rounded-[25px] px-1 py-1 bg-gray-100 text-[10px] text-gray-400 font-normal w-[200px]">
          <Button
            title={"SUPPLIERS"}
            onClick={() => setSelect("SUPPLIERS")}
            className={`px-5 py-1  rounded-[30px] font-bold ${
              select === "SUPPLIERS"
                ? "bg-[#4F45E4] text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          />
          <Button
            title={"CLIENTS"}
            onClick={() => setSelect("CLIENTS")}
            className={`px-5 py-1 rounded-[30px] font-bold ${
              select === "CLIENTS"
                ? "bg-[#4F45E4] text-white"
                : "bg-gray-100 text-gray-400"
            }`}
          />
        </div>
      </div>

      {/* Top Item Sold section */}
      <div className="px-3  w-[300px]  border-r-[1px] border-gray-200">
        <div className="flex px-2 py-2  items-center justify-between">
          <div className="font-bold text-[15px]">Top Item Sold</div>
          <div className="flex justify-between  border border-1 border-[#E5E5E5] rounded-[25px] px-1 py-1 bg-gray-100 text-[8px] text-gray-400 font-normal w-[110px]">
            <Button
              title={"VALUE,"}
              onClick={() => setSelected("VALUE,")}
              className={`px-3 py-1  rounded-[30px] font-bold ${
                selected === "VALUE,"
                  ? "bg-[#4F45E4] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            />
            <Button
              title={"VOL,"}
              onClick={() => setSelected("VOL,")}
              className={`px-3 py-1 rounded-[30px] font-bold ${
                selected === "VOL,"
                  ? "bg-[#4F45E4] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Parts
            id="#1"
            part="Automotiv Parts"
            unit="800 Units"
            className={`border font-semibold bg-[E9E9E9] text-[14px] rounded-lg  px-3 py-1`}
          />
          <Parts
            id="#2"
            part="Steel Sheets"
            unit="430 Units"
            className={`border font-semibold bg-[E9E9E9] text-[14px] rounded-lg  px-3 py-1`}
          />
          <Parts
            id="#3"
            part="Electronic Parts"
            unit="300 Units"
            className={`border font-semibold bg-[E9E9E9] text-[14px] rounded-lg  px-3 py-1`}
          />
          <Parts
            id="#4"
            part="Plastic Materials"
            unit="400 Units"
            className={`border font-semibold bg-[E9E9E9] text-[14px] rounded-lg  px-3 py-1`}
          />
          <Parts
            id="#5"
            part="Office Equipments"
            unit="150 Units"
            className={`border font-semibold bg-[E9E9E9] text-[14px] rounded-lg  px-3 py-1`}
          />
        </div>
      </div>

      {/* {/* Top Item Purchased*/}
      <div className="px-3  w-[350px]">
        <div className="flex px-2 py-2  items-center justify-between">
          <div className="font-bold text-[15px]">Top Item Purchased</div>
          <div className="flex justify-between  border border-1 border-[#E5E5E5] rounded-[25px] px-1 py-1 bg-gray-100 text-[8px] text-gray-400 font-normal w-[110px]">
            <Button
              title={"VALUE,"}
              onClick={() => setActive("VALUE,")}
              className={`px-3 py-1  rounded-[30px] font-bold ${
                active === "VALUE,"
                  ? "bg-[#4F45E4] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            />
            <Button
              title={"VOL,"}
              onClick={() => setActive("VOL,")}
              className={`px-3 py-1 rounded-[30px] font-bold ${
                active === "VOL,"
                  ? "bg-[#4F45E4] text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Parts
            id="#1"
            part="Office Equipments"
            unit="₹2,27,459"
            className={`font-bold  py-1`}
          />

          <div className="mt-[4.6rem]">
            <Parts
              id="#3"
              part="Office Equipments"
              unit="₹2,27,459"
              className={`font-bold py-1`}
            />
            <Parts
              id="#4"
              part="Electronic Parts"
              unit="₹2,27,459"
              className={`font-bold py-1`}
            />
            <Parts
              id="#5"
              part="Automotiv Parts"
              unit="₹2,27,459"
              className={`font-bold  py-1`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotlightMap;
