import facebook from '../assets/images/facebook.png';
import instgram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/youtube.png';
import linkedin from '../assets/images/linkedin.png';
import feed from '../assets/images/feed.png';
import logo from '../assets/images/logo.png';
import googlePlay from '../assets/images/google-play.webp';
import appStore from '../assets/images/app-store.webp';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#F4F4F4', padding: '40px'}}>
            <div style={{display: 'flex', justifyContent:'space-between', backgroundColor: '#F4F4F4'}}>
                <div>
                    <h4>Top College</h4>
                    <p>M.B.A</p>
                    <p>B.Tech/B.E</p>
                    <p>MCA</p>
                    <p>BCA</p>
                    <p>M.Tech</p>
                    <p>MA</p>
                    <p>BA</p>
                </div>
                <div>
                    <h4>Top Universities</h4>
                    <p>Engineering</p>
                    <p>Management</p>
                    <p>Medical</p>
                    <p>Law</p>
                    <p>Commerce</p>
                    <p>Science</p>
                    <p>Arts</p>
                </div>
                <div>
                    <h4>Top Exam</h4>
                    <p>CAT</p>
                    <p>GATE</p>
                    <p>Jee-Main</p>
                    <p>NEET</p>
                    <p>XAT</p>
                    <p>CLAT</p>
                    <p>MAT</p>
                </div>
                <div>
                    <h4>Study Abroad</h4>
                    <p>Canada</p>
                    <p>USA</p>
                    <p>UK</p>
                    <p>UAE</p>
                    <p>Australia</p>
                    <p>Germany</p>
                    <p>Sweden</p>
                </div>
                <div>
                    <h4></h4>
                    <p>Ireland</p>
                    <p>New Zealand</p>
                    <p>Hong Kong</p>
                    <p>Singapore</p>
                    <p>Malaysia</p>
                    <p>Netherland</p>
                    <p>Itlay</p>
                </div>
                <div>
                    <h4>Board Exams</h4>
                    <p>Engineering</p>
                    <p>Management</p>
                    <p>Medical</p>
                    <p>Law</p>
                    <p>Commerce</p>
                    <p>Science</p>
                    <p>Arts</p>
                </div>
            </div>
            <hr style={{width: '100%', margin: 'auto'}}></hr>
            <div>
                <h4>Other Links</h4>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-10px'}}>
                    <div style={{width: '40%', display: 'flex', justifyContent: 'space-around', marginTop: '-10px'}}>
                        <p>About Collegedunia</p>
                        <p>Contact Us</p>
                        <p>Advertising</p>
                        <p>Career</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div style={{width: '15%', display: 'flex', justifyContent: 'space-around'}}>
                        <a href="#">
                            <img src={facebook} alt="facebook" width="25px"/>
                        </a>
                        <a href="#">
                            <img src={instgram} alt="facebook" width="25px"/>
                        </a>
                        <a href="#">
                            <img src={twitter} alt="facebook" width="25px"/>
                        </a>
                        <a href="#">
                            <img src={youtube} alt="facebook" width="25px"/>
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="facebook" width="25px"/>
                        </a>
                        <a href="#">
                            <img src={feed} alt="facebook" width="25px"/>
                        </a>
                    </div>

                </div>
            </div>
            <hr style={{width: '100%', margin: 'auto'}}></hr>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <img src={logo} alt="logo"/>
                    <p style={{fontSize: '14px'}}> © 2023 Collegedunia Web Pvt. Ltd. All Rights Reserved</p>
                </div>

                <div style={{display: 'flex'}}>
                    <p style={{fontSize: '16px', fontWeight: 'bold', marginTop: '2px'}}>
                        Download the Collegedunia app on 
                    </p>
                    <img src={googlePlay} alt="google-play" width="95px" height="31px"/>
                    <img src={appStore} alt="app-store" width="95px" height="31px"/>

                </div>
            </div>
        </div>
    )
}

export default Footer;