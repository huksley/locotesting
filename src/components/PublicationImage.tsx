import { FunctionComponent } from "react";

type PublicationImageType = {
  img?: string;
};

const PublicationImage: FunctionComponent<PublicationImageType> = ({ img }) => {
  return (
    <img
      className="relative w-[198px] h-[198px] shrink-0 object-cover"
      alt=""
      src={img}
    />
  );
};

export default PublicationImage;
