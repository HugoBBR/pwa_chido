import { Box, CircularProgress, Grid, Typography } from '@mui/material';

function IsLoading() {
  return (
    <Box width="100vw" height="100%" minHeight="100vh">
      <Box px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Box m={4} p={4} textAlign="center" borderRadius="lg">
            <Typography variant="h4" mb={5}>
              Welcome!
            </Typography>
            <CircularProgress color="inherit" disableShrink />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default IsLoading;
