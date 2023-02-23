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
// Soft UI Dashboard PRO React base styles
// Soft UI Dashboard PRO React helper functions
import borders from '@/theme/base/borders';
import colors from '@/theme/base/colors';
import typography from '@/theme/base/typography';
import pxToRem from '@/theme/functions/pxToRem';

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { dark } = colors;
type Type = any;
const tab: Type = {
  styleOverrides: {
    root: {
      textTransform: 'initial ',
      fontSize: 18,
      fontWeight: 'bold',
      height: '200 !important',
      margin: '0px 15px',
      minWidth: '0 !important',
      padding: pxToRem(4),
    },
  },
};

export default tab;
