import styled from 'styled-components';
import { animation, animationLoader } from './animation';

export const Toast = styled(animation)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 312px;
  height: 85px;
  box-shadow: 0px 1px 5px 0.5px rgb(236, 236, 236);
  border-radius: 5px;
`;

export const Row = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;

export const Loader = styled('div')`
  background-color: ${(props) => props.property};
  display: flex;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const HiddenLoader = styled(animationLoader)`
  animation: ${(props) => props.property}ms linear 0s alternate load;
  background-color: black;
  opacity: 0.2;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Column = styled('div')`
  display: flex;
  align-items: center;
`;

export const CancelColumn = styled('div')`
  display: flex;
  align-items: start;
  height: 20px;
`;

export const Message = styled('h2')`
  color: ${(props) => props.property};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #757575;
  margin-bottom: 7px;
`;

export const Tittle = styled('h1')`
  color: ${(props) => props.property};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-left: 10px;
  color: rgb(93, 93, 93);
  margin: 5px 0px 10px 10px;
`;

export const Cancel = styled('button')`
  background-color: ${(props) => props.property};
  border: 0px;
  width: 25px;
  height: 25px;
`;

export const Image = styled('img')`
  width: 20px;
  height: 20px;
`;
