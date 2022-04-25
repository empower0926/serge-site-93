import React, { Component } from 'react';
import Slider from 'react-slick';

export default class HeroSlide extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src="/illustrations/charter.png" />
          </div>
          <div>
            <img src="/illustrations/charter.png" />
          </div>
          <div>
            <img src="/illustrations/charter.png" />
          </div>
          <div>
            <img src="/illustrations/charter.png" />
          </div>
        </Slider>
      </div>
    );
  }
}
