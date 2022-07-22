import React from 'react';

import { BsX } from 'react-icons/bs';

import { Content, Backdrop, XButton, active, inactive } from './styles';

export default function Modal({
  children,
  isActive,
  setIsActive,
  handleSlider,
}) {
  const handleBackdrop = () => {
    setIsActive(false);
    handleSlider();
  };

  return (
    <Backdrop onClick={handleBackdrop} style={isActive ? active : inactive}>
      <Content
        style={isActive ? { ...active, transform: 'translateY(0)' } : inactive}
      >
        {children}
        <XButton onClick={handleBackdrop}>
          <BsX />
        </XButton>
      </Content>
    </Backdrop>
  );
}
