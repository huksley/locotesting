import { FunctionComponent } from "react";

type PublicationTitleType = {
  bookSalonLaunchesOperatio?: string;
};

const PublicationTitle: FunctionComponent<PublicationTitleType> = ({
  bookSalonLaunchesOperatio,
}) => {
  return (
    <div className="self-stretch relative text-xl leading-[28px] font-semibold font-open-sans text-gray-400 text-left inline-block">
      {bookSalonLaunchesOperatio}
    </div>
  );
};

export default PublicationTitle;
