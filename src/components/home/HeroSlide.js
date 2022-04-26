import Slider from 'react-slick';
import { commenter } from 'stylis';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const settings = {
  fade: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const imgSrcs = [
  '/assets/images/HeroCaro/1.jpg',
  '/assets/images/HeroCaro/2.jpg',
  '/assets/images/HeroCaro/3.jpg',
  '/assets/images/HeroCaro/4.jpg',
  '/assets/images/HeroCaro/5.jpg',
];
const Img = styled('img')({
  maxWidth: '100%',
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
            <Img src={src} alt="img1"/>
          </Box>
        ))}
      </SliderStyle>
    </div>
  );
}


