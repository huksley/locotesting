import { FunctionComponent } from "react";

type BaseButtonType = {
  text?: string;
};

const BaseButton: FunctionComponent<BaseButtonType> = ({ text }) => {
  return (
    <div className="rounded-[5px] bg-white [border:2px_solid_#2bbbf0] box-border overflow-hidden flex flex-row p-[7px_16px] items-center justify-center text-center text-base text-teal font-open-sans">
      <b className="relative leading-[20px] inline-block">{text}</b>
    </div>
  );
};

export default BaseButton;
