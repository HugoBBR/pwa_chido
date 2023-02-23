/* eslint-disable @typescript-eslint/no-explicit-any */

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
// @mui material components
import Icon from '@mui/material/Icon';
import { Theme, styled } from '@mui/material/styles';

export default styled(Icon)(({ theme, ownerState }: { theme?: Theme | any; ownerState: any }) => {
  const { typography } = theme;
  const { size } = ownerState;

  const { fontWeightBold, size: fontSize } = typography;

  let fontSizes;
  if (size === 'small') {
    fontSizes = `${fontSize.md} !important`;
  }

  return {
    fontWeight: fontWeightBold,
    fontSize: fontSizes,
  };
});
