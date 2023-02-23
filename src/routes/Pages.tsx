import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import PageWithTabs from '@/layout/PageWithTabs';
import { getPageHeight } from '@/utils/utils';

import routes from '.';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, components }) => {
          return (
            <Route key={path} path={path} element={<PageWithTabs components={components} />} />
          );
        })}
      </Routes>
    </Box>
  );
}

export default Pages;
