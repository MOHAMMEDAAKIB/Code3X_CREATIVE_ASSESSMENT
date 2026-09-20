import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, Link, Button } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <Box>
      <TextField fullWidth placeholder="Username" variant="outlined" sx={{ mb: 2 }} />

      <TextField
        fullWidth
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((s) => !s)} edge="end" size="small">
                  {showPassword ? (
                    <VisibilityOutlinedIcon fontSize="small" />
                  ) : (
                    <VisibilityOffOutlinedIcon fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      <Link
        href="#"
        underline="none"
        sx={{ display: 'block', textAlign: 'right', fontSize: 13, color: 'text.secondary', mt: 1, mb: 3 }}
      >
        Forgot Password?
      </Link>

      <Button fullWidth variant="contained">
        Login
      </Button>
    </Box>
  );
}