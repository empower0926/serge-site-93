import { m } from 'framer-motion';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import useLocales from '../../hooks/useLocales';
import { MotionViewport, varFade } from '../animate';
import VideoConfig from './VideoConfig';
import HomeConfig from '../home/HomeConfig';
import VideoSlide from './VideoSlide';

export default function VideoGallery() {
  const { translate } = useLocales();
  return (
    <Container sx={{ maxWidth: '1200px', py: 5 }}>
      {VideoConfig.map((e, index) => (
        <Box sx={{ py: 5 }} key={index}>
          <MotionViewport>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" component="h3" sx={{ fontWeight: 'lighter' }}>
                {e.category}
              </Typography>
            </m.div>
          </MotionViewport>
          <Divider sx={{ mb: 4 }} />
          <MotionViewport>
            <VideoSlide content={e.content} />
          </MotionViewport>
        </Box>
      ))}
    </Container>
  );
}
