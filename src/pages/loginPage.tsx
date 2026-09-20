
import Grid from '@mui/material/Grid';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';

export default function App() {
  return (
    <>
      
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          px: { xs: 0, md: 6 },
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LeftSide />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper',
            borderRadius: 0.6,
          }}
        >
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
}