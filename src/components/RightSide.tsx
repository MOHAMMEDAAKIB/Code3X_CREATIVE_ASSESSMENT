
import Box from '@mui/material/Box';
import theme from '../theme/theme';
import TextSection from './RightSideComponets/TextSection';
import ImageSection from './RightSideComponets/Imagesection';

function RightSide() {
  return (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0.7,
      backgroundColor: theme.palette.background.paper,
      m: 2,
      width: '100%',
      height: 'calc(100vh - 32px)',
    }}
  >
    {/* Image section - 50% of parent */}
    <Box
      sx={{
        width: '100%',
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >  
      <ImageSection/>
    </Box>

    {/* Text section */}
    <Box>
      <TextSection />
    </Box>
  </Box>
  );
}

export default RightSide;