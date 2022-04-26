import Slider from 'react-slick';
import { commenter } from 'stylis';
import { Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import useLocales from '../../hooks/useLocales';

const settings = {
  infinite: true,
  speed: 1000,
  //   autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  padding: '56px 0',
});
const SliderStyle = styled(Slider)({
  '& .slick-next, & .slick-prev': {
    display: 'none !important',
  },
  '& img': {
    margin: 'auto',
    transition: 'all ease 1s',
  },
  //   '& img:hover': {
  //   },
   '& Button' : {
    visibility: 'hidden',
    transition: 'all ease 300ms',
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
const ButtonStyle =  styled(Button)({
    borderColor: '#000 !important',
    '& a':{
        color: '#000'
    },
    fontWeight: 'lighter !important',
    '&:hover':{
        '& a':{
            color: '#fff'
        },
        background: '#000 !important'
    }
})
export default function CollectionSlide(props) {
  const { translate } = useLocales();
  return (
    <Box sx={{ backgroundColor: props.bgColor, py: '80px' }}>
      <Box>
        <Typography component="h3" variant="h2" textAlign="center" sx={{ mb: '80px', fontWeight: 'lighter' }}>
          {translate(props.title)}
        </Typography>
      </Box>
      <SliderStyle {...settings} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {props.src.map((src, index) => (
          <Box key={index} sx={{ px: '8px' }}>
            <Box sx={{ background: '#E9E8E4', position: 'relative' }}>
              <Img src={src} alt="img1" />
              <StackStyle spacing={2}>
                <ButtonStyle variant="outlined">
                    <a href='https://backoffice.ollorun.com/login/client'>{translate('CUSTOMER')}</a>
                </ButtonStyle>
                <ButtonStyle variant="outlined">
                    <a href='https://backoffice.ollorun.com/login/client'>{translate('ADVISOR_DST')}</a>
                </ButtonStyle>
              </StackStyle>
            </Box>
          </Box>
        ))}
      </SliderStyle>
    </Box>
  );
}
