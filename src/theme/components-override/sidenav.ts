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
import borders from '@/theme/base/borders';
import colors from '@/theme/base/colors';
import pxToRem from '@/theme/functions/pxToRem';
// Soft UI Dashboard PRO React helper functions
import rgba from '@/theme/functions/rgba';

const { white } = colors;
const { borderRadius } = borders;

type Types = any;

const sidenav: any = {
  styleOverrides: {
    root: {
      width: pxToRem(100),
      whiteSpace: 'nowrap',
      border: 'none',
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: rgba(white.main, 0.8),
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      /*  height: `calc(100vh - ${pxToRem(32)})`, */
      height: '100',
      margin: pxToRem(0),
      borderRadius: borderRadius.xs,
      border: 'none',
    },

    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
};

export default sidenav;
