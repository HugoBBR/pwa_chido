import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LoaderErrorBoundaryFallback() {
  return (
    <Box>
      <Typography variant="h5">
        Hmmmmm, there is something wrong with this component loading process... Maybe trying later
        would be the best idea
      </Typography>
    </Box>
  );
}

export default LoaderErrorBoundaryFallback;
