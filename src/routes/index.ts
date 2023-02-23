import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Home/Dashboard')),
        tabTitle: 'Dashboard',
        tabIndex: '0',
      },
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Home/EmptyComponent/index')),
        tabTitle: 'Inventory Dashboard',
        tabIndex: '1',
      },
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Home/EmptyComponent/index')),
        tabTitle: 'Sales Dashboard',
        tabIndex: '2',
      },
    ],
    path: '/',
    title: 'Home',
    icon: HomeOutlinedIcon,
  },
  [Pages.Inventory]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Inventory/AssetsPage/AssetsPage')),
        tabTitle: 'Assets',
        tabIndex: '0',
      },
    ],
    path: '/Inventory',
    title: 'Inventory',
    icon: Inventory2OutlinedIcon,
  },
  [Pages.Users]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Users/UsersPage')),
        tabTitle: 'Users',
        tabIndex: '0',
      },
    ],
    path: '/users',
    title: 'Users',
    icon: PeopleAltOutlinedIcon,
  },
  [Pages.Vendors]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Vendors')),
        tabTitle: 'Vendors',
        tabIndex: '0',
      },
    ],
    path: '/vendors',
    title: 'Vendors',
    icon: CorporateFareOutlinedIcon,
  },
  [Pages.VendorsDG]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Vendors_reactdatagrid')),
        tabTitle: 'Vendors',
        tabIndex: '0',
      },
    ],
    path: '/vendorsDG',
    title: 'Vendors DG',
    icon: CorporateFareOutlinedIcon,
  },
  [Pages.Page3]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Home/EmptyComponent/index')),
        tabTitle: 'OnWork',
        tabIndex: '0',
      },
    ],
    path: '/page-3',
    title: 'Page 3',
    icon: HandymanOutlinedIcon,
  },
  [Pages.Page4]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Home/EmptyComponent/index')),
        tabTitle: 'OnWork',
        tabIndex: '0',
      },
    ],
    path: '/page-4',
    title: 'Page 4',
    icon: SignalCellularAltOutlinedIcon,
  },
  [Pages.Page5]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Home/EmptyComponent/index')),
        tabTitle: 'OnWork',
        tabIndex: '0',
      },
    ],
    path: '/page-5',
    title: 'Page 5',
    icon: SensorsOutlinedIcon,
  },

  [Pages.Settings]: {
    components: [
      {
        tabComponent: asyncComponentLoader(() => import('@/pages/Settings')),
        tabTitle: 'Dashboard',
        tabIndex: '0',
      },
    ],
    path: '/settings',
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/components/NotFound')),
    path: '*',
  },
  [Pages.IsLoading]: {
    component: asyncComponentLoader(() => import('@/components/IsLoading')),
    path: '/loading',
  },
};

export default routes;
