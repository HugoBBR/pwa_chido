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
// prop-types is a library for typechecking of props.
// @mui material components
import * as React from 'react';
import { ReactNode } from 'react';

import { Theme } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Soft UI Dashboard PRO React components
import SoftBox from '../../components/SoftBox';
// Soft UI Dashboard PRO React context
import { useSoftUIController } from '../../context';
// Custom styles for the SidenavCollapse
import {
  collapseIcon,
  collapseIconBox,
  collapseItem,
  collapseText,
} from './styles/sidenavCollapse';

interface Props {
  icon: ReactNode;
  name: string;
  children?: ReactNode;
  active?: boolean;
  noCollapse?: boolean;
  open?: boolean;
  [key: string]: any;
}

function SidenavCollapse({
  icon,
  name,
  children,
  active,
  noCollapse,
  open,
  ...rest
}: Props): JSX.Element {
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;

  return (
    <>
      <ListItem component="li">
        <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
          <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, sidenavColor })}
          >
            {typeof icon === 'string' ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme: Theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
          />
        </SoftBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: 'info',
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse

export default SidenavCollapse;
