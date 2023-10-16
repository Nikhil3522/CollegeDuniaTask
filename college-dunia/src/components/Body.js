import TopTenCollege from "./TopTenCollege";
import TopStudyPlace from "./TopStudyPlace";
import SubNewsletter from "./SubNewsletter";
import TopCourses from "./TopCourses";
import TopCollections from "./TopCollections";
import regularAlert from '../assets/images/regularAlert.png';
import subscribeChance from '../assets/images/subscribeChance.png';
import CollegeRanking from "./CollegeRanking";
import StudyGoal from "./StudyGoal";

const Body = () => {
    return (
        <div className="bodyContainer" style={{overflow: 'hidden'}}>
            <StudyGoal />
            <TopCollections />
            <TopTenCollege />
            <hr></hr>
            <TopStudyPlace />
            <hr></hr>
            <div style={{backgroundColor: '#FCE9D2', padding: '0 48px', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', width: '65%', justifyContent: 'space-between', marginTop: '30px'}}>
                    <h2 style={{color: '#49639E', font: '26px din, sans-serif', fontWeight: 'bold'}}>Know your chances of Admission</h2>
                    <div style={{backgroundColor: '#FF7900', width: '200px', height: '45px', textAlign: 'center', borderRadius: '4px', color: 'white', marginTop: '13px'}}>
                        <p style={{lineHeight: '15px', fontWeight: 'bold'}}>Start Now</p>
                    </div>
                </div>
                <div>
                    <img src={subscribeChance} alt="regularAlert" height="110px" />
                </div>

            </div>
            <hr></hr>

            <CollegeRanking />
            
            <hr></hr>
            <div style={{backgroundColor: '#FCE9D2', padding: '0 48px', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', width: '58%', justifyContent: 'space-between', marginTop: '30px'}}>
                    <h2 style={{color: '#49639E', font: '26px din, sans-serif', fontWeight: 'bold'}}>Subscribe For Regular Alerts</h2>
                    <div style={{backgroundColor: '#FF7900', width: '200px', height: '45px', textAlign: 'center', borderRadius: '4px', color: 'white', marginTop: '13px'}}>
                        <p style={{lineHeight: '15px', fontWeight: 'bold'}}>Subscibe Now</p>
                    </div>
                </div>
                <div>
                    <img src={regularAlert} alt="regularAlert" height="110px" />
                </div>

            </div>
            <hr></hr>
            {/* <TopCourses /> */}
            <SubNewsletter />
        </div>
    )
}

export default Body;