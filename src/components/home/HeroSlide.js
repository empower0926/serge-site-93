import Slider from 'react-slick';
import { commenter } from 'stylis';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const settings = {
  fade: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const imgSrcs = [
  '/assets/images/HeroCaro/7.jpg',
  '/assets/images/HeroCaro/8.jpg',
  '/assets/images/HeroCaro/9.jpg',
  '/assets/images/HeroCaro/10.jpg',
];
const Img = styled('img')({
  height: 'auto',
});
const SliderStyle = styled(Slider)({
  '& .slick-next, & .slick-prev': {
    display: 'none !important',
  },
  '& img': {
    margin: 'auto'
  }
});
export default function HeroSlide() {
  return (
    <div>
      <SliderStyle {...settings}>
        {imgSrcs.map((src, index) => (
          <Box key={index}>
            <Img src={src} alt="img1" sx={{width: {xs:'90%', sm: '70%'}}}/>
          </Box>
        ))}
      </SliderStyle>
    </div>
  );
}


