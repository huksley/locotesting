import { FunctionComponent } from "react";
import Button from "../components/Button";

const Publication: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-[8px] bg-white flex flex-row p-[32px] box-border items-start justify-start gap-[32px] text-left text-lg text-gray-500 font-open-sans">
      <img
        className="relative w-[198px] h-[198px] shrink-0 object-cover"
        alt=""
        src="../img@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[44px] h-[44px] shrink-0"
            alt=""
            src="../logo.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <a className="self-stretch relative leading-[25px] font-semibold text-[inherit] inline-block [text-decoration:none]">
              Business Leader
            </a>
            <div className="flex flex-row items-center justify-start gap-[6px] text-base text-gray-100">
              <div className="relative leading-[16px] font-semibold inline-block w-[161px] shrink-0">
                24.10.2022, by John Doe
              </div>
              <img
                className="relative w-[4px] h-[4px] shrink-0"
                alt=""
                src="../ellipse-2.svg"
              />
              <div className="rounded-[28px] overflow-hidden flex flex-row p-[4px_8px_4px_4px] box-border items-center justify-start gap-[4px] text-center text-sm">
                <img
                  className="relative w-[16px] h-[16px] shrink-0 overflow-hidden"
                  alt=""
                  src="../left-icon.svg"
                />
                <div className="relative leading-[16px] font-semibold inline-block">
                  ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-xl leading-[28px] font-semibold text-gray-400 inline-block">
          Book Salon launches operations in the UK
        </div>
        <div className="self-stretch relative text-base leading-[18px] text-gray-200 inline-block">
          Book Salon, a payment and booking service provider specilising in
          hair, beauty, and wellness companies, is launching operations in the
          UK.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-between text-center text-gray-600">
        <div className="rounded-[4px] bg-white [border:1px_solid_#edeff2] box-border w-[120px] flex flex-col p-[8px_12px] items-center justify-center">
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
            <span className="relative leading-[25px] font-semibold inline-block">
              80
            </span>
            <div className="flex-1 relative text-xs leading-[14px] uppercase font-semibold text-gray-300 text-left inline-block">
              Domain Authority
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <Button clickMe="Click me" />
          <img
            className="relative w-[24px] h-[24px] shrink-0"
            alt=""
            src="../frame-923.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Publication;
