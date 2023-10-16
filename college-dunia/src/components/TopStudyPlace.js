import React from 'react';
import Slider from 'react-slick';
import { topStudyPlaces } from '../Constant';

const CustomPrevArrow = (props) => (
  <button
    {...props}
    style={{
      display: 'block',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '0px',
      zIndex: 1,
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      backgroundColor: 'gray',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
    }}
  >
    Previous
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    style={{
      display: 'block',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '0px',
      zIndex: 1,
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      backgroundColor: 'gray',
      color: 'red',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
    }}
  >
    Next
  </button>
);

const TopStudyPlace = () => {
  const sliderSettings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <h1>Top Study Place</h1>

      <Slider {...sliderSettings}>
        {topStudyPlaces.map((item, index) => (
          <div key={index} className="topStudyPlaceContainer">
            <img style={{ margin: 'auto', marginTop: '10px' }} src={item.logo} alt="image" />
            <p style={{ textAlign: 'center' }}>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopStudyPlace;
