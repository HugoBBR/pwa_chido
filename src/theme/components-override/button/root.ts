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
// Soft UI Dashboard PRO React Helper Functions
import borders from '@/theme/base/borders';
import typography from '@/theme/base/typography';
import pxToRem from '@/theme/functions/pxToRem';

const { fontWeightBold, fontWeightLight, size } = typography;
const { borderRadius } = borders;

const root = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: size.xs,
  fontWeight: fontWeightLight,
  borderRadius: borderRadius.md,
  padding: `${pxToRem(12)} ${pxToRem(20)}`,
  lineHeight: 1.4,
  textAlign: 'center',
  textTransform: 'initial',
  userSelect: 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: `all 150ms ease-in`,

  '&:hover': {
    transform: 'scale(1.02)',
  },

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65,
  },

  '& .material-icons': {
    fontSize: pxToRem(15),
    marginTop: pxToRem(0),
  },
};

export default root;
