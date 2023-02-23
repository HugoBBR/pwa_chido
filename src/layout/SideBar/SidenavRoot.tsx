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
import Drawer from '@mui/material/Drawer';
import { Theme, styled } from '@mui/material/styles';

export default styled(Drawer)(({ theme, ownerState }: { theme?: Theme | any; ownerState: any }) => {
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, miniSidenav } = ownerState;

  const sidebarWidth = 280;
  const { white, transparent } = palette;
  const { xxl } = boxShadows;
  const { pxToRem } = functions;

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => {
    return {
      transform: 'translateX(0)',
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),

      [breakpoints.up('xxl')]: {
        backgroundColor: transparentSidenav ? transparent.main : white.main,
        boxShadow: 'none',
        marginBottom: transparentSidenav ? 0 : 'inherit',
        left: '0',
        width: sidebarWidth,
        overflowX: 'hidden',
        overflowY: 'hidden',
        // transform: "translateX(0)",
        transition: transitions.create(['width', 'background-color'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.enteringScreen,
        }),
      },
    };
  };

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => {
    return {
      transform: `translateX(${pxToRem(-320)})`,
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),

      [breakpoints.up('xxl')]: {
        backgroundColor: transparentSidenav ? transparent.main : white.main,
        boxShadow: transparentSidenav ? 'none' : xxl,
        marginBottom: transparentSidenav ? 0 : 'inherit',
        left: '-20',
        width: pxToRem(90),
        overflowX: 'hidden',
        overflowY: 'hidden',
        transform: 'translateX(0)',
        transition: transitions.create(['width', 'background-color'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.shorter,
        }),
      },
    };
  };

  return {
    '& .MuiDrawer-paper': {
      boxShadow: xxl,
      border: 'none',

      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
