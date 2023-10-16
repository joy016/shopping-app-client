'use client';

import { Box, Paper } from '@mui/material';

export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          padding: '2rem 0',
        }}
      >
        <h1>filter</h1>
        {props.children}
      </Box>
    </>
  );
}
