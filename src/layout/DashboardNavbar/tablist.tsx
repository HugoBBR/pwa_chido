import { memo } from 'react';

import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';

import routes from '@/routes';

const TabListNav = ({ handleChange, pathname }: any) => (
  <TabList onChange={handleChange} textColor="inherit" centered>
    {Object.values(routes).map(({ path, components }) => {
      if (pathname === path) {
        return components!.map(({ tabTitle, tabIndex }) => (
          <Tab label={tabTitle} value={tabIndex} key={tabIndex} sx={{ paddingY: 0 }} />
        ));
      }
    })}
  </TabList>
);

export default memo(TabListNav);
