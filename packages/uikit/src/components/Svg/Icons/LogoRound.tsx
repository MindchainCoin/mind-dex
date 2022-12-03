import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
  <img 
  style={{marginRight: '16px'}}
  src="images/mind.png"
  width={24}
  height={24}
  />
  );
};

export default Icon;