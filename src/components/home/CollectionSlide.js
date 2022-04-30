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
  autoplay: true,
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
  '& Button': {
    visibility: 'hidden',
    transition: 'all ease 300ms',
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
  '&>div>div>div:hover': {
    cursor: 'pointer',
    img: {
      opacity: '0.2',
    },
    Button: {
      visibility: 'visible',
    },
  },
});
const StackStyle = styled(Stack)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});
const ButtonStyle = styled(Button)({
  borderColor: '#000 !important',
  '& a': {
    color: '#000',
  },
  fontWeight: 'lighter !important',
  '&:hover': {
    '& a': {
      color: '#fff',
    },
    background: '#000 !important',
  },
});

CollectionSlide.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  src: PropTypes.array,
};
export default function CollectionSlide(props) {
  const { translate } = useLocales();
  const text = '/productdetail/';
  const dash = '/';
  return (
    <Box sx={{ backgroundColor: props.bgColor, py: '80px' }}>
      <MotionContainer>
        <Box>
          <m.div variants={varFade().inUp}>
            <Typography component="h3" variant="h2" textAlign="center" sx={{ mb: '80px', fontWeight: 'lighter' }}>
              {translate(props.title)}
            </Typography>
          </m.div>
        </Box>
        <SliderStyle {...settings} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {props.src.map((src, index) => (
            <Box key={index} sx={{ px: '8px' }}>
              <Box sx={{ background: '#E9E8E4', position: 'relative' }}>
                {/* <Link href={text+props.title+index} > */}
                <Link to={`${text}${props.title}${dash}${index}`} component={RouterLink}>
                  <Img src={src} alt="img1" />
                </Link>
                <StackStyle spacing={2}>
                  <ButtonStyle variant="outlined">
                    <a href="https://backoffice.ollorun.com/login/client">{translate('CUSTOMER')}</a>
                  </ButtonStyle>
                  <ButtonStyle variant="outlined">
                    <a href="https://backoffice.ollorun.com/login/client">{translate('ADVISOR_DST')}</a>
                  </ButtonStyle>
                </StackStyle>
              </Box>
            </Box>
          ))}
        </SliderStyle>
      </MotionContainer>
    </Box>
  );
}
