import { ThemeOptions } from '@mui/material/styles';
import { spacing } from '@mui/system';
import { deepmerge } from '@mui/utils';

import borders from '@/theme/base/borders';
import boxShadows from '@/theme/base/boxShadows';
import breakpoints from '@/theme/base/breakpoints';
import colors from '@/theme/base/colors';
import colorsDark from '@/theme/base/colorsDark';
import globals from '@/theme/base/globals';
import typography from '@/theme/base/typography';
import button from '@/theme/components-override/button';
import card from '@/theme/components-override/card';
import icon from '@/theme/components-override/icon';
import iconButton from '@/theme/components-override/iconButton';
import link from '@/theme/components-override/link';
import list from '@/theme/components-override/list';
import listItem from '@/theme/components-override/list/listItem';
import listItemText from '@/theme/components-override/list/listItemText';
import menu from '@/theme/components-override/menu';
import menuItem from '@/theme/components-override/menu/menuItem';
import sidenav from '@/theme/components-override/sidenav';
import svgIcon from '@/theme/components-override/svgIcon';
import tabs from '@/theme/components-override/tabs';
import tab from '@/theme/components-override/tabs/tab';
import boxShadow from '@/theme/functions/boxShadow';
import hexToRgb from '@/theme/functions/hexToRgb';
import linearGradient from '@/theme/functions/linearGradient';
import pxToRem from '@/theme/functions/pxToRem';
import rgba from '@/theme/functions/rgba';

import { Themes } from './types';

const sharedTheme = {
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      ...colors,
    },
    boxShadows: {
      ...boxShadows,
    },
    functions: {
      boxShadow,
      hexToRgb,
      linearGradient,
      pxToRem,
      rgba,
    },
    borders: { ...borders },
    typography: { ...typography },
    breakpoints: { ...breakpoints },
    components: {
      MuiCssBaseline: { styleOverrides: { ...globals } },
      MuiDrawer: { ...sidenav },
      MuiList: { ...list },
      MuiIcon: { ...icon },
      MuiSvgIcon: { ...svgIcon },
      MuiListItem: { ...listItem },
      MuiListItemText: { ...listItemText },
      MuiLink: { ...link },
      MuiMenuItem: { ...menuItem },
      MuiButton: { ...button },
      MuiIconButton: { ...iconButton },
      MuiTab: { ...tab },
      MuiTabs: { ...tabs },
      MuiCard: { ...card },
      MuiMenu: { ...menu },
    },
  }),
};

export default themes;
