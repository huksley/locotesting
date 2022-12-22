import { FunctionComponent } from "react";

type ByJohnDoeType = {
  byJohnDoe?: string;
};

const ByJohnDoe: FunctionComponent<ByJohnDoeType> = ({ byJohnDoe }) => {
  return (
    <div className="relative text-base leading-[16px] font-semibold font-open-sans text-gray-100 text-left inline-block w-[161px] shrink-0">
      {byJohnDoe}
    </div>
  );
};

export default ByJohnDoe;
