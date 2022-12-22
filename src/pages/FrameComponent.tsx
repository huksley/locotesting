import { FunctionComponent } from "react";
import Publication from "../components/Publication";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col p-[20px] box-border items-start justify-start">
      <Publication />
    </div>
  );
};

export default FrameComponent;
