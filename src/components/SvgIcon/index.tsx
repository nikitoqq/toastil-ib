/* eslint-disable object-curly-newline */
import React from 'react';

import { SvgType } from '../../types';

import ImageType from './styled';

function SvgIcon({ id, path, color, size = 25 }: SvgType) {
  return (
    <ImageType
      id={id}
      viewBox="0 0 25 25"
      color={color}
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
    >
      <path d={path} />
    </ImageType>
  );
}

export default SvgIcon;
