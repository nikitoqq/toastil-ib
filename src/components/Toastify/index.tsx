/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react';

import SvgIcon from '../SvgIcon';

import { setTheme, setTransition } from '../../utils/utils';
import { CANCEL_SVG_PATH, TOAST_ICON_PATH } from '../../constants';

import {
  Toast,
  Column,
  Message,
  Row,
  Loader,
  Cancel,
  CancelColumn,
  Tittle,
  HiddenLoader,
} from './styled';

import { ToastProps, ToastSetting } from '../../types';

export default function Toastify({
  title,
  text,
  position,
  type,
  theme,
  transition,
  autoClose,
  deleteToast,
  id,
}: ToastProps) {
  const [toastSetting, setToastSetting] = useState<ToastSetting>({
    text,
    title,
    type: TOAST_ICON_PATH[type],
    ...setTheme(theme, type),
    margin: '10px 0px',
    autoClose,
    animation: setTransition(transition, position),
  });

  const funcDelete = (target: HTMLElement) => {
    setToastSetting({
      ...toastSetting,
      animation: setTransition(transition, position, '-reverse'),
    });
    setTimeout(() => {
      deleteToast!(target.id);
    }, 500);
  };

  return (
    <Toast style={toastSetting}>
      <Row>
        <Column>
          <Tittle property={toastSetting.h1}>{title}</Tittle>
        </Column>
        <CancelColumn>
          <Cancel
            onClick={(e) => funcDelete(e.target as HTMLElement)}
            property={toastSetting.backgroundColor}
          >
            <SvgIcon id={id} color="gray" size={25} path={CANCEL_SVG_PATH} />
          </Cancel>
        </CancelColumn>
      </Row>
      <Row>
        <Column>
          <SvgIcon color={toastSetting.iconColor} path={toastSetting.type} />
          <Message property={toastSetting.h2}>{text}</Message>
        </Column>
      </Row>
      <Loader property={toastSetting.barColor}>
        <HiddenLoader
          id={id}
          onAnimationEnd={(e) => funcDelete(e.target as HTMLElement)}
          property={toastSetting.autoClose}
        />
      </Loader>
    </Toast>
  );
}
