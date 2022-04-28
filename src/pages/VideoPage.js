/* eslint-disable */
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
// @mui
import { Typography, Box, Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import { MotionContainer, varFade } from '../components/animate';
import Charter from '../components/Charter';
import VideoGallery from 'src/components/video/VideoGallery';
// ----------------------------------------------------------------------

export default function VideoPage() {
  const { translate } = useLocales();
  return (
    <Page title="Video Page" sx={{ position: 'relative' }}>
      <Charter text={'GREENS_VIDEOS'} />
      <VideoGallery />
    </Page>
  );
}
