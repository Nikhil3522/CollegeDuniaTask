import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import top from './assets/images/top.png';

function App() {

  const disableScroll = () => {
    document.body.style.overflowY = 'hidden';
    // return () => {
    //   document.body.style.overflowY = 'auto'; // Revert the change when the component unmounts
    // };
  };

  const enableScroll = () => {
    document.body.style.overflowY = 'auto';
    // return () => {
    //   document.body.style.overflowY = 'auto'; // Revert the change when the component unmounts
    // };
  };

  return (
    <div className="App" style={{overflowY: 'hidden'}}>
      <Header disableScroll={disableScroll} enableScroll={enableScroll}/>
      
      <Body />
      <div onClick={() => window.scrollTo(0, 0)} style={{position: 'fixed', bottom: '100px', right: '0', padding: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', cursor: 'pointer'}}>
          <img src={top} width="35px" height="35px"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
