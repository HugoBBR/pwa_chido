/* eslint-disable @typescript-eslint/no-non-null-assertion */

/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from 'react';
// react-router-dom components
import { NavLink, useLocation } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
// prop-types is a library for typechecking of props.
// @mui material components
import List from '@mui/material/List';
import Stack from '@mui/system/Stack';

import { useLogoutFunction } from '@propelauth/react';

import routes from '@/routes';

import SoftBox from '../../components/SoftBox';
import SoftTypography from '../../components/SoftTypography';
import { setMiniSidenav, useSoftUIController } from '../../context';
import SidenavCollapse from './SidenavCollapse';
import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from './styles/sidenav';

interface Props {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
  brand?: string;
  brandName?: string;
  [key: string]: any;
  children?: any;
}

function Sidenav({ color, brand, brandName, ...rest }: Props): JSX.Element {
  const logout: never[] | ((arg0: boolean) => void) =[]
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav }: any = controller;
  const location = useLocation();

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 2000);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener('resize', handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();
    console.log(closeSidenav);
    console.log('miniside', miniSidenav);
    console.log(transparentSidenav);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleMiniSidenav);
  }, [dispatch, location]);

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SoftBox pt={10} pb={8} px={5} textAlign="center">
        <SoftBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}></Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <SoftBox component="img" src={brand} alt="Soft UI Logo" width="2rem" />}
          <SoftBox
            width={'100%'}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          ></SoftBox>
        </SoftBox>
      </SoftBox>
      <List>
        {Object.values(routes)
          .filter((route) => route.title)
          .map(({ path, title, icon: Icon }) => (
            <NavLink to={path!} key={title}>
              <SidenavCollapse
                name={title!}
                icon={Icon ? <Icon /> : <DefaultIcon />}
                noCollapse={false}
                active={location.pathname === path}
              ></SidenavCollapse>
            </NavLink>
          ))}
      </List>

      <Stack direction="column-reverse" height="100%" pb={2}>
        <SidenavCollapse
          name={'Logout'}
          icon={<LogoutOutlinedIcon />}
          noCollapse={true}
          active={false}
          onClick={() => {
            logout(true);
          }}
        ></SidenavCollapse>
        <NavLink to={'route'} key={'key2'}>
          <SidenavCollapse
            pb={10}
            name={'Report an Issue'}
            icon={<InfoOutlinedIcon />}
            noCollapse={true}
            active={false}
          ></SidenavCollapse>
        </NavLink>
        <NavLink to={'/settings'} key={'key3'}>
          <SidenavCollapse
            pb={10}
            name={'Settings'}
            icon={<SettingsOutlinedIcon />}
            noCollapse={true}
            active={location.pathname === '/settings'}
          ></SidenavCollapse>
        </NavLink>
        <Divider sx={{ margin: 2 }} />
      </Stack>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: 'dark',
  brand: '',
};

export default Sidenav;
