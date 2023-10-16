import { useState } from "react";
import { topCollection } from "../Constant";
import { alltopCollection } from '../Constant';

const TopCollections = () => {
    const [buttonName, setButtonName] = useState("Show More");
    const [showAll, setShowAll] = useState(false);

    const toggleCollection =() =>{
        if(buttonName === "Show More"){
            setShowAll(true);
            setButtonName("Show Less");
        }else{
            setShowAll(false);
            setButtonName("Show More");
        }
    }

    return (
        <div>
            <h1>Top Collection</h1>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: '25px'}}>
                {
                    topCollection.map((item, index) => (
                        <div className="topCollectionItem" key={index}>
                            <img src={item.image} alt="item"/>
                            <div style={{position: 'absolute', marginTop: '-120px', width: '183px', color: 'white', fontSize: '17px', padding: '0 10px', backgroundColor: '#01010150'}}>
                                <p>{item.title}</p>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                        <img src={item.icon1} alt="item" style={{height: '25px', width: '25px', borderRadius: '50%'}}/>
                                        <img src={item.icon2} alt="item" style={{height: '25px', width: '25px', borderRadius: '50%'}}/>
                                        <img src={item.icon3} alt="item" style={{height: '25px', width: '25px', borderRadius: '50%'}}/>
                                    </div>

                                    <p style={{marginTop: '0'}}>+{item.total} More</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {showAll && 
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: '25px', marginTop: '25px'}}>
                    {
                        alltopCollection.map((item, index) => (
                            <div className="topCollectionItem" key={index}>
                                <img src={item.image} alt="item"/>
                                <div style={{position: 'absolute', marginTop: '-120px', width: '183px', color: 'white', fontSize: '17px', padding: '0 10px'}}>
                                    <p>{item.title}</p>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <img src={item.icon1} alt="item" style={{height: '25px', width: '25px', borderRadius: '50%'}}/>
                                            <img src={item.icon2} alt="item" style={{height: '25px', width: '25px', borderRadius: '50%'}}/>
                                            <img src={item.icon3} alt="item" style={{height: '25px', width: '25px', borderRadius: '50%'}}/>
                                        </div>

                                        <p style={{marginTop: '0'}}>+{item.total} More</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            <div onClick={() => toggleCollection()} style={{color: '#ff7900', width: '250px', height: '40px', border: '2px solid #ff7900', borderRadius: '4px', margin: 'auto', marginTop: '20px', cursor: 'pointer'}}>
                <p style={{textAlign: 'center', lineHeight: '10px'}}>{buttonName}</p>
            </div>
        </div>
        
    )
}

export default TopCollections;