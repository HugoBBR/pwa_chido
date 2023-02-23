import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormLabel, Grid, TextField } from '@mui/material';


import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';
import { GetVendor, PostVendors, editVendor } from '@/hooks/getData';
import { VendorFormInputs, VendorsData } from '@/interfaces/vendorInterfaces';

function AddEditVendor({
  handleClose,
  value,
  isOpen,
}: {
  handleClose: any;
  value: number;
  isOpen: any;
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<VendorFormInputs>({ criteriaMode: 'all' });
  const inputs = [
    'address',
    'contactEmail',
    'contactName',
    'contactPhoneNumber',
    'website',
    'name',
    'description',
  ];
  const [formData, setFormData]: any = useState(null);


  return (
    <>
      <form onSubmit={handleSubmit(()=>{
        
      })}>
        <Grid container columnSpacing={3} rowSpacing={2} paddingTop={2}>
          <Grid item xs={6}>
            <SoftBox>
              <FormLabel>Vendor Name</FormLabel>
              <TextField
                {...register('name')}
                autoFocus
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Model Name"
                type="text"
              />

              {errors.name && errors.name!.types!.required && <p>This field is required</p>}
            </SoftBox>
          </Grid>
          <Grid item xs={6}>
            <SoftBox>
              <FormLabel>Contact Name</FormLabel>
              <TextField
                {...register('contactName')}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Contact Name"
              />
              {errors.contactName && errors.contactName!.types!.required && (
                <p>This field is required</p>
              )}
            </SoftBox>
          </Grid>
          <Grid item xs={6}>
            <SoftBox>
              <FormLabel>Contact Email</FormLabel>
              <TextField
                {...register('contactEmail')}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Contact Email"
              />
              {errors.contactEmail && errors.contactEmail!.types!.required && (
                <p>This field is required</p>
              )}
            </SoftBox>
          </Grid>
          <Grid item xs={6}>
            <SoftBox>
              <FormLabel>Contact Phone</FormLabel>
              <TextField
                {...register('contactPhoneNumber')}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Contact Phone"
              />
              {errors.contactPhoneNumber && errors.contactPhoneNumber!.types!.required && (
                <p>This field is required</p>
              )}
            </SoftBox>
          </Grid>
          <Grid item xs={6}>
            <SoftBox>
              <FormLabel>Address</FormLabel>
              <TextField
                {...register('address')}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Address"
              />
              {errors.address && errors.address!.types!.required && <p>This field is required</p>}
            </SoftBox>
          </Grid>
          <Grid item xs={6}>
            <SoftBox>
              <FormLabel>Website</FormLabel>
              <TextField
                {...register('website')}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Website"
              />
              {errors.website && errors.website!.types!.required && <p>This field is required</p>}
            </SoftBox>
          </Grid>
          <Grid item xs={12}>
            <SoftBox>
              <FormLabel>Description</FormLabel>
              <TextField
                {...register('description')}
                multiline
                variant="outlined"
                fullWidth
                size="medium"
                placeholder="Description"
                rows={2}
              />
              {errors.description && errors.description!.types!.required && (
                <p>This field is required</p>
              )}
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox sx={{ justifyContent: 'center', width: '100%' }} pt={4}>
          <SoftBox py={3} sx={{ justifyContent: 'center', display: 'flex' }}>
            <SoftButton
              variant="contained"
              circular={false}
              size="large"
              sx={{ fontWeight: 'normal' }}
              type="submit"
            >
              Submit
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </form>
    </>
  );
}


export default AddEditVendor