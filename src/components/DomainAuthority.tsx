import { FunctionComponent } from "react";

type DomainAuthorityType = {
  domainAuthority?: string;
};

const DomainAuthority: FunctionComponent<DomainAuthorityType> = ({
  domainAuthority,
}) => {
  return (
    <div className="flex-1 relative text-xs leading-[14px] uppercase font-semibold font-open-sans text-gray-300 text-left inline-block">
      {domainAuthority}
    </div>
  );
};

export default DomainAuthority;
