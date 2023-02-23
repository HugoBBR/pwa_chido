/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */

/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import * as React from 'react';
import { FC, forwardRef } from 'react';

import { BoxProps } from '@mui/material';

// prop-types is a library for typechecking of props
// Custom styles for SoftBox
import SoftBoxRoot from './SoftBoxRoot';

interface Props extends BoxProps {
  variant?: 'contained' | 'gradient';
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  [key: string]: any;
}

const SoftBox: FC<Props> = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
    <SoftBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
    />
  ),
);

// Setting default values for the props of SoftBox
SoftBox.defaultProps = {
  variant: 'contained',
  bgColor: 'transparent',
  color: 'dark',
  opacity: 1,
  borderRadius: 'none',
  shadow: 'none',
};

// Typechecking props for the SoftBox

export default SoftBox;
