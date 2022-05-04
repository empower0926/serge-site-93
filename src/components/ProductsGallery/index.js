/* eslint-disable */
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import CategoryMenu from './CategoryMenu';
import Product from './product';
import HomeConfig from '../home/HomeConfig';

export default function ProductsGallery(props) {
  const { handleChange, filterText } = props;
  return (
    <>
      <Box sx={{ backgroundColor: '#fb48c4' }}>
        <CategoryMenu handleChange={handleChange} />
      </Box>
      <Container sx={{ maxWidth: '1200px', py: 4 }}>
        <Grid container spacing={0} justifyContent='center'>
          {HomeConfig.map((e) =>
            e.title === filterText
              ? e.data.map((item, index) => (
                  <Grid key={index} item xs={3} padding={1}>
                    <Product index={index} title={filterText} name={item.name} path={item.path}></Product>
                  </Grid>
                ))
              : ''
          )}
        </Grid>
      </Container>
    </>
  );
}
