import { Box, Container, Typography } from '@mui/material';
import MainPage from './components/MainPage';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';

export default function HomePage() {
  return (
    <div className="pageContainer">
      <section>
        <MainPage />
      </section>
      <section>
        <Banner />
      </section>
      {/* <section>
        <Testimonials />
      </section> */}
    </div>
  );
}
