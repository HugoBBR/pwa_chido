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
// Soft UI Dashboard PRO React Base Styles
// Soft UI Dashboard PRO React Helper Function
import borders from '@/theme/base/borders';
import boxShadows from '@/theme/base/boxShadows';
import colors from '@/theme/base/colors';
import rgba from '@/theme/functions/rgba';

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { xxl, xl, lg, sm } = boxShadows;
type Types = any;

const card: Types = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: white.main,
      backgroundClip: 'border-box',
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.1)}`,
      borderRadius: borderRadius.md,
      boxShadow: boxShadows.xs,
    },
  },
};

export default card;
