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
function collapseItem(theme: Theme | any, ownerState: any) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav } = ownerState;

  const { dark, white, text, transparent } = palette;
  const { xxl, xl, xs } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    background: active && !transparentSidenav ? dark.main : transparent.main,
    color: active && !transparentSidenav ? white.main : text.main,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${pxToRem(10.8)} ${pxToRem(14)} ${pxToRem(10.8)} ${pxToRem(15)}`,
    margin: `0 ${pxToRem(16)}`,
    borderRadius: borderRadius.lg,
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    boxShadow: active && transparentSidenav ? xs : 'none',
    [breakpoints.up('xl')]: {
      boxShadow: () => {
        if (active) {
          return transparentSidenav ? xs : 'none';
        }

        return 'none';
      },
      transition: transitions.create('box-shadow', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },
  };
}

function collapseIconBox(theme: Theme | any, ownerState: any) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, sidenavColor } = ownerState;

  const { white, info, light, gradients, transparent, grey } = palette;
  const { md, xs } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    background: () => {
      if (active) {
        return sidenavColor === 'default' ? info.main : palette[sidenavColor].main;
      }

      return 'default';
    },
    minWidth: pxToRem(30),
    minHeight: pxToRem(35),
    fontSize: pxToRem(30),
    fontWeight: 500,
    borderRadius: borderRadius.sm,
    display: 'grid',
    placeItems: 'center',
    boxShadow: 0,
    transition: transitions.create('margin', {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up('xl')]: {
      background: () => {
        let background;

        if (!active) {
          background = !transparentSidenav ? transparent.main : light.main;
        } else if (sidenavColor === 'default') {
          background = info.main;
        } else if (sidenavColor === 'warning') {
          background = gradients.warning.main;
        } else {
          background = palette[sidenavColor].main;
        }

        return background;
      },
    },

    '& svg, svg g': {
      fill: active ? white.main : grey[500],
    },
  };
}

const collapseIcon = ({ palette: { white, gradients } }: any, { active }: any) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseText(theme: any, ownerState: any) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;

  const { size, fontWeightMedium, fontWeightRegular } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(13),
    [breakpoints.up('xl')]: {
      opacity: miniSidenav || (miniSidenav && !transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && !transparentSidenav) ? 0 : '100%',
      marginLeft: miniSidenav || (miniSidenav && !transparentSidenav) ? 0 : pxToRem(12.8),
      transition: transitions.create(['opacity', 'margin'], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    '& span': {
      fontWeight: active ? fontWeightMedium : fontWeightRegular,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
