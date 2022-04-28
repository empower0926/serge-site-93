import { m } from 'framer-motion';
import Slider from 'react-slick';
import { Box, Container, Stack, Typography, Button, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useLocales from '../../hooks/useLocales';
import { MotionContainer, varFade } from '../animate';
import VideoConfig from './VideoConfig';
import HomeConfig from '../home/HomeConfig';

export default function VideoGallery() {
  const { translate } = useLocales();
  return (
    <Container sx={{ maxWidth: '1200px', py: 5 }}>
      <MotionContainer>
        {VideoConfig.map((e, index) => (
          <Box>
            <m.div variants={varFade().inRight}>
              <Typography key={index} variant="h3" component="h3" sx={{fontWeight: 'lighter'}}>
                {e.category}
              </Typography>
            </m.div>
            <Divider />
          </Box>
        ))}
      </MotionContainer>
    </Container>
  );
}
