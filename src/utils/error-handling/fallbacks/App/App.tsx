import EmailIcon from '@mui/icons-material/Email';
import RestartIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/NotFound/styled';
import resetApp from '@/utils/loader/reset-app';

function AppErrorBoundaryFallback() {
  return (
    <Box height={400}>
      <FullSizeCenteredFlexBox>
        <Paper sx={{ p: 5 }}>
          <Typography variant="h5" component="h3">
            Oooops... Sorry, I guess, something went wrong.
          </Typography>
          <Button
            startIcon={<EmailIcon />}
            variant="outlined"
            target="_blank"
            rel="noreferrer"
            href={`mailto: example@email.com`} //TODO Mail
            sx={{ my: 3 }}
          >
            contact with autho
          </Button>
          <Typography component="h6">or</Typography>
          <Button startIcon={<RestartIcon />} sx={{ mt: 3 }} variant="outlined" onClick={resetApp}>
            Press here to reset the application
          </Button>
        </Paper>
      </FullSizeCenteredFlexBox>
    </Box>
  );
}

export default AppErrorBoundaryFallback;
