import React from "react";

import { SvgType } from "../../types";

import { ImageType } from "./styled";

export const SvgIcon = ({ path, color, size = 25 }: SvgType) => {
  return (
    <ImageType
      viewBox="0 0 25 25"
      color={color}
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
    >
      <path d={path}></path>
    </ImageType>
  );
};
