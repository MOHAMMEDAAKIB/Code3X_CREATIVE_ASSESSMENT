
import { Box, Typography, Link } from '@mui/material';
import WelcomeHeader from './leftSideComponets/WelcomeHeader';
import LoginForm from './leftSideComponets/LoginForm';
import SocialLogin from './leftSideComponets/SocialLogin';

export default function LeftSide() {

  return (
    <Box
      sx={{
        maxWidth: 380,
        mx: { xs: 'auto', md: 0 },
        display: 'flex',
        margin: 2,
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        py: { xs: 4, md: 8 },
        px: { xs: 3, md: 0 },
      }}
    >
      <Box sx={{ width: '100%', alignSelf: { xs: 'center', md: 'flex-start' } }}>
        <WelcomeHeader />
      </Box>

      <Box sx={{ width: '100%' }}>
        <LoginForm />
        <SocialLogin />
      </Box>

      <Typography sx={{ fontSize: 14, color: 'text.secondary', mt: 4, alignSelf: 'center' }}>
        Not a member?{' '}
        <Link href="#" underline="hover" sx={{ color: '#7BAE73', fontWeight: 600 }}>
          Register now
        </Link>
      </Typography>
    </Box>
  );
}