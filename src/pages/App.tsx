import React from 'react';
import Grid from '@mui/material/Grid';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

export default function LoginPage() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        alignItems: 'center',
        px: { xs: 0, md: 6 },
        flexDirection: {
          xs: 'column-reverse',
          md: 'row',
        },
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <LeftSide />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        <RightSide />
      </Grid>
    </Grid>
  );
}