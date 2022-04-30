import PropTypes from 'prop-types';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../animate';
import useLocales from '../../hooks/useLocales';
import KeyButton from './KeyButton';
import GlossaryConfig from './GlossaryConfig';

export default function Glossary() {
  const { translate } = useLocales();
  return (
    <Container sx={{ maxWidth: '1200px', py: 6 }}>
      <Stack direction="row" mb={4} sx={{ flexWrap: 'wrap' }}>
        <KeyButton title='All' variant="text" />
        {GlossaryConfig.map((e, index) => (
          <KeyButton title={translate(e.title)} variant="text" />
        ))}
      </Stack>
      <Stack>
        {GlossaryConfig.map((e, index) => (
          <Stack key={index} mb={3}>
            <Typography variant="h5" fontWeight="600">
              {translate(e.title)}
            </Typography>
            <Divider sx={{my: 1}} />
            <Typography variant="body1" fontSize="18px">
              {translate(e.content)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
