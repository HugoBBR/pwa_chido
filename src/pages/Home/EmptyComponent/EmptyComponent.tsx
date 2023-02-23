import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/NotFound/styled';
import Meta from '@/components/__pending_Meta';

function EmptyComponent() {
  return (
    <>
      <Meta title="Sales" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">On Work :)</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default EmptyComponent;
