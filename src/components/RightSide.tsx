
import Box from '@mui/material/Box';
import theme from '../theme/theme';
import Grid from '@mui/material/Grid';
import image from '../assets/undraw_unlock_m0yr.svg';

function RightSide() {
  return (
  <> 
    <Grid container spacing={1}>

      {/*1st image*/}
      <Grid sx={{ width: '13%' }}>
          <Box>


          </Box>
      </Grid>

      {/*1st image*/}
      <Grid sx={{ width: '63%' }}>
          <Box>
            <img src={image}
            alt="Image"
            style={{ width: '100%', height: 'auto' }}
            />
          </Box>
      </Grid>

          
      </Grid>

      {/*1st image*/}
      <Grid sx={{ width: '13%' }}>
          <Box>

          </Box>
      </Grid>
      
    <Grid/>

  </>
  );
}

export default RightSide;