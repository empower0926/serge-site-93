import { Box, Container, Grid, Typography } from '@mui/material';
import useLocales from '../../hooks/useLocales';
import Logo from '../Logo';
import BotImgCard from './BotImgCard';

export default function About() {
  const { translate } = useLocales();
  const data = [
    {
      title: 'BODY',
      path: '/assets/images/other/forbody.jpg',
    },
    {
      title: 'FOOD',
      path: '/assets/images/other/forfood.jpg',
    },
    {
      title: 'OIL',
      path: '/assets/images/other/foroil.jpg',
    },
    {
      title: 'FLOWER',
      path: '/assets/images/other/forflower.jpg',
    },
  ];
  return (
    <Container sx={{ maxWidth: '1200px', mx: 'auto', py: 6 }}>
      <Box component="img" src="/logo/twologo.png" sx={{ ml: 'auto', mb: 6, width: {xs: '140px', sm: '200px'} }} />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box component="img" src="/assets/images/other/bglogo.jpg"/>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body1" component="p">
            {translate('ABOUT_TEXT1')}
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            {translate('ABOUT_TEXT2')}
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            {translate('ABOUT_TEXT3')}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h3" component="h3" textAlign="center">
          {translate('OUR_OFFERS')}
        </Typography>
          <Grid container spacing={2} sx={{mt: 2}}>
            {data.map((e, index) => (
              <BotImgCard key={index} title={e.title} path={e.path} />
            ))}
          </Grid>
      </Box>
    </Container>
  );
}
