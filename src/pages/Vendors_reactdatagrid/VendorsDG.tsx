import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Button, Checkbox, CircularProgress, Icon, IconButton, Stack, Typography } from '@mui/material';
import Box from '@mui/system/Box';

import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import './style/index.css'
import { TypeColumn } from '@inovua/reactdatagrid-community/types';
import { TypeHeaderProps } from '@inovua/reactdatagrid-community/types/TypeColumn';
import { useAuthInfo } from '@propelauth/react';
import PaginationToolbar from '@inovua/reactdatagrid-community/packages/PaginationToolbar'

import ActionCell from '@/components/ActionCell';
import FormDialog from '@/components/FormDialog/FormDialog';
import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';
import DashboardLayout from '@/layout/DashboardLayout';
import Card from '@mui/material/Card';
import SoftPagination from '@/components/SoftPagination';
import GetITOSAPI from '@/hooks/getAPI';


//TODO: PAGINATION
//TODO: REACT QUERY on every api call
//TODO: Make a component for a reusable table
//TODO: Delete no used code
function VendorsDG() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [rows, setRows] = useState({});

  const gridRef: any = useRef(null);
  const authInfo: any = useAuthInfo();
  const [accessToken, setAccessToken] = useState(authInfo['accessToken']);
  const [editOpen,setEditOpen]=useState(false)
    const {data,refetch,isFetching,isFetched}=GetITOSAPI({endpoint:'/vendors'})
  const CustomHeader = ({ value }: any) => (
    <Typography fontWeight={400} fontFamily="roboto" fontSize={15} color="grey">
      {value}
    </Typography>
  );
    console.log(import.meta.env.VITE_ITOS_API )
  const handleClickOpen = () => {
    setOpen(true);
  };
  const header = ({ value }: any) => <CustomHeader value={value} />;

  const columns: TypeColumn[] = [
    {
      name: 'name',
      header: 'Vendor name',
      type: 'string',
      defaultFlex: 2,
      
      renderHeader: header,
      headerProps:{style:{border:0}}
    },
    {
      name: 'address',
      header: 'Address',
      type: 'string',
      defaultFlex: 2,
      headerAlign: 'center',
      textAlign:'center',
      renderHeader: header,
      headerProps:{style:{border:0}}
    },
    {
      name: 'contactName',
      header: 'Contact Name',
      defaultFlex: 2,
      headerAlign: 'center',
      textAlign:'center',

      renderHeader: header,
      headerProps:{style:{border:0}}
    },
    {
      name: 'contactEmail',
      header: 'Contact Email',
      defaultFlex: 2,
      headerAlign: 'center',
      textAlign:'center',

      renderHeader: header,
      headerProps:{style:{border:0}}
    },
    {
      name: 'contactPhoneNumber',
      header: 'Contact Phone',
      defaultFlex: 2,
      headerAlign: 'center',
      textAlign:'center',

      renderHeader: header,
      headerProps:{style:{border:0}}
    },
    {
      name: 'website',
      header: 'Website',
      defaultFlex: 2,
      headerAlign: 'center',
      textAlign:'center',

      renderHeader: header,
      headerProps:{style:{border:0}}

    },
    {
      name: 'description',
      header: 'Description',
      defaultFlex: 2,
      headerAlign: 'center',
      textAlign:'center',

      renderHeader: header,
      headerProps:{style:{border:0}}    },
    {
      name: 'id',
      header: '',
      defaultFlex: 1,
      textAlign: 'center',
      headerProps:{style:{border:0}} ,

      render: ({ value }: any) => <ActionCell value={value} setOpen={setEditOpen}/>,
    },
  ];

  const renderPaginationToolbar = useCallback((paginationProps: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<PaginationToolbar> & Readonly<any>) => {
    
    console.log(paginationProps)
    return <div style={{ height: 5 }}>
      
        <PaginationToolbar {...paginationProps} bordered={false} />

    </div>
  }, [])

  const filterValue = [
    { name: 'address', operator: 'startsWith', type: 'string', value: '' },
    { name: 'contactName', operator: 'startsWith', type: 'string', value: '' },
    { name: 'contactEmail', operator: 'startsWith', type: 'string', value: '' },
    { name: 'contactPhoneNumber', operator: 'startsWith', type: 'string', value: '' },
    { name: 'website', operator: 'startsWith', type: 'string', value: '' },
    { name: 'name', operator: 'startsWith', type: 'string', value: '' },
    { name: 'description', operator: 'startsWith', type: 'string', value: '' },
  ];
  const Loading=()=>(  <Box m={4} p={4} textAlign="center" borderRadius="lg">
  <Typography variant="h5" mb={5}>
    Is loading...
  </Typography>
  <CircularProgress color="inherit" disableShrink />
</Box>)
  const gridStyle = {
    minHeight: 760,
  };
  const onSelectionChange = useCallback(({ selected }: any) => {
    setSelected(selected);
  }, []);
  

  useEffect(() => {
    if(!open && !editOpen){
      refetch()
    }
  }, [open,editOpen]);
  
  return (
    <DashboardLayout>
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
          </Stack>
        </SoftBox>

        <FormDialog
          key={2}
          isOpen={open === true}
          handleClose={() => setOpen(false)}
          isEdit={false}
        />
      </SoftBox>
      <SoftBox>
        <Card sx={{px:3,borderRadius: 4}}>
        <ReactDataGrid
          style={gridStyle}
          rowHeight={80}
          headerHeight={60}
          showCellBorders="horizontal"
          columns={columns}
          selected={selected}
          onSelectionChange={onSelectionChange}
          checkboxColumn
          handle={(ref) => (gridRef.current = ref ? ref.current : null)}
          dataSource={data!=undefined ? isFetched ? data : [] : []}
          idProperty="id"
              loadingText='uwu'
              emptyText={<Loading/>}
          //  defaultFilterValue={filterValue}
          showActiveRowIndicator={true}
          rowClassName='rows'
         // rowStyle={{ backgroundColor: 'white', color: '', fontSize: 16 }}
          className='body'
          pagination
          limit={8}
         // renderPaginationToolbar={renderPaginationToolbar}

          
        />
  {/*         <SoftBox
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
  
          >
            {showTotalEntries && (
              <SoftBox mb={{ xs: 3, sm: 0 }}>
                <SoftTypography variant="button" color="secondary" fontWeight="regular">
                  Showing {entriesStart} to {entriesEnd} of {rows.length} entries
                </SoftTypography>
              </SoftBox>
            )}
            {pageOptions.length > 1 && (
              <SoftPagination variant="contained" color={'dark'}>
                {canPreviousPage && (
                  <SoftPagination item onClick={() => previousPage()}>
                    <Icon sx={{ fontWeight: 'bold' }}>chevron_left</Icon>
                  </SoftPagination>
                )}
                {renderPagination.length > 6 ? (
                  <SoftBox width="5rem" mx={1}>
                    <SoftInput
                      inputProps={{ type: 'number', min: 1, max: customizedPageOptions.length }}
                      value={customizedPageOptions[pageIndex]}
                      onChange={() => {
                        handleInputPagination;
                        handleInputPaginationValue;
                      }}
                    />
                  </SoftBox>
                ) : (
                  renderPagination
                )}
                {canNextPage && (
                  <SoftPagination item onClick={() => nextPage()}>
                    <Icon sx={{ fontWeight: 'bold' }}>chevron_right</Icon>
                  </SoftPagination>
                )}
              </SoftPagination>
            )}
          </SoftBox>  */}      

        </Card>
        <p>Selected rows: {JSON.stringify(selected)}.</p>
      </SoftBox>
    </DashboardLayout>
  );
}

export default VendorsDG;
