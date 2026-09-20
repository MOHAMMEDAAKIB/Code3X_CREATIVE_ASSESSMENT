import { Box, Divider, Typography, IconButton } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";


export default function SocialLogin() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("User logged in:", user);
      console.log("Name:", user.displayName);
      console.log("Email:", user.email);
      console.log("Photo:", user.photoURL);
      console.log("UID:", user.uid);

      // after successful login navigate to dashbord
      window.location.assign('/dashboard');

    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 3.5 }}>
        <Divider sx={{ flex: 1 }} />
        <Typography sx={{ px: 2, fontSize: 13, color: 'text.secondary', whiteSpace: 'nowrap' }}>
          or continue with
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        {[FcGoogle, FaApple, FaFacebook].map((Icon, i) => (
          <IconButton
            key={i}
            sx={{color: 'white', bgcolor: '#1A1A1A', width: 44, height: 44, '&:hover': { bgcolor: '#000' } }}
            onClick={handleGoogleLogin}
            aria-label="Continue with Google"
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}