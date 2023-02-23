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

/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
// Images
// ProductsList page components
import { Avatar, Icon } from '@mui/material';

import team1 from '@/assets/mock_images/team-2.jpg';
import team2 from '@/assets/mock_images/team-3.jpg';
import team3 from '@/assets/mock_images/team-4.jpg';
import team4 from '@/assets/mock_images/team-5.jpg';
import ActionCell from '@/components/ActionCell';

// Badges
const active = <Icon color="error">block</Icon>;
const inactive = <Icon color="success">check_circle_outlined</Icon>;

const dataTableData = {
  columns: [
    {
      Header: '',
      accessor: 'image',
      width: '2%',
      Cell: ({ value: [data] }: any) => <Avatar sx={{ width: 50, height: 50 }} src={data.image} />,
    },
    { Header: 'Display Name', accessor: 'displayName' },
    { Header: 'Principal Name', accessor: 'principalName' },

    { Header: 'Company', accessor: 'company' },
    { Header: 'City', accessor: 'city' },
    {
      Header: 'Account Status',
      accessor: 'accountStatus',
      Cell: ({ value }: any) => (!value ? active : inactive),
    },
    { Header: 'Termination Date / Time', accessor: 'terminationDate' },

    { Header: '', accessor: 'action', width: '5%' },
  ],

  rows: [
    {
      image: [{ image: team1 }],
      displayName: 'Phillip Novak',
      principalName: 'phillip.novak@gmail.com',
      company: 'Star Assistance',
      city: 'Dallas',
      accountStatus: false,
      terminationDate: '10/7/2022, 4:10 PM',
      action: <ActionCell />,
    },
    {
      image: [{ image: team2 }],
      displayName: 'Rodrigo Lugo',
      principalName: 'Rodrigo.Lugo@gmail.com',
      company: 'Express Restoration',
      city: 'Chicago',
      accountStatus: true,
      terminationDate: '',
      action: <ActionCell />,
    },
    {
      image: [{ image: team3 }],
      displayName: 'Chris Chandler',
      principalName: 'Chris.Chandler@gmail.com',
      company: 'Kingston Construction',
      city: 'Sacramento',
      accountStatus: true,
      terminationDate: '',
      action: <ActionCell />,
    },
    {
      image: [{ image: team4 }],
      displayName: 'Adam Reese',
      principalName: 'Adam.Reese@gmail.com',
      company: 'Alliance Security',
      city: 'Houston',
      accountStatus: false,
      terminationDate: '10/7/2022, 4:10 PM',
      action: <ActionCell />,
    },
    {
      image: [{ image: team1 }],
      displayName: 'Phillip Novak',
      principalName: 'phillip.novak@gmail.com',
      company: 'Star Assistance',
      city: 'Dallas',
      accountStatus: false,
      terminationDate: '10/7/2022, 4:10 PM',
      action: <ActionCell />,
    },
    {
      image: [{ image: team2 }],
      displayName: 'Rodrigo Lugo',
      principalName: 'Rodrigo.Lugo@gmail.com',
      company: 'Express Restoration',
      city: 'Chicago',
      accountStatus: true,
      terminationDate: '',
      action: <ActionCell />,
    },
    {
      image: [{ image: team3 }],
      displayName: 'Chris Chandler',
      principalName: 'Chris.Chandler@gmail.com',
      company: 'Kingston Construction',
      city: 'Sacramento',
      accountStatus: true,
      terminationDate: '',
      action: <ActionCell />,
    },
    {
      image: [{ image: team4 }],
      displayName: 'Adam Reese',
      principalName: 'Adam.Reese@gmail.com',
      company: 'Alliance Security',
      city: 'Houston',
      accountStatus: false,
      terminationDate: '10/7/2022, 4:10 PM',
      action: <ActionCell />,
    },
    {
      image: [{ image: team1 }],
      displayName: 'Phillip Novak',
      principalName: 'phillip.novak@gmail.com',
      company: 'Star Assistance',
      city: 'Dallas',
      accountStatus: false,
      terminationDate: '10/7/2022, 4:10 PM',
      action: <ActionCell />,
    },
    {
      image: [{ image: team2 }],
      displayName: 'Rodrigo Lugo',
      principalName: 'Rodrigo.Lugo@gmail.com',
      company: 'Express Restoration',
      city: 'Chicago',
      accountStatus: true,
      terminationDate: '',
      action: <ActionCell />,
    },
    {
      image: [{ image: team3 }],
      displayName: 'Chris Chandler',
      principalName: 'Chris.Chandler@gmail.com',
      company: 'Kingston Construction',
      city: 'Sacramento',
      accountStatus: true,
      terminationDate: '',
      action: <ActionCell />,
    },
    {
      image: [{ image: team4 }],
      displayName: 'Adam Reese',
      principalName: 'Adam.Reese@gmail.com',
      company: 'Alliance Security',
      city: 'Houston',
      accountStatus: false,
      terminationDate: '10/7/2022, 4:10 PM',
      action: <ActionCell />,
    },
  ],
};

export default dataTableData;
