import { useEffect, useState } from 'react';

import { TabPanel } from '@mui/lab';

import SoftBox from '@/components/SoftBox';
import routes from '@/routes';

function PageWithTabs({ components }: any) {
  return (
    <SoftBox>
      {components &&
        components.map(({ tabComponent: Component }: any, index: number) => {
          return (
            <TabPanel value={index.toString()} key={index}>
              <Component />
            </TabPanel>
          );
        })}
    </SoftBox>
  );
}

export default PageWithTabs;
