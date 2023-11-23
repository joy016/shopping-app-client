import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

export default function MainPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ddbbcc',
          width: '100%',
          padding: { xs: '10rem 0', lg: '6rem 0' },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '40rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', lg: '2.7rem' },
              textAlign: { xs: 'center', lg: 'left' },
              fontWeight: { xs: '800', lg: '800' },
            }}
          >
            Top
            <span
              style={{
                background:
                  '-webkit-linear-gradient(45deg, rgb(238,174,202), rgb(120,78,122))',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                margin: '0 10px',
              }}
            >
              Fashion
            </span>
            for affordable price
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', lg: 'block' },
            width: '50%',
            padding: '1rem',
          }}
        >
          <Image
            style={{
              position: 'absolute',
              top: '150px',
              bottom: '0',
              left: '1000px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            }}
            src="/images/bg2.jpg"
            width={350}
            height={400}
            alt="Picture of the author"
          />
          <Image
            style={{
              position: 'relative',
              borderRadius: '8px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            }}
            src="/images/bg1.jpg"
            width={350}
            height={400}
            alt="Picture of the author"
          />
        </Box>
      </Box>
    </Box>
  );
}
