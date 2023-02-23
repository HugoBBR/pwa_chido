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
// react-router-dom components
import { Link } from 'react-router-dom';

import { Icon } from '@mui/material';
// @mui material components
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import DataTable from '@/components/DataTable';
import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';
import SoftSelect from '@/components/SoftSelect';
import SoftTypography from '@/components/SoftTypography';
import DashboardLayout from '@/layout/DashboardLayout';
import dataTableData from '@/pages/Inventory/AssetsPage/mock_data/dataTableData';

function AssetsPage() {
  const optionsMenu = () => (
    <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" py={4}>
      <SoftButton
        variant="text"
        color="dark"
        size="large"
        sx={{ fontSize: 20, fontWeight: 'normal' }}
      >
        All Assets
      </SoftButton>
      <SoftBox lineHeight={1}>
        <Stack direction="row">
          <SoftButton
            variant="text"
            size="large"
            color="secondary"
            sx={{ fontSize: 16, fontWeight: 'normal' }}
          >
            <Icon color="error">delete_outlined</Icon>
            &nbsp;Delete selected
          </SoftButton>
          <SoftButton
            variant="text"
            size="large"
            color="secondary"
            sx={{ fontSize: 16, fontWeight: 'normal' }}
          >
            <Icon color="success">output_outlined</Icon>
            &nbsp;Check Out Selected
          </SoftButton>
          <SoftSelect defaultValue={{ label: 'Sort by' }} />
        </Stack>
      </SoftBox>
    </SoftBox>
  );

  return (
    <DashboardLayout>
      <SoftBox my={3}>
        <SoftBox px={3}>
          <DataTable
            table={dataTableData}
            tableData={dataTableData.rows}
            entriesPerPage={false}
            topMenu={optionsMenu()}
          />
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default AssetsPage;
