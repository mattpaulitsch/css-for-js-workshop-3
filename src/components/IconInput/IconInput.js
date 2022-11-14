import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    '--font-size': 14 + 'px',
    '--border-thickness': 1 + 'px'
  },
  'large': {
    '--font-size': 18 + 'px',
    '--border-thickness': 2 + 'px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  size = SIZES[size]
  let iconSize = 18;
  let strokeWidth = 2;

  if  (size === 'small') {
    iconSize = 14;
    strokeWidth = 1;
  }

  return (
    <Wrapper style={size} width={width}>
      <IconWrapper style={{ '--size': iconSize + 'px'}}>
        <Icon id={icon} size={iconSize} strokeWidth={strokeWidth}/>
      </IconWrapper>
      <VisuallyHidden>
        <span>{label}</span>
      </VisuallyHidden>
      <CustomInput placeholder={placeholder}></CustomInput>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  font-weight: var(--weight);
  width: var(--size);
  height: var(--size);
  margin: auto;
  color: ${COLORS.gray500};
`

const Wrapper = styled.label`
  position: relative;
  width: ${p => p.width}px;
  border-bottom: var(--border-thickness) solid black;
  display:inline-block;

  &:hover ${IconWrapper} {
    color: black;
  }
`

const CustomInput = styled.input`
  border: none;
  width: 100%;
  font-weight: 700;
  color: ${COLORS.gray500};
  padding-left: 22px;
  font-size: var(--font-size);

  &:placeholder-shown {
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover:not(:placeholder-shown) {
    color: black;
  }
`

export default IconInput;
