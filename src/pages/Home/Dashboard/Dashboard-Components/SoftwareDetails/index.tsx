import { Grid, Icon, Typography } from '@mui/material';

import SoftBadgeDot from '@/components/SoftBadgeDot';
import SoftBox from '@/components/SoftBox';

export default function SoftwareDetails({ assets }: { assets?: any }) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} xs={12}>
        <Typography fontSize={20} fontWeight={500} fontFamily="roboto">
          Software Details
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
          Request Software
        </Typography>
        <Icon>more_vert</Icon>
      </Grid>

      {assets &&
        Object.values(assets).map((item: any, key: number) => (
          <Grid item sm={12} xs={12} key={key}>
            <Grid container>
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
                    Last updated {item.lastUpdate}
                  </Typography>
                </SoftBox>
              </Grid>
              <Grid item sm={6} justifyContent="right" alignItems="center" textAlign="right">
                <SoftBox
                  color="black"
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  textAlign="right"
                >
                  <SoftBadgeDot
                    color={item.status == 'Up to date' ? 'primary' : 'success'}
                    size="sm"
                    badgeContent={item.status}
                  />
                </SoftBox>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
}
