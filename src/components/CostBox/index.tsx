import { Grid, Icon, Typography } from '@mui/material';

import SoftBox from '@/components/SoftBox';

export default function CostBox({ title, total, monthly, yearly }: any) {
  return (
    <>
      <SoftBox mb={1}>
        <Typography fontSize={20} fontWeight={500} fontFamily="roboto">
          {title}
        </Typography>
      </SoftBox>
      <SoftBox flexDirection="row" width="100%">
        <Grid container width="100%">
          <Grid item xs={4} sm={4}>
            <SoftBox flexDirection="row">
              <Typography fontSize={15} fontWeight={400} fontFamily="roboto">
                Total
              </Typography>
              <SoftBox display="flex" alignItems="center">
                <SoftBox
                  display="grid"
                  borderRadius="xxl"
                  width="2rem"
                  height="2rem"
                  justifyContent="center"
                  alignItems="center"
                  bgColor="#a7b6df"
                  color="white"
                  mr={0.5}
                >
                  <Icon fontSize="small">calendar_today</Icon>
                </SoftBox>
                <Typography fontSize={25} fontWeight={500}>
                  {total}
                </Typography>
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item sm={4} xs={4}>
            <SoftBox flexDirection="row">
              <Typography fontSize={15} fontWeight={400} fontFamily="roboto">
                Monthly cost
              </Typography>
              <SoftBox display="flex" alignItems="center">
                <SoftBox
                  display="grid"
                  borderRadius="xxl"
                  width="2rem"
                  height="2rem"
                  justifyContent="center"
                  alignItems="center"
                  bgColor="#a7b6df"
                  color="white"
                  mr={0.5}
                >
                  <Icon fontSize="small">calendar_today</Icon>
                </SoftBox>
                <Typography fontSize={25} fontWeight={500}>
                  ${monthly}
                </Typography>
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item sm={4} xs={4}>
            <SoftBox flexDirection="row">
              <Typography fontSize={15} fontWeight={400} fontFamily="roboto">
                Yearly cost
              </Typography>
              <SoftBox display="flex" alignItems="center">
                <SoftBox
                  display="grid"
                  borderRadius="xxl"
                  width="2rem"
                  height="2rem"
                  justifyContent="center"
                  alignItems="center"
                  bgColor="#a7b6df"
                  color="white"
                  mr={0.5}
                >
                  <Icon fontSize="small">calendar_today</Icon>
                </SoftBox>
                <Typography fontSize={25} fontWeight={500}>
                  ${yearly}
                </Typography>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
