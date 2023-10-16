import { studyGoal } from "../Constant";
import Slider from 'react-slick';

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

const StudyGoal = () => {

    const sliderSettings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 5,
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
            <h1>Select Your Study Goal</h1>
            <Slider {...sliderSettings}>
                {studyGoal.map((item, index) => (
                    <div className="studyGoalDiv" key={index}>
                        <div style={{ display: 'flex' }}>
                        <img className="image-collection" style={{ border: '1px solid #dedede', borderRadius: '50%' }} src={item.logo} width="60px" height="60px" alt="logo" />
                        <div>
                            <h3 style={{margin: '5px'}}>{item.title}</h3>
                            <p style={{margin: '5px'}}>{item.college} Colleges</p>
                        </div>
                        </div>
                        <div>
                        {item.subTitle.map((it, i) => (
                            <div key={i}>
                                {i!== 0 &&
                                    <hr style={{width: '100%', margin: '0'}}></hr>
                                }
                                <p style={{margin: '10px 0', color: 'gray', fontSize: '14px'}}>{it}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default StudyGoal;