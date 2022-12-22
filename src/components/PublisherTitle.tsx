import { FunctionComponent } from "react";

type PublisherTitleType = {
  businessLeader?: string;
};

const PublisherTitle: FunctionComponent<PublisherTitleType> = ({
  businessLeader,
}) => {
  return (
    <a className="self-stretch relative text-lg leading-[25px] font-semibold font-open-sans text-gray-500 text-left inline-block [text-decoration:none]">
      {businessLeader}
    </a>
  );
};

export default PublisherTitle;
