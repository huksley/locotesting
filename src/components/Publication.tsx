import { FunctionComponent } from "react";
import PublicationImage from "../components/PublicationImage";
import PublisherTitle from "../components/PublisherTitle";
import ByJohnDoe from "../components/ByJohnDoe";
import BaseBadge from "../components/BaseBadge";
import PublicationTitle from "../components/PublicationTitle";
import PublicationDescription from "../components/PublicationDescription";
import Component from "../components/Component";
import DomainAuthority from "../components/DomainAuthority";
import BaseButton from "../components/BaseButton";

type PublicationType = {
  img?: string;
  logo?: string;
  media?: string;
  counterName?: string;
  counterValue?: string;
  buttonLabel?: string;
  title?: string;
  description?: string;
  type?: string;
};

const Publication: FunctionComponent<PublicationType> = ({
  img,
  logo,
  media,
  counterName,
  counterValue,
  buttonLabel,
  title,
  description,
  type,
}) => {
  return (
    <div className="self-stretch rounded-[8px] bg-white flex flex-row p-[32px] box-border items-start justify-start gap-[32px] text-left text-lg text-gray-500 font-open-sans">
      <PublicationImage img={img} />
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[44px] h-[44px] shrink-0"
            alt=""
            src={logo}
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <PublisherTitle businessLeader={media} />
            <div className="flex flex-row items-center justify-start gap-[6px] text-base text-gray-100">
              <ByJohnDoe byJohnDoe="24.10.2022, by John Doe" />
              <img
                className="relative w-[4px] h-[4px] shrink-0"
                alt=""
                src="../ellipse-2.svg"
              />
              <BaseBadge value={type} />
            </div>
          </div>
        </div>
        <PublicationTitle bookSalonLaunchesOperatio={title} />
        <PublicationDescription bookSalonAPaymentAndBooki={description} />
      </div>
      <div className="self-stretch flex flex-col items-end justify-between text-center text-gray-600">
        <div className="rounded-[4px] bg-white [border:1px_solid_#edeff2] box-border w-[120px] flex flex-col p-[8px_12px] items-center justify-center">
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
            <Component component={counterValue} />
            <DomainAuthority domainAuthority={counterName} />
          </div>
        </div>
        <div className="relative w-[141px] h-[34px] shrink-0">
          <img
            className="absolute top-[5px] left-[117px] w-[24px] h-[24px] overflow-hidden"
            alt=""
            src="../morevert.svg"
          />
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
            <BaseButton text={buttonLabel} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publication;
