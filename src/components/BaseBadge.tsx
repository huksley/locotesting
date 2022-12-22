import { FunctionComponent } from "react";
import MediaOnlneOffline from "../components/MediaOnlneOffline";

type BaseBadgeType = {
  value?: string;
};

const BaseBadge: FunctionComponent<BaseBadgeType> = ({ value }) => {
  return (
    <div className="rounded-[28px] overflow-hidden flex flex-row p-[4px_8px_4px_4px] box-border items-center justify-start gap-[4px] text-center text-sm text-gray-100 font-open-sans">
      <img
        className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
        alt=""
        src="../left-icon.svg"
      />
      <MediaOnlneOffline value={value} />
    </div>
  );
};

export default BaseBadge;
