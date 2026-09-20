import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WelcomeHeader() {
  return (
    <Box  sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontSize: { xs: 32, md: 38 } }} >
        Welcome back!
      </Typography>

      <Typography
        color="text.secondary"
        align="center"
        sx={{ fontSize: 14, mt: 1.5, maxWidth: 320 }}
      >
        Simplify your workflow and boost your productivity with{' '}
        <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
          Tuga&apos;s App
        </Box>
        . Get started for free.
      </Typography>
    </Box>
  );
}