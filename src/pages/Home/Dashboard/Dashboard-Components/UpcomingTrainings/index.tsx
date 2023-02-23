import { Grid, Icon, Typography } from '@mui/material';

import SoftBadgeDot from '@/components/SoftBadgeDot';
import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';

export default function UpcomingTrainings({ training }: { training?: any }) {
  return (
    <Grid container spacing={1}>
      <Grid item sm={6} xs={12}>
        <Typography fontSize={20} fontWeight={500} fontFamily="roboto">
          Upcoming Trainings
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
          View All
        </Typography>
        <Icon>more_vert</Icon>
      </Grid>
      {training && (
        <>
          <Grid item sm={6} color="black">
            <SoftBox color="black">
              <Typography
                fontSize={16}
                fontWeight={500}
                fontFamily="roboto"
                color="black"
                pr={1}
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {training.name}
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
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {training.tool}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                fontFamily="roboto"
                color="black"
                pr={1}
                pb={0.4}
              >
                {training.schedule}
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
              <Typography
                fontSize={16}
                fontWeight={500}
                fontFamily="roboto"
                color="black"
                pr={1}
                pb={0.4}
              >
                {training.day}
              </Typography>
            </SoftBox>
          </Grid>
        </>
      )}

      <Grid item sm={12} color="black" mt={2}>
        <SoftBox textAlign="center">
          <SoftButton
            color="info"
            variant="contained"
            circular={false}
            size="large"
            sx={{ width: '100%', color: 'dark.main' }}
          >
            Discover Trainings Recommended for you
          </SoftButton>
        </SoftBox>
      </Grid>
    </Grid>
  );
}
