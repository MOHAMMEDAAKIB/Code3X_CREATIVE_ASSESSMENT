import { Button, Typography, Box } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography variant="h1" color="primary">
          MUI is working
        </Typography>
        <Button variant="contained" color="secondary">
          Test Button
        </Button>
      </Box>
      <Box sx={{ p: 4 }}>
        <Typography variant="h1" color="primary">
          MUI is working
        </Typography>
        <Button variant="contained" color="secondary">
          Test Button
        </Button>
      </Box>
    </>
  );
}

export default App;