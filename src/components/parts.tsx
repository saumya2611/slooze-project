import Button from "./Button";

interface ItemParts {
  id: string;
  part: string;
  unit: string;
  className: string;
}

function Parts({ id, part, unit, className }: ItemParts) {
  return (
    <div className="flex mt-4 justify-between items-center  rounded-[10px] px-3 py-3  bg-[#F7F9FB] text-sm  font-normal">
      <div className="flex gap-1">
        <p className="font-bold">{id}</p>
        <p>{part}</p>
      </div>
      <Button onClick={() => {}} title={unit} className={className} />
    </div>
  );
}

export default Parts;
