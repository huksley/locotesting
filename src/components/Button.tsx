import { FunctionComponent } from "react";

type ButtonType = {
  clickMe?: string;
};

const Button: FunctionComponent<ButtonType> = ({ clickMe }) => {
  return (
    <button className="cursor-pointer [border:none] p-[16px] bg-brown rounded-[8px] flex flex-row box-border items-start justify-start">
      <b className="relative text-base leading-[20px] inline-block font-open-sans text-white text-center">
        {clickMe}
      </b>
    </button>
  );
};

export default Button;
