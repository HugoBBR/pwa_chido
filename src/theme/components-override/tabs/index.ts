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
import boxShadows from '@/theme/base/boxShadows';
import colors from '@/theme/base/colors';
import pxToRem from '@/theme/functions/pxToRem';

const { grey, white } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;
type Type = any;
const tabs: Type = {
  styleOverrides: {
    root: {
      fontSize: 18,
      fontWeight: 'normal',
    },
    indicator: {
      height: '4%',
    },
  },
};

export default tabs;
