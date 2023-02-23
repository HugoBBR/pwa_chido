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
import { memo, useContext, useEffect, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
// react-router components
import { useLocation } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { MenuItem } from '@mui/material';
// prop-types is a library for typechecking of props.
// @mui core components
import AppBar from '@mui/material/AppBar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';

// Images
// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
import SoftInput from '@/components/SoftInput';
import SoftTypography from '@/components/SoftTypography';
// Soft UI Dashboard PRO React context
import { setMiniSidenav, setTransparentNavbar, useSoftUIController } from '@/context';
import { SearchContext } from '@/context/search';
// Soft UI Dashboard PRO React example components
// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarDesktopMenu,
  navbarIconButton,
  navbarMobileMenu,
  navbarRow,
} from '@/layout/DashboardNavbar/styles';
import Tablist from '@/layout/DashboardNavbar/tablist';
import useTheme from '@/store/theme';
import typography from '@/theme/base/typography';

function DashboardNavbar({
  absolute = false,
  light,
  isMini = false,
  handleChange,
}: {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
  handleChange: any;
}) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar } = controller;
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);

  const pathname = useLocation().pathname;
  console.log(pathname);
  const [, themeActions] = useTheme();
  const { size } = typography;
  const [collapsed, setCollapsed] = useState('collapsed');

  const useDebounce = (func: any, delay: number) => {
    const debouncedFunction = (...args: any[]) => {
      setTimeout(() => {
        func(...args);
      }, delay);
    };

    return debouncedFunction;
  };
  const { updateSearch } = useContext(SearchContext);

  const onSearchChange = useDebounce((value: any) => {
    if (value !== undefined) {
      console.log(value);
      updateSearch(value);
    }
  }, 100);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 2000) {
        setCollapsed('noCollapsed');
      } else if (window.innerWidth < 1400) {
        setCollapsed('noBar');
      } else {
        setCollapsed('collapsed');
      }
    }
    if (window.innerWidth > 2000) {
      setCollapsed('noCollapsed');
    } else if (window.innerWidth < 1400) {
      setCollapsed('noBar');
    } else {
      setCollapsed('collapsed');
    }
    window.addEventListener('resize', handleResize);
  }, [miniSidenav]);

  const handleMiniSidenav = () => {
    setMiniSidenav(dispatch, !miniSidenav);
  };
  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  useEffect(() => {
    handleChange(null, '0');
  }, [pathname]);
  // Render the notifications menu

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleCloseMenu}>Option 1</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Option 2</MenuItem>
      <MenuItem onClick={themeActions.toggle}>Schedule</MenuItem>
      <SoftBox component="div" bgColor="secondary" opacity={0.3} width="100%" height="1px" my={1} />
      <MenuItem onClick={handleCloseMenu}>
        <SoftTypography variant="inherit" color="error">
          Remove
        </SoftTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position={'absolute'}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, collapsed })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            <IconButton
              size="small"
              color="inherit"
              sx={navbarMobileMenu}
              onClick={handleMiniSidenav}
            >
              <Icon className={light ? 'text-white' : 'text-dark'}>
                {miniSidenav ? 'menu_open' : 'menu'}
              </Icon>
            </IconButton>
            <SoftBox>
              <Tablist pathname={pathname} handleChange={handleChange} />
            </SoftBox>
          </SoftBox>
        </SoftBox>

        <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
          <SoftBox pr={1}>
            <SoftInput
              placeholder="Search..."
              size="medium"
              variant="text"
              icon={{ component: 'search', direction: 'left' }}
              onChange={({ currentTarget }: any) => {
                onSearchChange(currentTarget.value);
              }}
            />
          </SoftBox>
          <SoftBox color={light ? 'white' : 'inherit'}>
            <IconButton
              size="medium"
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <SoftBox
                width="3rem"
                height="3rem"
                bgColor="white"
                borderRadius="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={'#e0e0e0'}
                fontSize={size.xl}
                border={1}
              >
                <Icon
                  className={light ? 'text-white' : 'text-dark'}
                  sx={{
                    backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                      gradients['white']
                        ? linearGradient(gradients['white'].main, gradients['white'].state)
                        : linearGradient(gradients.info.main, gradients.info.state),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  notifications
                </Icon>
              </SoftBox>
            </IconButton>
            <IconButton
              size="medium"
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={undefined}
            >
              <SoftBox
                width="3rem"
                height="3rem"
                bgColor="white"
                borderRadius="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={'#e0e0e0'}
                fontSize={size.xl}
                border={1}
              >
                <Icon
                  sx={{
                    backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                      gradients['white']
                        ? linearGradient(gradients['white'].main, gradients['white'].state)
                        : linearGradient(gradients.info.main, gradients.info.state),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  personIcon
                </Icon>
              </SoftBox>
            </IconButton>

            <IconButton
              size="medium"
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={handleOpenMenu}
            >
              <MoreVertIcon />
            </IconButton>
            {renderMenu()}
          </SoftBox>
        </SoftBox>
      </Toolbar>
    </AppBar>
  );
}

export default memo(DashboardNavbar);
