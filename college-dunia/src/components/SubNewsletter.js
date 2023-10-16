import message from '../assets/images/message.png';
import phone from '../assets/images/phone.png';

const SubNewsletter = () => {
    return (
        <div style={{marginBottom: '50px'}}>
            <h1 style={{textAlign: 'center', marginBottom: 0}}>Subscribe To Our News Letter</h1>
            <p style={{textAlign: 'center', marginTop: 0, marginBottom: '30px'}}>Get College Notifications, Exam Notifications and News Updates</p>

            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className='inputDiv'>
                    <img src={message} alt="Message"  width="20px"/>
                    <input type="text" placeholder="Enter your email id"/>
                </div>

                <div className='inputDiv'>
                    <img src={phone} alt="Phone"  width="20px"/>
                    <input type="number" placeholder="Enter your mobile no"/>
                </div>

                <div className='inputDiv'>
                    <img src={phone} alt="Phone"  width="20px"/>
                    <input type="number" placeholder="Enter your mobile no"/>
                </div>

                <div style={{backgroundColor: '#FF7900', width: '195px', height: '40px', borderRadius: '4px', color: 'white', textAlign: 'center', margin: 0}}>
                    <p style={{lineHeight:'10px'}}>Submit</p>
                </div>
            </div>
            
        </div>
    )
}

export default SubNewsletter;