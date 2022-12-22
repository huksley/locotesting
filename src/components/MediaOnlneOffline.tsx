import { FunctionComponent } from "react";

type MediaOnlneOfflineType = {
  value?: string;
};

const MediaOnlneOffline: FunctionComponent<MediaOnlneOfflineType> = ({
  value,
}) => {
  return (
    <div className="relative text-sm leading-[16px] font-semibold font-open-sans text-gray-100 text-center inline-block">
      {value}
    </div>
  );
};

export default MediaOnlneOffline;
