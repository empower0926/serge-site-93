import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// routes
// components
import { MotionContainer, varFade } from '../animate';
import HeroSlide from './HeroSlide';
import useLocales from '../../hooks/useLocales';
// ----------------------------------------------------------------------

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
          <Img src="/assets/illustrations/charter.png" alt="charter" sx={{ minHeight: '130px' }} />
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
      </MotionContainer>
    </Box>
  );
}
