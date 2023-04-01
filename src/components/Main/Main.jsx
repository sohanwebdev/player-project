import Card from '../Card/Card';
import Info from '../Info/Info';
import './Main.css';
import React, { useEffect, useState } from 'react';

const Main = () => {

    const [myData, setMyData] = useState([]);
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        fetch("./fakeData.json")
        .then(res => res.json())
        .then(data => setMyData(data))
    },[])

    const cardInfoData = (info) => {
        let newCardIfo = [];
        const validData = cardInfo.find(data => data.id === info.id)
        if(validData){
            alert("you select that first");
        }else{
            newCardIfo = [...cardInfo, info];
            setCardInfo(newCardIfo);
            
        }
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="cardItem col-md-8">
                        {
                            myData.map(data => <Card 
                                key={data.id}
                                card={data}
                                cardInfoData={cardInfoData}
                            ></Card>)
                        }
                    </div>
                    <div className="col-md-4">
                        <Info cardInfo={cardInfo}></Info>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;