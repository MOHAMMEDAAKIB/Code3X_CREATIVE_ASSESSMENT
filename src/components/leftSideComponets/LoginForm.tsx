import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, Link, Button } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateForm = () => {
    const newErrors = { username: '', password: '' };

    // Username / Email validation
    if (!username.trim()) {
      newErrors.username = 'Username or email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)
    ) {
      newErrors.username = 'Please enter a valid email address';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return !newErrors.username && !newErrors.password;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log('Form is valid');
      console.log({
        username,
        password,
      });

      // Backend/login API will be added later
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <TextField 
        placeholder="Username or Email"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={Boolean(errors.username)}
        helperText={errors.username}
        sx={{ mb: 2, width: '100%' }} 
      />

      <TextField
        fullWidth
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={Boolean(errors.password)}
        helperText={errors.password}
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((s) => !s)}
                  edge="end"
                  size="small"
                >
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

      <Button 
        fullWidth
        variant="contained"
        type="submit"
      >
        Login
      </Button>
    </Box>
  );
}