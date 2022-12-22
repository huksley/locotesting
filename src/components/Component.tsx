import { FunctionComponent } from "react";

type ComponentType = {
  component?: string;
};

const Component: FunctionComponent<ComponentType> = ({ component }) => {
  return (
    <span className="relative text-lg leading-[25px] font-semibold font-open-sans text-gray-600 text-center inline-block">
      {component}
    </span>
  );
};

export default Component;
