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
// @mui material components
import { useState } from 'react';

import { IconButton } from '@mui/material';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';

import FormDialog from '@/components/FormDialog/FormDialog';
// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
import SoftTypography from '@/components/SoftTypography';

function ActionCell({ value,setOpen }: { value?: any,setOpen:any }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
    setOpen(true);
  };

  return (
    <SoftBox display="flex" alignItems="center">
      <FormDialog
        key={1}
        isOpen={isOpen === true}
        handleClose={() =>{setIsOpen(false); setOpen(false);   }}
        isEdit
        value={value}
      />

      <SoftBox mx={2}>
        <SoftTypography variant="body1" color="secondary" sx={{ cursor: 'pointer', lineHeight: 0 }}>
          <Tooltip title="Edit product" placement="top">
            <IconButton onClick={handleClickOpen}>
              {' '}
              <Icon className="material-symbols-outlined">edit_square</Icon>
            </IconButton>
          </Tooltip>
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

export default ActionCell;
