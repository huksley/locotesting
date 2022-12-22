import { FunctionComponent } from "react";

type PublicationDescriptionType = {
  bookSalonAPaymentAndBooki?: string;
};

const PublicationDescription: FunctionComponent<PublicationDescriptionType> = ({
  bookSalonAPaymentAndBooki,
}) => {
  return (
    <div className="self-stretch relative text-base leading-[18px] font-open-sans text-gray-200 text-left inline-block">
      {bookSalonAPaymentAndBooki}
    </div>
  );
};

export default PublicationDescription;
