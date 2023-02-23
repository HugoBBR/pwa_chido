import ActionCell from '@/components/ActionCell';

const dataTableVendorsData = {
  columns: [
    { Header: 'Address', accessor: 'address', width: '20%' },
    { Header: 'Contact Name', accessor: 'contactName' },
    { Header: 'Contact Email', accessor: 'contactEmail' },
    { Header: 'Contact Phone', accessor: 'contactPhone' },
    { Header: 'Website', accessor: 'website' },
    {
      Header: '',
      accessor: 'action',
      width: '5%',
      Cell: ({ value }: any) => <ActionCell value={value} />,
    },
  ],
};

export default dataTableVendorsData;
