import React from "react";
import closeIcon from "../assets/close.svg";
const Icon = ({ iconPath, size = 24 , style}) => {


  return (
    <img
      src= {iconPath}
     
      width= {size}
      height={size}
      className="block "
      style= {style}
    />
  );
};

export default Icon;