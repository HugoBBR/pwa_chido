import { useState } from 'react';

import {
  Card,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import DataTable from '@/components/DataTable';
import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';
import SoftSelect from '@/components/SoftSelect';
import DashboardLayout from '@/layout/DashboardLayout';
import dataTableData from '@/pages/Settings/mock_data/dataTableData';

function Settings() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <SoftBox>{children}</SoftBox>}
      </div>
    );
  }
  const optionsMenu = () => (
    <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" py={3} px={3}>
      <SoftButton
        variant="text"
        color="dark"
        size="large"
        sx={{ fontSize: 20, fontWeight: 'bold' }}
      >
        Models
      </SoftButton>
      <SoftBox lineHeight={1}>
        <Stack direction="row">
          <SoftButton variant="text" size="large" sx={{ fontSize: 18, fontWeight: 'bold' }}>
            +&nbsp;Add Model
          </SoftButton>
        </Stack>
      </SoftBox>
    </SoftBox>
  );

  return (
    <DashboardLayout>
      <SoftBox my={4}>
        <Typography>Settings / Models</Typography>
      </SoftBox>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Card>
            <SoftBox height="100" pt={2}>
              <List>
                <ListItem>
                  <ListItemButton
                    selected={selectedIndex == 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    Models
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    selected={selectedIndex == 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemText primary="Sites" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    selected={selectedIndex == 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="Statuses" />
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton
                    selected={selectedIndex == 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="Item Category" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    selected={selectedIndex == 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <ListItemText primary="Stock Location" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    selected={selectedIndex == 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <ListItemText primary="Form Playground" />
                  </ListItemButton>
                </ListItem>
              </List>
              {/* 
<Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}               
        aria-label="Vertical tabs example"
        sx={{fontSize:'10'}}
      >
        <Tab sx={{fontSize:'10'}} label="Item One"/>
        <Tab label="Item One"/>

        <Tab label="Item One"/> 

        <Tab label="Item One"/>

      </Tabs> */}
            </SoftBox>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <TabPanel value={selectedIndex} index={0}>
            <Card>
              <SoftBox height="100%">
                <DataTable
                  topMenu={optionsMenu()}
                  table={dataTableData}
                  tableData={dataTableData.rows}
                  entriesPerPage={false}
                />
              </SoftBox>
            </Card>
          </TabPanel>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Settings;
