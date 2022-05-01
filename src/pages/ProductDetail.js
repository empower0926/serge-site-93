/* eslint-disable */
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// @mui
import { Container, Typography, Box, Stack } from '@mui/material';
// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import ProductConfig from '../components/productdetail/ProductConfig';
import { MotionContainer, varFade } from '../components/animate';
// ----------------------------------------------------------------------

export default function ProductDetail() {
  const [data, setData] = useState({});
  const { name, id } = useParams();
  const { translate } = useLocales();
  useEffect(() => {
    ProductConfig.map((item) => {
      const { foldername, content } = item;
      if (foldername === name) {
        setData(content[Number(id)]);
      }
    });
  }, []);

  useEffect(() => {
    console.log('Hello World:', data);
  }, [data]);
  return (
    <Page title="Product Detail">
      <MotionContainer sx={{ px: '16px' }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ pb: '48px', maxWidth: '1200px', mx: 'auto' }}>
          <m.div variants={varFade().inUp}>
            <Box component="img" src={translate(data.path)} width="600px" height="auto" sx={{ mx: 'auto' }} />
          </m.div>
          <Stack direction="column" justifyContent="center" sx={{ mx: 'auto', width: '600px', maxWidth: '100%' }}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h4" component="h4" paragraph sx={{ whiteSpace: 'pre-line' }}>
                {translate(data.title)}
              </Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              <Typography variant="body1" component="p" paragraph>
                {translate(data.description)}
              </Typography>
            </m.div>
          </Stack>
        </Stack>
      </MotionContainer>
    </Page>
  );
}
