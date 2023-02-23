import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { TabContext } from '@mui/lab';
import CssBaseline from '@mui/material/CssBaseline';

import { setMiniSidenav, useSoftUIController } from '@/context';
import { SearchProvider } from '@/context/search';
import DashboardNavbar from '@/layout/DashboardNavbar';
import Sidenav from '@/layout/SideBar';
import Pages from '@/routes/Pages';
import { withErrorHandler } from '@/utils/error-handling';
import AppErrorBoundaryFallback from '@/utils/error-handling/fallbacks/App';

function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [value, setValue] = useState('0');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <>
          <TabContext value={value}>
            <Sidenav
              color={sidenavColor}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <SearchProvider>
              <DashboardNavbar handleChange={handleChange} />
              <Pages />
            </SearchProvider>
          </TabContext>
        </>
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
