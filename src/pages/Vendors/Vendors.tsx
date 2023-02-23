import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Collapse, Icon, IconButton } from '@mui/material';
import { Stack } from '@mui/system';


import DataTable from '@/components/DataTable';
import FormDialog from '@/components/FormDialog/FormDialog';
import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';
import SoftInput from '@/components/SoftInput';
import SoftSelect from '@/components/SoftSelect';
import { SearchContext } from '@/context/search';
import { GetVendors } from '@/hooks/getData';
import { VendorsData } from '@/interfaces/vendorInterfaces';
import DashboardLayout from '@/layout/DashboardLayout';
import dataTableVendorsData from '@/pages/Vendors/mock_data/dataTableVendors';

function Vendors() {
  const [data, setData]: any = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const optionsMenu = () => (
    <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" py={3} px={0}>
      <SoftButton
        variant="text"
        size="large"
        sx={{ fontSize: 22, fontWeight: '500' }}
        onClick={handleClickOpen}
      >
        +&nbsp;Add Vendor
      </SoftButton>
      <SoftBox lineHeight={1}>
        <Stack direction="row">
          <IconButton
            sx={{
              fontSize: 18,
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            <Icon color="error" className="material-icons-outlined">
              delete
            </Icon>
            &nbsp;Delete selected
          </IconButton>
          <SoftBox pr={1}></SoftBox>
          <SoftSelect
            size="large"
            defaultValue={{ label: 'Sort by' }}
            options={dataTableVendorsData.columns.map((column) => ({
              value: column.accessor,
              label: column.Header,
            }))}
          />
        </Stack>
      </SoftBox>

      <FormDialog
        key={2}
        isOpen={open === true}
        handleClose={() => setOpen(false)}
        isEdit={false}
      />
    </SoftBox>
  );

  return (
    <DashboardLayout>
      <SoftBox p={2}>
        <SoftBox height="100%">
          {data && (
            <DataTable
              topMenu={optionsMenu()}
              table={dataTableVendorsData}
              tableData={data ? data : []}
              entriesPerPage={false}
            />
          )}
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Vendors;
