import React from "react";

import { SvgType } from "../../types";

import { ImageType } from "./styled";


export const SvgIcon = ({ path, color }: SvgType) => {
  return(
      <ImageType viewBox="0 0 25 25" color={color} width="25px" height="25px" fill="currentColor">
        <path d={path}></path>
      </ImageType>
  );
};
