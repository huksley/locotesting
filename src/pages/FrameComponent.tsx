import { FunctionComponent } from "react";
import Publication from "../components/Publication";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col p-[20px] box-border items-start justify-start">
      <Publication
        img="img@2x.png"
        logo="../logo.svg"
        media="Business Leader"
        counterName="Domain Authority"
        counterValue="80"
        buttonLabel="View details"
        title="Book Salon launches operations in the UK"
        description="Book Salon, a payment and booking service provider specilising in hair, beauty, and wellness companies, is launching operations in the UK."
        type="ONLINE"
      />
    </div>
  );
};

export default FrameComponent;
