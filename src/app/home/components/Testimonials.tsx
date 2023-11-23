'use client';

import { Avatar, Container, Paper, Stack, Typography } from '@mui/material';

export default function Testimonials() {
  return (
    <Container fixed sx={{ padding: '5rem 0' }}>
      <Typography sx={{ textAlign: 'center' }}>Testimonials</Typography>
      <Typography sx={{ textAlign: 'center' }}>
        What our users saying...
      </Typography>
      <Stack direction="row" spacing={2}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: '20px',
            width: '20rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 0',
            transition: 'all 0.3s ease-out',
            '&:hover': {
              backgroundColor: '#E5D4FF',
              transform: 'translateY(-5px) scale(1.005) translateZ(0)',
              boxShadow:
                '0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px var(rgba(206, 178, 252, 0.48))',
              '& .overlay': {
                opacity: 1,
              },
            },
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Paper>
      </Stack>
    </Container>
  );
}
