import { m } from 'framer-motion';
import Slider from 'react-slick';
import { Box, Stack, Typography, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useLocales from '../../hooks/useLocales';
import { MotionContainer, varFade } from '../animate';

const settings = {
  infinite: true,
  speed: 1000,
  // autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  padding: '56px 0',
});
const SliderStyle = styled(Slider)({
  '& img': {
    margin: 'auto',
    transition: 'all ease 1s',
  },
  '& .slick-next, & .slick-prev': {
    visibility: 'visible',
    zIndex: '999',
  },
  '& .slick-next:before, & .slick-prev:before': {
    visibility: 'visible',
    fontSize: '36px',
  },
  '& .slick-next': {
    right: '40px',
  },
  '& .slick-prev': {
    left: '18px',
  },
});

export default function VideoSlide() {
  const { translate } = useLocales();

  return (
    <Box>
      <MotionContainer>
        <Box>
          {/* <m.div variants={varFade().inRight}>
            <Box component='img' src={props.path}></Box>
            <Typography component="h3" variant="h2" textAlign="center" sx={{ mb: '80px', fontWeight: 'lighter' }}>
              {translate(props.title)}
            </Typography>
          </m.div> */}
        </Box>
        <SliderStyle {...settings} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {/* {props.src.map((src, index) => (
            <Box key={index} sx={{ px: '8px' }}>
              <Box sx={{ background: '#E9E8E4', position: 'relative' }}>
                  <Img src={src} alt="img1" />
              </Box>
            </Box>
          ))} */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </SliderStyle>
      </MotionContainer>
    </Box>
  );
}
