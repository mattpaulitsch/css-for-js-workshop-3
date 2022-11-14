/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ROUNDINGS = {
  true: {
    "--rounding": 4 + "px"
  },
  false: {
    "--rounding": 4 + "px " + 0 + "px " + 0 + "px " + 4 + "px"
  }
};

const MARGIN = {
  small: {
    "--progress-margin": 0 + "px",
    "--progress-height": 8 + "px"
  },
  medium: {
    "--progress-margin": 0 + "px",
    "--progress-height": 12 + "px"
  },
  large: {
    "--progress-margin": 4 + "px",
    "--progress-height": 16 + "px"
  }
};

const SIZES = {
  small: {
    "--wrapper-height": 8 + "px"
  },
  medium: {
    "--wrapper-height": 12 + "px"
  },
  large: {
    "--wrapper-height": 24 + "px"
  }
};

const ProgressBar = ({ value, size }) => {
  let PROGRESS_BAR_WIDTH = 370;
  let LARGE_MARGIN = 4;

  if (size === 'large') {
    PROGRESS_BAR_WIDTH -= 2 * LARGE_MARGIN;
  }

  let barPixels = PROGRESS_BAR_WIDTH;

  const roundingStyle = ROUNDINGS[value >= 100];
  const sizingStyle = SIZES[size]
  const marginStyle = MARGIN[size]

  if (value < 100) {
    barPixels = PROGRESS_BAR_WIDTH * (value / 100);
  }

  return (
    <Wrapper style={sizingStyle}>
      <Progress role="progressbar" barPixels={barPixels} style={{...roundingStyle, ...marginStyle}} aria-valuemin="0" araia-valuemax="100" aria-valuenow={value} aria-label="progressbar"></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 370px;
  height: var(--wrapper-height);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.div`
  position: absolute;
  width: ${p => p.barPixels}px;
  background: ${COLORS.primary};
  border-radius: var(--rounding);
  height: var(--progress-height);
  margin: var(--progress-margin);
`

export default ProgressBar;
