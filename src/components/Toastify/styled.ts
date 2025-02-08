import styled from "styled-components";
import { animation, animationLoader } from "./animation";

export const Toast = styled(animation)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 312px;
  height: 85px;
  box-shadow: 0px 1px 5px 0.5px rgb(236, 236, 236);
  border-radius: 5px;
`;

export const Row = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;

export const Loader = styled(animationLoader)`
  display: flex;
  animation: ${props => props.property}ms linear 0s alternate load;
  bottom: 0%;
  background-color: black;
  position: absolute;
  opacity: 0.1;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const HiddenLoader = styled("div")`
  display: flex;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Column = styled("div")`
  display: flex;
  align-items: center;
`;

export const CancelColumn = styled("div")`
  display: flex;
  align-items: start;
  height: 20px;
`;

export const Message = styled("h2")`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #757575;
  margin-bottom: 7px;
`;

export const Tittle = styled("h1")`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-left: 10px;
  color: rgb(93, 93, 93);
  margin: 5px 0px 10px 10px;
`;

export const Cancel = styled("button")`
  border: 0px;
`;

export const Image = styled("img")`
  width: 20px;
  height: 20px;
`;