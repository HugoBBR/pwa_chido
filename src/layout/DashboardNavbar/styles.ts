import { Theme } from '@mui/material';

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
function navbar(theme: Theme | any, ownerState: any) {
  const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
  const { transparentNavbar, absolute, light, collapsed } = ownerState;

  const { dark, white, text, transparent } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;
  const { borderRadius } = borders;
  console.log('Absolute', absolute);

  return {
    boxShadow: transparentNavbar || absolute ? 'none' : navbarBoxShadow,
    backdropFilter: transparentNavbar || absolute ? 'none' : `saturate(200%) blur(${pxToRem(30)})`,
    backgroundColor:
      transparentNavbar || absolute ? `${transparent.main} !important` : rgba(white.main, 0.8),

    color: () => {
      let color;

      if (light) {
        color = white.main;
      } else if (transparentNavbar) {
        color = text.main;
      } else {
        color = dark.main;
      }

      return color;
    },
    top: absolute ? pxToRem(15) : pxToRem(12),
    minHeight: pxToRem(70),
    display: 'grid',
    alignItems: 'center',
    borderRadius: borderRadius.xl,
    width: '100vw',
    overflow: 'hidden',
    paddingTop: pxToRem(6),
    paddingBottom: pxToRem(0),
    paddingRight: absolute ? pxToRem(10) : 0,
    paddingLeft:
      collapsed == 'noCollapsed' ? pxToRem(280) : collapsed == 'noBar' ? pxToRem(0) : pxToRem(120),

    '& > *': {
      transition: transitions.create('all', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    '& .MuiToolbar-root': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoints.up('sm')]: {
        minHeight: 'auto',
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  };
}

const navbarContainer = ({ breakpoints }: any) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '0',
    paddingBottom: '0',
  },
});

const navbarRow = ({ breakpoints }: any, { isMini }: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  [breakpoints.up('md')]: {
    justifyContent: isMini ? 'space-between' : 'stretch',
    width: isMini ? '100%' : 'max-content',
  },

  [breakpoints.up('xl')]: {
    justifyContent: 'stretch !important',
    width: 'max-content !important',
  },
});

const navbarIconButton = ({ typography: { size }, breakpoints }: any) => ({
  px: 0.7,

  '& .material-icons, .material-icons-round': {
    fontSize: `${size.xxl} !important`,
  },

  '& .MuiTypography-root': {
    display: 'none',

    [breakpoints.up('sm')]: {
      display: 'inline-block',
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
});

const navbarDesktopMenu = ({ breakpoints }: any) => ({
  display: 'none !important',
  cursor: 'pointer',

  [breakpoints.up('xl')]: {
    display: 'inline-block !important',
  },
});

const navbarMobileMenu = ({ breakpoints }: any) => ({
  display: 'inline-block',
  lineHeight: 0,

  [breakpoints.up('xxl')]: {
    display: 'none',
  },
});

export {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
};
