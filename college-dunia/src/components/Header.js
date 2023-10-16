import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import logo from '../assets/images/logo.png';
import banner1 from '../assets/images/banner1.webp';
import banner2 from '../assets/images/banner2.webp';
import banner3 from '../assets/images/banner3.webp';
import cap from '../assets/images/cap.png';
import location from '../assets/images/location.png';
import search from '../assets/images/search.png';
import pen from '../assets/images/pen.png';
import menu from '../assets/images/menu.png';
import notification from '../assets/images/notification.png';
import user from '../assets/images/user.png';
import hamburger from '../assets/images/hamburger.png';
import newtag from '../assets/images/newtag.png';
import '../assets/css/header.css';
import { TypeAnimation } from 'react-type-animation';
import message from '../assets/images/message.png';
import phone from '../assets/images/phone.png';
import inputuser from '../assets/images/inputUser.png';
import inputCap from '../assets/images/inputcap.png';
import inputLocation from '../assets/images/inputLocation.png';
import needConLogo from '../assets/images/needConLogo.webp';
import checkSetailed from '../assets/images/checkSetailed.png';
import brochureDetails from '../assets/images/brochureDetails.png';
import shortlist from '../assets/images/shortlist.png';
import counsellingIcon from '../assets/images/counsellingIcon.png';
import scholarShipsIcon from '../assets/images/scholarshipsIcon.png';
import applicationDeadlines from '../assets/images/applicationDeadlines.png';
import mayank from '../assets/images/mayank.webp';
import ritu from '../assets/images/ritu.webp';
import sanchi from '../assets/images/sanchi.webp';
import subhash from '../assets/images/subhash.webp';
import aaravi from '../assets/images/aaravi.webp';
import ridhima from '../assets/images/ridhima.webp';

const CustomPrevArrow2 = (props) => (
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
  
const CustomNextArrow2 = (props) => (
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

const Header = (props) => {

    const [showNeedCounsellingForm , setShowNeedCounsellingForm] = useState(false);

    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: null,
        City: '',
        course: '',
        DistanceCourse: false,
      });
    const [isOn, setIsOn] = useState(false);

    const handleButtonClick = () => {
        if(isOn === false){
            setFormData({ ...formData, DistanceCourse: true })
        }else{
            setFormData({ ...formData, DistanceCourse: false })
        }
        setIsOn(!isOn);
    };
    
      const handleSubmit = async (e) => {
    
        try {
          const response = await fetch('http://localhost:3000/formdata', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Data saved successfully');
          } else {
            console.error('Failed to save data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    var sliderSettings2 = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow2 />,
        nextArrow: <CustomNextArrow2 />,
    };

    return (
        <div>
            <div className="navbarContainer">
                <img src={logo} className="logo" alt="logo"/>
                <div>
                    <div className="selectGoalDiv">
                        <img src={cap} alt="cap" width="13px" height="13px"/><span> Select Goal & </span><img src={location} alt="location" width="13px" height="13px"/><span> City</span>
                    </div>
                    <h6 style={{fontSize: '15px', margin: 0, color: 'white'}}>Select Goal</h6>
                </div>

                <div className="firstSearchBar">
                    <img src={search} alt="search" width="20px" height="20px"/>
                    <p>
                        &nbsp; Search for College, Exams, Courses and More
                    </p>
                </div>

                <div style={{display: 'flex', color: 'white'}}>
                    <img style={{margin: '8px 10px'}} src={pen} alt="pen" width="22px" height="22px"/>
                    <div>
                        <p style={{margin: 0, fontSize: '14px'}}>Write a Review</p>
                        <div style={{backgroundColor: '#ff7900', marginTop: '3px', fontSize: '10px', textAlign: 'center', padding: '2px 1px', borderRadius: '2px'}}>
                            <p style={{margin: '0'}}>Get Upto &#8377;500*</p>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-around', color: 'white', width: '100px', height: '40px'}}>
                    <img style={{marginTop: '10px'}} src={menu} alt="menu" width="25px" height="25px"/>
                    <p style={{marginTop: '10px'}}>Explore</p>
                </div>

                <div style={{border: '1px solid white', height: "20px", padding: '5px', borderRadius: '50%', marginTop: '7px', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <img src={notification} alt="notification" width="20px" height="20px"/>
                </div>

                <div style={{border: '1px solid white', display: 'flex', justifyContent: 'space-around', height: "20px", padding: '5px', borderRadius: '50px', marginTop: '7px', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '55px'}}>
                    <img src={hamburger} alt="hamburger" width="20px" height="20px"/>
                    <img src={user} alt="user" width="20px" height="20px"/>

                </div>
            </div>
            <div className="navbarSubcontainer">
                <div style={{width: '40%', display: 'flex', justifyContent: 'space-around', marginLeft: '40px'}}>
                    <a>All Courses</a>
                    <a href="#">B.Tech</a>
                    <a href="#">MBA</a>
                    <a href="#">M.Tech</a>
                    <a href="#">MBBS</a>
                    <a href="#">B.Com</a>
                    <a href="#">B.Sc</a>
                    <a href="#">B.Sc (Nursing)</a>
                    <a href="#">BA</a>
                    <a href="#">BBA</a>
                    <a href="#">BCA</a>
                </div>

                <div style={{ marginRight: '45px'}}>
                    <img src={newtag} alt="newtag" height="13px"/>
                    <a>Course Finder</a>
                </div>
            </div>

            <div className="catchLineContainer">
                <h1 style={{textAlign: 'center'}}>Find Over <TypeAnimation
                sequence={[
                    '250+ Exams',
                    1000,
                    '11000+ Courses',
                    1000,
                    '1 Lakh Review',
                    1000,
                    '25000+ Colleges',
                    1000
                ]}
                wrapper="span"
                speed={20}
                cursor='hide'
                repeat={Infinity}
                /> in India</h1>
                
                <div style={{display: 'flex', marginLeft: '25%'}}>
                    <div className="firstSearchBar" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0, minWidth: '60%', maxWidth: '60%'}}>
                        <img src={search} alt="search" width="20px" height="20px"/>
                        <p>
                            &nbsp; Search for College, Exams, Courses and More
                        </p>
                    </div>
                    <div style={{backgroundColor: '#FF7900', width: '98px', height: '47px', textAlign: 'center', borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}}>
                        <p style={{lineHeight: '15px'}}>Search</p>
                    </div>
                </div>

                <div style={{display: 'flex', marginLeft: '25%', marginTop: '30px', justifyContent: 'space-between', width: '810px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '40%'}}>
                        <p>Your Recent Visits</p>
                        <div className="headerButton">
                            <p style={{lineHeight: '0px'}}>IIT Madras, Chennia</p>
                        </div>

                        <div className="headerButton">
                            <p style={{lineHeight: '0px'}}>PPL</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setShowNeedCounsellingForm(!showNeedCounsellingForm);
                            props.disableScroll();
                        }}
                        style={{backgroundColor: '#FF7900', cursor: 'pointer', width: '200px', height: '35px', textAlign: 'center', borderRadius: '4px'}}>
                        <p style={{lineHeight: '5px'}}>Need Counselling</p>
                    </div>
                </div>
            </div>

            <Slider {...sliderSettings}>
                <div className="image-banner">
                    <img src={banner1} alt="banner1" width="100%" height="490px" />
                </div>
                <div className="image-banner">
                    <img src={banner2} alt="banner2" width="100%" height="490px" />
                </div>
                <div className="image-banner">
                    <img src={banner3} alt="banner3" width="100%" height="490px" />
                </div>
            </Slider>
            
            {showNeedCounsellingForm && 
                <div style={{backgroundColor: 'white', position: 'absolute', zIndex: '4', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '70%', height: '85%', borderRadius: '4px', display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.56) 0px 50px 700px 400px'}}>
                    <div style={{width: '35%', backgroundColor: '#F8F8F8'}}>
                        <p style={{color: '#333333', font: '16px din, sans-serif', margin: '25px 15px'}}>How Collegedunia helps you in Admission</p>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '20px'}}>
                            <div style={{border: '1px solid gray', borderRadius: '4px', width: '40%', padding: '15px 5px'}}>
                                <img src={brochureDetails} alt="brochureDetails" width="50px" />
                                <p style={{color: '#333333', font: '11px din, sans-serif', fontWeight: '600'}}>Brochure Details</p>
                            </div>

                            <div style={{border: '1px solid gray', borderRadius: '4px', width: '40%', padding: '15px 5px'}}>
                                <img src={checkSetailed} alt="checkSetailed" width="50px" />
                                <p style={{color: '#333333', font: '11px din, sans-serif', fontWeight: '600'}}>Check Detailed Fees</p>
                            </div>

                            <div style={{border: '1px solid gray', borderRadius: '4px', width: '40%', padding: '15px 5px'}}>
                                <img src={shortlist} alt="shortlist" width="50px" />
                                <p style={{color: '#333333', font: '11px din, sans-serif', fontWeight: '600'}}>Shortlist & Apply</p>
                            </div>

                            <div style={{border: '1px solid gray', borderRadius: '4px', width: '40%', padding: '15px 5px'}}>
                                <img src={counsellingIcon} alt="counsellingIcon" width="50px" />
                                <p style={{color: '#333333', font: '11px din, sans-serif', fontWeight: '600'}}>24/7 Counselling</p>
                            </div>

                            <div style={{border: '1px solid gray', borderRadius: '4px', width: '40%', padding: '15px 5px'}}>
                                <img src={scholarShipsIcon} alt="scholarShipsIcon" width="50px" />
                                <p style={{color: '#333333', font: '11px din, sans-serif', fontWeight: '600'}}>Scholarships</p>
                            </div>

                            <div style={{border: '1px solid gray', borderRadius: '4px', width: '40%', padding: '15px 5px'}}>
                                <img src={applicationDeadlines} alt="applicationDeadlines" width="50px" />
                                <p style={{color: '#333333', font: '11px din, sans-serif', fontWeight: '600'}}>Application Deadlines</p>
                            </div>
                        </div>

                        <div>
                            <p>What people say</p>

                            <Slider {...sliderSettings2}>
                                <div>
                                    <div style={{display: 'flex', border: '1px solid #dedede', borderRadius: '4px', backgroundColor: 'white', width: '100%', height: '90px'}}>
                                        <img style={{borderRadius: '50%', margin: '7px'}} src={mayank} width="40px" height="40px"/>
                                        <div style={{color: '#333333', font: '12px din, sans-serif', textAlign: 'left'}}>
                                            <p>I was anxious about my exam preparation. Collegedunia helped me to ace it.</p>
                                            <p><b>Mayank Sharma</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{display: 'flex', border: '1px solid #dedede', borderRadius: '4px', backgroundColor: 'white', width: '100%', height: '90px'}}>
                                        <img style={{borderRadius: '50%', margin: '7px'}} src={ritu} width="40px" height="40px"/>
                                        <div style={{color: '#333333', font: '12px din, sans-serif', textAlign: 'left'}}>
                                            <p>In depth CAT exam analysis available for free.</p>
                                            <p><b>Ritu Dua</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{display: 'flex', border: '1px solid #dedede', borderRadius: '4px', backgroundColor: 'white', width: '100%', height: '90px'}}>
                                        <img style={{borderRadius: '50%', margin: '7px'}} src={sanchi} width="40px" height="40px"/>
                                        <div style={{color: '#333333', font: '12px din, sans-serif', textAlign: 'left'}}>
                                            <p>Practice Paper section helped me in preparing without coaching.</p>
                                            <p><b>Sanchi Ahuja</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{display: 'flex', border: '1px solid #dedede', borderRadius: '4px', backgroundColor: 'white', width: '100%', height: '90px'}}>
                                        <img style={{borderRadius: '50%', margin: '7px'}} src={subhash} width="40px" height="40px"/>
                                        <div style={{color: '#333333', font: '12px din, sans-serif', textAlign: 'left'}}>
                                            <p>Authentic student reviews helped me compare colleges easily.</p>
                                            <p><b>Subhash Malhotra</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{display: 'flex', border: '1px solid #dedede', borderRadius: '4px', backgroundColor: 'white', width: '100%', height: '90px'}}>
                                        <img style={{borderRadius: '50%', margin: '7px'}} src={aaravi} width="40px" height="40px"/>
                                        <div style={{color: '#333333', font: '12px din, sans-serif', textAlign: 'left'}}>
                                            <p>After subscribing to Collegedunia, I get important alerts about exams on time.</p>
                                            <p><b>Aaravi Sharma</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={{display: 'flex', border: '1px solid #dedede', borderRadius: '4px', backgroundColor: 'white', width: '100%', height: '90px'}}>
                                        <img style={{borderRadius: '50%', margin: '7px'}} src={ridhima} width="40px" height="40px"/>
                                        <div style={{color: '#333333', font: '12px din, sans-serif', textAlign: 'left'}}>
                                            <p>No need to remember deadlines as I get timely updates now.</p>
                                            <p><b>Ridhima Sharma</b></p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div v style={{width: '65%', padding: '30px'}}>
                        <div>

                            <div style={{display: 'flex', marginBottom: '25px'}}>
                                <div style={{borderRadius: '50%', width: '60px', background: 'rgb(255, 255, 255)', padding: '24px', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}}>
                                    <img src={needConLogo} alt="needConLogo"/>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <h2 style={{color: '#ff7900', font: '24px din, sans-serif', fontWeight: '500' }}>Register Now To Apply</h2>
                                    <h3 style={{color: '#333333', font: '20px din, sans-serif', fontWeight: '200', marginTop: '-10px' }}>Get details and latest updates</h3>
                                </div>

                                <div onClick={() => {
                                    setShowNeedCounsellingForm(!showNeedCounsellingForm);
                                    props.enableScroll();
                                }} style={{position: 'absolute', top: '24px', right: '20px', borderRadius: '50%', color: 'rgb(77, 77, 77)', background: 'rgb(248, 248, 248)', fontSize: '19px', width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', fontWeight: '700', cursor: 'pointer'}}>
                                    <p style={{color: '#4D4D4D', font: '19px sin, sans-serif', lineHeight: '3px'}}>X</p>
                                </div>
                            </div>
                            <hr style={{ width: '100%', margin: 'auto'}}></hr>

                            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: '20px', marginTop: '20px'}}>
                                <div className='inputDiv' style={{border: '1px solid gray', width: '45%', height: '45px', paddingTop: '5px'}}>
                                    <img src={inputuser} style={{marginLeft: '-10px'}} alt="user"  width="20px"/>
                                    <input type="text" style={{width: '85%'}} placeholder="Full Name*"
                                        value={formData.Name}
                                        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                                    />
                                </div>

                                <div className='inputDiv' style={{border: '1px solid gray', width: '45%', height: '45px', paddingTop: '5px'}}>
                                    <img src={message} style={{marginLeft: '-10px'}} alt="Message"  width="20px"/>
                                    <input type="text" style={{width: '85%'}} placeholder="Enter Address*"
                                    value={formData.Email}
                                    onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                    />
                                </div>

                                <div className='inputDiv' style={{display: 'flex',border: '1px solid gray', width: '45%', height: '45px', paddingTop: '5px'}}>
                                    <div style={{width: '50px', height: '110%', marginTop: '-5px', borderRight: '1px solid gray'}}>
                                        <p style={{lineHeight: '15px'}}>+91</p>
                                    </div>
                                    <img src={phone} style={{marginLeft: '10px', marginTop: '10px'}} alt="Message"  width="20px" height="20px"/>
                                    <input type="number" style={{width: '55%'}} placeholder="MobileNumber*"
                                        value={formData.Phone}
                                        onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                                    />
                                </div>

                                <div className='inputDiv' style={{border: '1px solid gray', width: '45%', height: '45px', paddingTop: '5px'}}>
                                    <img src={inputLocation} style={{marginLeft: '-10px'}} alt="inputLocation"  width="20px"/>
                                    <input type="text" style={{width: '85%'}} placeholder="City You Live In*"
                                        value={formData.City}
                                        onChange={(e) => setFormData({ ...formData, City: e.target.value })}
                                    />
                                </div>

                                <div className='inputDiv' style={{border: '1px solid gray', width: '45%', height: '45px', paddingTop: '5px'}}>
                                    <img src={inputCap} style={{marginLeft: '-10px'}} alt="inputCap"  width="20px"/>
                                    {/* <input type="text" style={{width: '85%'}} placeholder="Course Interseted In*"
                                        value={formData.course}
                                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                    /> */}

                                    <select onChange={(e) => setFormData({ ...formData, course: e.target.value })} style={{width: '85%', marginTop: '10px', border: 'none'}}>
                                        <option>Course Interseted In*</option>
                                        <option>2</option>
                                        <option>2fsda</option>
                                        <option>fdsa2</option>
                                        <option>2fsad</option>
                                        <option>2rq</option>
                                    </select>
                                </div>

                                { formData.course &&
                                <div>
                                    <button
                                        type="button"
                                        role="switch"
                                        aria-checked={isOn}
                                        onClick={handleButtonClick}
                                        >
                                        {isOn ? 'On' : 'Off'}
                                    </button>
                                    <p>Looking For Online/Distance Course?</p>
                                </div>}
                            </div>

                            <p style={{textAlign: 'left', fontSize: '13px', fontWeight: '500', marginTop: '30px'}}>By submitting this form, you accept and agree to our <span style={{color: 'blue'}}>Terms of Use</span>.</p>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{lineHeight: '10px', color: '#ff7900', fontWeight: '500'}}>Already Registered? Click Here To Login.</p>

                                <div onClick={() => handleSubmit()} style={{backgroundColor: '#FF7900', width: '150px', height: '50px', borderRadius: '4px', color: 'white', textAlign: 'center', margin: 0}}>
                                    <p style={{lineHeight:'20px'}}>SUBMIT</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Header;