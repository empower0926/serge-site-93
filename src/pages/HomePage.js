// @mui
import { Container, Typography } from '@mui/material';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import HomeHero from '../components/home/HomeHero';

// ----------------------------------------------------------------------

export default function HomePage() {
  const { translate } = useLocales();
  return (
    <Page title="Home page" sx={{px: 0}}>
      <HomeHero />
    </Page>
  );
}
