import React from 'react';
import { createPortal } from 'react-dom';

import { BsX } from 'react-icons/bs';

import { Content, Backdrop, XButton, active, inactive } from './styles';

export default function Modal({
  children,
  isActive,
  handleClose,
  handleSlider,
}) {
  const handleBackdrop = () => {
    handleClose();
    handleSlider();
  };

  return createPortal(
    <Backdrop onClick={handleBackdrop} style={isActive ? active : inactive}>
      <Content
        style={isActive ? { ...active, transform: 'translateY(0)' } : inactive}
      >
        {children}
        <XButton onClick={handleBackdrop}>
          <BsX />
        </XButton>
      </Content>
    </Backdrop>,
    document.getElementById('modal')
  );
}
