/* eslint-disable */
import { m } from 'framer-motion';
import Slider from 'react-slick';
import { Box, Stack, Typography, Button, Link, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useLocales from '../../hooks/useLocales';
import { MotionContainer, varFade } from '../animate';

// const isMobile = useMediaQuery('(max-width: 576px)');

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
  '& a': {
    visibility: 'hidden',
    transition: 'all ease 300ms',
  },
  '& .slick-next, & .slick-prev': {
    zIndex: '4',
  },
  '& .slick-next:before, & .slick-prev:before': {
    fontSize: '36px',
    color: '#000'
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
    a: {
      visibility: 'visible',
    },
    '.nameBox': {
      opacity: 0,
    },
  },
  '& .nameBox': {
    position: 'absolute',
    left: '0',
    bottom: '20px',
    width: '100%',
    textAlign: 'center',
    fontSize: '14px',
    textTransform: 'capitalize',
    transition: 'opacity ease 300ms',
  },
});
const StackStyle = styled(Stack)({
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '100%',
  '& a': {
    color: '#000',
    width: '50%',
    fontWeight: 'lighter',
  },
  '& a:hover': {
    color: '#fff',
    backgroundColor: '#000',
  },
});
const QuickBoxStyle = styled(Stack)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  '& a': {
    color: '#000',
    width: '50%',
    margin: '0 auto',
    fontWeight: 'lighter',
  },
  '& a:hover': {
    color: '#fff',
    backgroundColor: '#000',
  },
});
const ButtonStyle = styled(Button)({
  borderColor: '#000 !important',
  borderRadius: '0',
  '&:before': {
    borderColor: '#fff !important',
  },
});

CollectionSlide.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  src: PropTypes.array,
};
export default function CollectionSlide(props) {
  const { title, bgColor, data } = props;
  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(max-width: 750px)');
  const isLaptop = useMediaQuery('(max-width: 990px)');
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4,
  };
  const { translate } = useLocales();
  const text = '/productdetail/';
  const dash = '/';
  return (
    <Box sx={{ background: bgColor, py: '80px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <MotionContainer>
        <Box>
          <m.div variants={varFade().inUp}>
            <Typography
              component="h2"
              variant="h2"
              color="#fff"
              textAlign="center"
              sx={{ mb: '80px', fontWeight: 'bold', fontFamily: 'Aileron' }}
            >
              {translate(title)}
            </Typography>
          </m.div>
        </Box>
        <SliderStyle {...settings} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {data.map((data, index) => (
            <Box key={index} sx={{ px: '8px' }}>
              <Box sx={{ background: '#E9E8E4', position: 'relative' }}>
                {/* <Link to={`${text}${props.title}${dash}${index}`} component={RouterLink}> */}
                <Img src={data.path} alt="img1" />
                {/* </Link> */}
                <QuickBoxStyle>
                  <ButtonStyle variant="outlined" href={`${text}${props.title}${dash}${index}`}>
                    {translate('QUICK_VIEW')}
                  </ButtonStyle>
                </QuickBoxStyle>
                <StackStyle direction="row">
                  <ButtonStyle variant="outlined" href="https://backoffice.ollorun.com/login/client">
                    {translate('CUSTOMER')}
                  </ButtonStyle>
                  <ButtonStyle variant="outlined" href="https://backoffice.ollorun.com/login/client">
                    {translate('ADVISOR_DST')}
                  </ButtonStyle>
                </StackStyle>
                <Box className="nameBox">
                  {translate(data.name)}
                  <br />
                  CBD
                </Box>
              </Box>
            </Box>
          ))}
        </SliderStyle>
      </MotionContainer>
    </Box>
  );
}
