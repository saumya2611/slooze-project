import score1 from "../../public/assets/score1.svg";
import score2 from "../../public/assets/score2.svg";
import score3 from "../../public/assets/score3.svg";
import shipment1 from "../../public/assets/shipment1.svg";

interface ShipmentItemProps {
  id: string;
  sourceAddress: string;
  destinationAddress: string;
}

function ShipmentItem({
  id,
  sourceAddress,
  destinationAddress,
}: ShipmentItemProps) {
  return (
    <div className="border-1 border-[#E5E5E5] rounded-[5px] bg-gray-50 flex justify-between px-3 py-1 w-[300px] h-24">
      <div className="flex flex-col gap-2 px-3 py-1 w-[300px]">
        <p className="text-[10px] opacity-[30%]  text-[#000000]">Shipment ID</p>
        <h4 className="text-[16px] font-bold">{id}</h4>
        <div className="flex  justify-between text-[8px]">
          <img src={score1} />
          <p>{sourceAddress}</p>
          <img src={score3} />
          <img src={score2} />

          <p>{destinationAddress}</p>
        </div>
      </div>

      <div>
        <img src={shipment1} />
      </div>
    </div>
  );
}

export default ShipmentItem;
