import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  // Define the color palette for the theme
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#9DC88D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#EAF3E9',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#8A8A8A',
    },
  },

  // Define typography settings for the theme
  typography: {
    fontFamily: '"Inter", "Poppins", sans-serif',
    h4: {
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: 50,
  },

  // Define component-specific styles for the theme
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 50,
            paddingLeft: 8,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 600,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#000000',
            '&:hover': {
              backgroundColor: '#1a1a1a',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1a1a1a',
          },
        },
      },
    },
  },
});

export default theme;