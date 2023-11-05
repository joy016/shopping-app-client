import { Box, Container, Typography } from '@mui/material';
import MainPage from './components/MainPage';
import Banner from './components/Banner';

export default function HomePage() {
  return (
    <div className="pageContainer">
      <section>
        <MainPage />
      </section>
      <section>
        <Banner />
      </section>
    </div>
  );
}
