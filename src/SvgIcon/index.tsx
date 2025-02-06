import { ImageType } from "./styled";

export const SvgIcon = ({ path, color }: { path: string, color?: string }) => {

  return(
      <ImageType viewBox="0 0 25 25" color={color} width="25px" height="25px" fill="currentColor">
        <path d={path}></path>
      </ImageType>
  );
};
