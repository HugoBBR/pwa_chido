import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Dialog, DialogContent, DialogTitle, Icon, IconButton } from '@mui/material';

import AddEditVendor from '@/components/FormDialog/VendorForms/Add-EditVendor';
import SoftBox from '@/components/SoftBox';

function FormDialog({
  value,
  isEdit = false,
  isOpen,
  handleClose,
}: {
  value?: any;
  isEdit?: boolean;
  isOpen: boolean;
  handleClose: any;
}) {

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth={true}
      maxWidth={'xl'}
      PaperProps={{ style: { borderRadius: 20 } }}
    >
      <SoftBox p={4}>
          <DialogTitle sx={{ fontSize: 30, fontWeight: 'bold' }}>
            {isEdit && (<>Edit Vendor</>)}{!isEdit && (<>Add New vendor</>)}
            <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 40, top: 40 }}>
              <Icon fontSize="large">close</Icon>
            </IconButton>
          </DialogTitle>
        <DialogContent>
          <AddEditVendor handleClose={handleClose} value={value} isOpen={isOpen} />
        </DialogContent>
      </SoftBox>
    </Dialog>
  );
}

export default FormDialog;
