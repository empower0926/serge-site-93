import { m } from 'framer-motion';
import { Box, Container, Grid, Typography } from '@mui/material';
import useLocales from '../../hooks/useLocales';
import { MotionViewport, varFade, varFlip } from '../animate';
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
    <MotionViewport>
      <Container sx={{ maxWidth: '1200px', mx: 'auto', py: 6 }}>
        <m.div variants={varFlip().inX}>
          <Box
            component="img"
            src="/logo/twologo.png"
            sx={{ ml: 'auto', mb: 6, width: { xs: '140px', sm: '200px' } }}
          />
        </m.div>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <m.div variants={varFade().inDown}>
              <Box component="img" src="/assets/images/other/bglogo.jpg" />
            </m.div>
          </Grid>
          <Grid item md={6}>
            <m.div variants={varFade().inRight}>
              <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html: translate('ABOUT_TEXT')}} />
            </m.div>
           </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" component="h3" textAlign="center">
              {translate('OUR_OFFERS')}
            </Typography>
          </m.div>
          <MotionViewport>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {data.map((e, index) => (
                <BotImgCard key={index} title={e.title} path={e.path} />
              ))}
            </Grid>
          </MotionViewport>
        </Box>
      </Container>
    </MotionViewport>
  );
}
