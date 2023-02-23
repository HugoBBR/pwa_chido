import { Grid, Icon, Typography } from '@mui/material';

import SoftBox from '@/components/SoftBox';

export default function UpcomingMeetings({ meetings }: { meetings?: any }) {
  return (
    <Grid container spacing={1}>
      <Grid item sm={6} xs={12}>
        <Typography fontSize={20} fontWeight={500} fontFamily="roboto">
          Upcoming Meetings
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

      {meetings &&
        Object.values(meetings).map((meeting: any, key: number) => (
          <Grid item sm={12} xs={12} key={key}>
            <Grid container>
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
                    {meeting.name}
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
                    {meeting.schedule}
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="roboto"
                    color="black"
                    pr={1}
                    pb={0.4}
                  >
                    {meeting.tool}
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
                    {meeting.day}
                  </Typography>
                </SoftBox>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
}
