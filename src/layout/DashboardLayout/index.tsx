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
import { useEffect, useState } from 'react';
// react-router-dom components
import { useLocation } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
// Soft UI Dashboard PRO React context
import { setLayout, useSoftUIController } from '@/context';

function DashboardLayout({ children }: any) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState('collapsed');

  useEffect(() => {
    setLayout(dispatch, 'dashboard');
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth > 2000) {
      setCollapsed('noCollapsed');
    } else if (window.innerWidth < 1400) {
      setCollapsed('noBar');
    } else {
      setCollapsed('collapsed');
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerHeight);
      if (window.innerWidth > 2000) {
        setCollapsed('noCollapsed');
      } else if (window.innerWidth < 1400) {
        setCollapsed('noBar');
      } else {
        setCollapsed('collapsed');
      }
    }

    window.addEventListener('resize', handleResize);
  }, [miniSidenav]);

  return (
    <SoftBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 0,
        pt: pxToRem(120),
        position: 'relative',
        [breakpoints.up('xl')]: {
          marginLeft:
            collapsed == 'noCollapsed'
              ? pxToRem(280)
              : collapsed == 'noBar'
              ? pxToRem(0)
              : pxToRem(120),
          pt: pxToRem(70),
          marginRight:
            collapsed == 'noCollapsed'
              ? pxToRem(10)
              : collapsed == 'noBar'
              ? pxToRem(0)
              : pxToRem(20),
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </SoftBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
