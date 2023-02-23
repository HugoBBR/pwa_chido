import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome,
  Inventory,
  Users,
  Vendors,
  VendorsDG,
  Page3,
  Page4,
  NotFound,
  IsLoading,
  Page5,
  Settings,
}
type PathRouteCustomProps = {
  title?: string;
  components?: {
    tabComponent: FC;
    tabTitle: string;
    tabIndex: string;
  }[];
  component?: FC;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
