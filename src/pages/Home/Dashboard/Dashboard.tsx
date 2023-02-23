import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
// @mui material components
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';

import CostBox from '@/components/CostBox';
import DefaultLineChart from '@/components/DefaultLineChart';
import SoftBadgeDot from '@/components/SoftBadgeDot';
// Soft UI Dashboard PRO React components
import SoftBox from '@/components/SoftBox';
import SoftButton from '@/components/SoftButton';
import GetDashboardData from '@/hooks/getData';
// Soft UI Dashboard PRO React example components
import DashboardLayout from '@/layout/DashboardLayout';
import EquipmentDetails from '@/pages/Home/Dashboard/Dashboard-Components/EquipmentDetails';
import SoftwareDetails from '@/pages/Home/Dashboard/Dashboard-Components/SoftwareDetails';
import UpcomingMeetings from '@/pages/Home/Dashboard/Dashboard-Components/UpcomingMeetings';
import UpcomingTrainings from '@/pages/Home/Dashboard/Dashboard-Components/UpcomingTrainings';
import defaultLineChartData from '@/pages/Home/Dashboard/mock_data/defaultLineChartData';

function Dashboard() {
  const [data, setData]: any = useState(null);

  useEffect(() => {
    async function fetchData() {
      const dataFetch = await GetDashboardData();
      setData(dataFetch);
    }
    fetchData();
    console.log(data);
  }, []);

  return (
    <DashboardLayout>
      <SoftBox py={2}>
        <SoftBox py={1} pb={5} textAlign="right" disabled>
          <SoftButton size="small">
            <Icon>add</Icon>&nbsp; Add New Witget
          </SoftButton>
        </SoftBox>
        {data && (
          <SoftBox mb={3}>
            <Grid container spacing={4}>
              <Grid item sm={8}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Card>
                      <SoftBox py={4} pt={2} px={3} bgColor="info" width="100%">
                        <CostBox
                          title="Equipment"
                          total={data.Equipment.Total}
                          monthly={data.Equipment.MonthlyCost}
                          yearly={data.Equipment.YearlyCost}
                        />
                      </SoftBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card>
                      <SoftBox py={4} pt={2} px={3} bgColor="info">
                        <CostBox
                          title="Software"
                          total={data.Software.Total}
                          monthly={data.Software.MonthlyCost}
                          yearly={data.Software.YearlyCost}
                        />
                      </SoftBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Card>
                      <SoftBox py={2} pt={2} px={3}>
                        <SoftBox pb={1} pt={1} display="flex">
                          <Typography fontSize={20} fontWeight={500} fontFamily="roboto">
                            Equipment and Software Monthly/YearIy Cost
                          </Typography>
                          <SoftBox textAlign="right" width="60%">
                            <Icon color="action" fontSize="medium">
                              more_vert
                            </Icon>
                          </SoftBox>
                        </SoftBox>
                        <DefaultLineChart chart={defaultLineChartData} />
                      </SoftBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card>
                      <SoftBox py={4} pt={3} px={4}>
                        <UpcomingTrainings training={data.UpcomingTrainings.training1} />
                      </SoftBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card>
                      <SoftBox py={1} pt={3} px={4}>
                        <UpcomingMeetings meetings={data.UpcomingMeetings} />
                      </SoftBox>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Card>
                      <SoftBox py={8} pt={4} px={4}>
                        <EquipmentDetails assets={data.EquipmentDetails} />
                      </SoftBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Card>
                      <SoftBox py={4} pt={3} px={4}>
                        <SoftwareDetails assets={data.SoftwareDetails} />
                      </SoftBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Card>
                      <SoftBox py={4} pt={2} px={3}>
                        <Typography fontSize={20} fontWeight={500} fontFamily="roboto" pb={5}>
                          Help & Support Bot
                        </Typography>
                        <SoftBox color="black">
                          <Typography fontSize={14} fontWeight={400} fontFamily="roboto">
                            Lorem ipsum dolor sit amet consectetur sed dignissim sagittis tincidunt
                            elit leo lacus sociis purus velit
                          </Typography>
                        </SoftBox>
                      </SoftBox>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </SoftBox>
        )}
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
