import React from 'react';
import { Box, Divider, Typography, IconButton } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
export default function SocialLogin() {
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
            sx={{ bgcolor: '#1A1A1A', width: 44, height: 44, '&:hover': { bgcolor: '#000' } }}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}