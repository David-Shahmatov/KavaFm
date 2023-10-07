import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './Splide.scss';

import slideImg1 from '../../images/slideImg1.png';
import slideImg2 from '../../images/slideImg2.png';
import slideImg3 from '../../images/slideImg3.png';


const Slider = () => {
  return (
    <div className="slider-container">
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000,
          padding: {
            right: '10%',
            left: '10%',
          },
        }}
      >
        <SplideSlide>
          <div className='slide'>
            <img className='slideImg' src={slideImg1} alt='Slide 1' />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='slide'>
            <img className='slideImg' src={slideImg2} alt='Slide 2' />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='slide'>
            <img className='slideImg' src={slideImg3} alt='Slide 3' />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
