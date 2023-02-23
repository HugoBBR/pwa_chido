import { Divider, Grid, Icon, Typography } from '@mui/material';

import SoftBox from '@/components/SoftBox';

export default function EquipmentDetails({ assets }: { assets?: any }) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} xs={12}>
        <Typography fontSize={20} fontWeight={500} fontFamily="roboto">
          Equipment Details
        </Typography>
      </Grid>
      <Grid item sm={6} display="inline-flex" justifyContent="right" alignItems="center">
        <Typography
          fontSize={14}
          fontWeight={400}
          fontFamily="roboto"
          color="white"
          display="inline-flex"
          pr={1}
        >
          Request Equipment
        </Typography>
        <Icon>more_vert</Icon>
      </Grid>
      <Grid item sm={12} xs={12}>
        {assets &&
          Object.values(assets).map((item: any, key: number) => (
            <Grid container key={key}>
              <Grid item sm={6} color="black">
                <SoftBox color="black">
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    fontFamily="roboto"
                    color="black"
                    display="inline-flex"
                    pr={1}
                  >
                    {item.name}
                  </Typography>
                </SoftBox>
                <SoftBox color="grey">
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    Asset ID
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    Model Cost
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    Model Monthly Cost
                  </Typography>
                </SoftBox>
              </Grid>
              <Grid item sm={6} justifyContent="right" alignItems="center" textAlign="right">
                <SoftBox color="black">
                  <Typography
                    fontSize={14}
                    fontWeight={450}
                    fontFamily="roboto"
                    color="black"
                    display="inline-flex"
                    pr={0.5}
                  >
                    Status
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={300}
                    fontFamily="roboto"
                    color="black"
                    display="inline-flex"
                  >
                    {item.status}
                  </Typography>
                </SoftBox>
                <SoftBox color="grey">
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    {item.assetId}
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    $ {item.modelCost}
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    $ {item.modelMonthlyCost}
                  </Typography>
                </SoftBox>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
