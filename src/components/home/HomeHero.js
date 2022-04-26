import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, IconButton } from '@mui/material';
// routes
// components
import Image from '../Image';
import Iconify from '../Iconify';
import { MotionContainer, varFade } from '../animate';
import HeroSlide from './HeroSlide';
import useLocales from '../../hooks/useLocales';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  //   backgroundColor: theme.palette.grey[400],
  //   [theme.breakpoints.up('md')]: {
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100vh',
  //     display: 'flex',
  //     position: 'fixed',
  //     alignItems: 'center',
  //   },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

const Img = styled(m.img)({
  width: '100%',
  height: 'auto',
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  return (
    <Box>
      <MotionContainer>
        <Box sx={{ position: 'relative' }}>
          <Img src="/assets/illustrations/charter.png" alt="charter" sx={{ minHeight: '150px' }} />
          <Box sx={{ position: 'absolute', left: '0', top: '15%', width: '100%', textAlign: 'center' }}>
            <m.div variants={varFade().inUp}>
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                  color: 'common.white',
                  px: '8px',
                }}
              >
                {translate('LANDING_HEADER_TEXT')}
              </Typography>
            </m.div>
          </Box>
        </Box>
        <Box sx={{ marginTop: '-10%', maxWidth: '1200px', mx: 'auto' }}>
          <HeroSlide />
        </Box>
        {/* <m.div variants={varFade().inRight}>
          <Typography variant="h1" sx={{ color: 'common.black' }}>
            Start a <br />
            new project <br /> with
            <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
              &nbsp;Minimal
            </Typography>
          </Typography>
        </m.div> */}
      </MotionContainer>
    </Box>
  );
}
