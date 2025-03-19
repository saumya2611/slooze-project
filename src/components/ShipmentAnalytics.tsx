import filter from "../../public/assets/filter.svg";
import progressBar from "../../public/assets/progressBar.svg";
import map from "../../public/assets/map.svg";
import ShipmentItem from "./ShipmentItem";

export function ShipmentAnalytics() {
  return (
    <div className="animate-fadeIn rounded-xl border border-border bg-card text-card-foreground shadow-sm w-[900px]">
      <div className="pb-2 px-5 py-3">
        <div className="flex justify-between w-[500px] items-center mb-6">
          <div>
            <h3 className="text-lg font-medium">Shipment Analytics</h3>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center px-2 py-1 border border-1 border-[#E5E5E5] rounded-md text-[12px] bg-gray-100 font-bold">
              <img src={filter} />
              <span>FILTERS</span>
            </button>
            <button className="text-xs font-semibold opacity-[40%]  text-[#000000] px-3 py-1 border border-1 border-[#E5E5E5] rounded-[40px] bg-gray-100">
              <span className="opacity-[30%]">ID:</span> #003455MNP
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg pb-4">
          <div className="mb-4">
            <div className="flex items-center justify-between  pr-4">
              <div className="flex justify-between w-[320px]">
                <div className="flex flex-col gap-2">
                  <ShipmentItem
                    id="#003455MNP"
                    sourceAddress="87 Some Address"
                    destinationAddress="15 Some Address"
                  />
                  <ShipmentItem
                    id="#001432LDP"
                    sourceAddress="87 Some Address"
                    destinationAddress="15 Some Address"
                  />
                </div>
                <div>
                  <img src={progressBar} />
                </div>
              </div>
              <div>
                <img src={map} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
