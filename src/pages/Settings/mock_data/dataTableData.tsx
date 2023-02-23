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
import iphone13 from '@/assets/images/iphone13.png';
import ActionCell from '@/components/ActionCell';
// ProductsList page components
import ProductCell from '@/components/ProductCell';
import SoftBadge from '@/components/SoftBadge';

// Badges
const stolen = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="Stolen" container />
);
const checkedOut = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="Checked out" container />
);
const lost = <SoftBadge variant="contained" color="dark" size="xs" badgeContent="Lost" container />;
const broken = (
  <SoftBadge variant="contained" color="secondary" size="xs" badgeContent="Broken" container />
);

const pending = (
  <SoftBadge variant="contained" color="warning" size="xs" badgeContent="Pending" container />
);

const available = (
  <SoftBadge variant="contained" color="primary" size="xs" badgeContent="Available" container />
);

const dataTableData = {
  columns: [
    {
      Header: '',
      accessor: 'image',
      Cell: ({ value: [data] }: any) => <ProductCell image={data.image} />,
    },
    { Header: 'Model Name', accessor: 'assetName' },

    { Header: 'Release Date', accessor: 'releaseDate' },

    { Header: 'Model Brand', accessor: 'modelBrand' },
    { Header: 'Model Cost', accessor: 'modelCost' },

    { Header: 'Years', accessor: 'years' },
    { Header: 'Equipment Type', accessor: 'equipmentType' },

    { Header: '', accessor: 'action' },
  ],

  rows: [
    {
      image: [{ image: iphone13 }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'checked out',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'checked out',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'pending',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'broken',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'available',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'checked out',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'checked out',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'lost',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    },
    {
      image: [{ image: iphone13, checked: false }],
      releaseDate: '10/7/2022',
      assetName: 'iPhone13',
      modelBrand: 'Apple',
      modelCost: '$700',
      status: 'stolen',
      years: '2',
      equipmentType: 'Cellular Device',
      action: <ActionCell />,
    } /* 
    {
      product: ["MacBook Pro", {  image:iphone13, checked: true }],
      category: "Electronics",
      price: "$1,869",
      sku: 877712,
      quantity: 0,
      status: "stolen",
      action: <ActionCell />,
    },
    {
      product: ["Metro Bar Stool", {  image:iphone13, checked: false }],
      category: "Furniture",
      price: "$99",
      sku: "0134729",
      quantity: 978,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Alchimia Chair", {  image:iphone13, checked: false }],
      category: "Furniture",
      price: "$2,999",
      sku: '10/7/2022'3213,
      quantity: 0,
      status: "stolen",
      action: <ActionCell />,
    },
    {
      product: ["Fendi Gradient Coat", {  image:iphone13, checked: false }],
      category: "Clothing",
      price: "$869",
      sku: 634729,
      quantity: 725,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Off White Cotton Bomber", {  image:iphone13, checked: false }],
      category: "Clothing",
      price: "$1,869",
      sku: 634729,
      quantity: 725,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Y-3 Yohji Yamamoto", {  image:iphone13, checked: true }],
      category: "Shoes",
      price: "$869",
      sku: 634729,
      quantity: 725,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Alexander McQueen", {  image:iphone13, checked: true }],
      category: "Clothing",
      price: "$1,199",
      sku: "00121399",
      quantity: 51293,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Luin Floor Lamp", {  image:iphone13, checked: true }],
      category: "Furniture",
      price: "$1,900",
      sku: 434729,
      quantity: 34,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Heron Preston T-shirt", {  image:iphone13, checked: false }],
      category: "Clothing",
      price: "$149",
      sku: 928341,
      quantity: 0,
      status: "stolen",
      action: <ActionCell />,
    },
    {
      product: ["Gray Living Chair", {  image:iphone13, checked: true }],
      category: "Furniture",
      price: "$2,099",
      sku: 9912834,
      quantity: 32,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Derbyshire Orange Sofa", {  image:iphone13, checked: false }],
      category: "Furniture",
      price: "$2,999",
      sku: 56'10/7/2022'51,
      quantity: 22,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Burberry Low-Tops", {  image:iphone13, checked: true }],
      category: "Shoes",
      price: "$869",
      sku: 634729,
      quantity: 725,
      status: "checked out",
      action: <ActionCell />,
    },
    {
      product: ["Dolce & Gabbana Skirt", {  image:iphone13, checked: false }],
      category: "Designer",
      price: "$999",
      sku: "01827391",
      quantity: 0,
      status: "stolen",
      action: <ActionCell />,
    },
    {
      product: ["Undercover T-shirt", {  image:iphone13, checked: true }],
      category: "Shoes",
      price: "$869",
      sku: 63472,
      quantity: 725,
      status: "checked out",
      action: <ActionCell />,
    }, */,
  ],
};

export default dataTableData;
