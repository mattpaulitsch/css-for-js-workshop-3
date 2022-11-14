import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <MySelect value={value} onChange={onChange}>
      <Icon id="chevron-down" size="1"></Icon>
      {children}
    </MySelect>
  );
};

const MySelect = styled.select`
  position: absolute;
  width: fit-content;
  padding: 12px 24px 12px 16px;
  height: 43px;
  color: ${COLORS.gray700};
  background: ${COLORS.transparentGray15};
  border-radius: 8px;

  &:hover {
    color: black;
  }

  & > svg {
    padding-left: 12px;
  }
`

export default Select;
