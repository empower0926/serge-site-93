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
// ----------------------------------------------------------------------

export default function MagPage() {
  const { translate } = useLocales();
  return (
    <Page title="Mag Page" sx={{ position: 'relative' }}>
      <Charter text={'THE_CBD_MAG'} />
      <MotionContainer>
        <Stack direction="column" alignItems="center" spacing="3" sx={{ px: 2, py: { xs: 3, md: 5 } }}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" component="h3" textAlign="center" sx={{ fontWeight: 'lighter', pb: 4 }}>
              {translate('Your_mag_is_coming_soon')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inLeft}>
            <Stack spacing={2} sx={{ py: 2, border: '1px solid #BBB0B0', borderRadius: '8px' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: '8px' }}>
                <Skeleton variant="text" width={180} height={30} />
                <Skeleton variant="circular" width={40} height={40} />
              </Stack>
              <Skeleton variant="rectangular" width={300} height={170} />
              <Stack sx={{ px: '8px' }}>
                <Skeleton variant="text" width={276} height={30} sx={{ mb: 2 }} />
                <Skeleton variant="text" width={140} height={30} />
              </Stack>
            </Stack>
          </m.div>
        </Stack>
      </MotionContainer>
    </Page>
  );
}
