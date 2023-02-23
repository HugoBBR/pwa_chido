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
import { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';

export default styled('div')(({ theme, ownerState }: { theme?: Theme | any; ownerState: any }) => {
  const { palette, functions, borders } = theme;
  const { error, success, disabled, icon } = ownerState;

  const { inputColors, grey, white } = palette;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;

  // border color value
  let borderColorValue = inputColors.borderColor.main;

  if (error) {
    borderColorValue = inputColors.error;
  } else if (success) {
    borderColorValue = inputColors.success;
  }

  return {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: disabled ? grey[300] : white.main,
    border: `${borderWidth[1]} solid`,
    borderRadius: borderRadius.md,
    borderColor: borderColorValue,
    padding: 1,
    paddingRight: 2,
    '& .MuiInputBase-input': {
      height: pxToRem(35),
      width: pxToRem(180),
    },
  };
});
