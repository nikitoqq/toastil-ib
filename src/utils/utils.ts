/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import {
  PORTAL_CLASS,
  PORTAL_STYLE,
  TOAST_ICON_PATH,
  TOAST_POSITION,
} from '../constants';

import { themeStyle } from '../theme';

import { Position, Theme, Transition, Type } from '../types';

export const setType = (type: Type) =>
  TOAST_ICON_PATH[type] || TOAST_ICON_PATH.default;

export const setTheme = (theme: Theme, type: Type) => {
  const themes = themeStyle[theme];
  return { ...themes[type] };
};

export const setTransition = (
  transition: Transition,
  position: Position,
  revers?: string,
) => {
  const reversMode = typeof revers === 'undefined' ? '' : revers;

  if (transition === 'flip' || transition === 'zoom') {
    return `0.5s ease alternate ${position.includes('center') ? `${transition}-center` : `${transition}`}${reversMode}`;
  }
  return `0.5s linear 0s alternate ${`${transition}-${position}`}${reversMode}`;
};

PORTAL_CLASS.forEach((el: Position) => {
  const createElement = document.createElement('div');
  createElement.id = `portal-${el}`;
  document.body.appendChild(createElement);
  document
    .getElementById(`portal-${el}`)!
    .setAttribute('style', `${PORTAL_STYLE}${TOAST_POSITION[el]}`);
});
