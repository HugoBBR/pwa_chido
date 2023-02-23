import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
// react-table components
import {
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';

import { Card, Checkbox } from '@mui/material';
import Icon from '@mui/material/Icon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import PropTypes from 'prop-types';

import DataTableBodyCell from '@/components/DataTable/DataTableBodyCell';
import DataTableHeadCell from '@/components/DataTable/DataTableHeadCell';
import SoftBox from '@/components/SoftBox';
import SoftInput from '@/components/SoftInput';
import SoftPagination from '@/components/SoftPagination';
import SoftSelect from '@/components/SoftSelect';
import SoftTypography from '@/components/SoftTypography';
import { SearchContext } from '@/context/search';

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
  topMenu,
  tableData,
}: any) {
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => tableData, [tableData]);
  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      //Set the checkbox
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: '',
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} color="secondary" />,
          width: '5%',
        },
        ...columns,
      ]);
    },
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter, selectedRowIds },
  } = tableInstance;

  // Set the default value for the entries per page when component mounts
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);
  const { register, handleSubmit, watch, reset, setValue, getValues } = useForm();
  const { search } = useContext(SearchContext);
  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }: any) => setPageSize(value);

  // Render the paginations
  const renderPagination = pageOptions.map((option) => (
    <SoftPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </SoftPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }: any) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }: any) => gotoPage(Number(value.value - 1));
  // Search input value state
  //const [searchValue, setSearch] = useState(globalFilter);
  // Search input state handle
  useEffect(() => {
    setGlobalFilter(search);
  }, [search]);

  // A function that sets the sorted value for the table
  const setSortedValue = (column: any) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? 'desc' : 'asce';
    } else if (isSorted) {
      sortedValue = 'none';
    } else {
      sortedValue = false;
    }
    return sortedValue;
  };
  //TODO Select checkbox
  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <SoftBox>
      {topMenu}
      <Card sx={{ borderRadius: 5 }}>
        <TableContainer sx={{ boxShadow: 'none' }}>
          <Table {...getTableProps()}>
            <SoftBox component="thead">
              {headerGroups.map((headerGroup: any, key: number) => (
                <TableRow key={key} {...headerGroup.getHeaderGroupProps()} height={65}>
                  {headerGroup.headers.map((column: any, key: number) => (
                    <DataTableHeadCell
                      key={key}
                      {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                      width={column.width ? column.width : 'auto'}
                      align={column.align ? column.align : 'center'}
                      sorted={setSortedValue(column)}
                    >
                      {column.render('Header')}
                    </DataTableHeadCell>
                  ))}
                </TableRow>
              ))}
            </SoftBox>
            <TableBody {...getTableBodyProps()}>
              {page.map((row: any, key: number) => {
                prepareRow(row);
                return (
                  <TableRow
                    key={key}
                    {...row.getRowProps()}
                    sx={{ bgcolor: 'black' }}
                    selected={row.isSelected}
                  >
                    {row.cells.map((cell: any, key: number) => (
                      <DataTableBodyCell
                        key={key}
                        noBorder={noEndBorder && rows.length - 1 === key}
                        align={cell.column.align ? cell.column.align : 'center'}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </DataTableBodyCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <SoftBox
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
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
          </SoftBox>
        </TableContainer>
      </Card>
    </SoftBox>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: 'gradient', color: 'info' },
  isSorted: true,
  noEndBorder: false,
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(['contained', 'gradient']),
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light',
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
  topMenu: PropTypes.any,
  tableData: PropTypes.any,
};

export default DataTable;
