import React from 'react';
import './Info.css';

const Info = (props) => {
    // console.log(props);
    const {cardInfo} = props;

    let total = 0;
    for(const information of cardInfo){
        total = total + information.price;
    }

    return (
        <div className="cardItemSec card p-3">
            <div className="card my-2">
                <div className="card-body bg-danger">
                    <h4>total Price : {total}</h4>
                    <h4>total Player : {cardInfo.length}</h4>
                </div>
            </div>
            <div>
                {
                    cardInfo.map(data => <div className='card my-2 p-2 bg-success text-light' style={{fontSize: "12px"}}>
                        <p>name: {data.name}</p>
                        <p>price: {data.price}</p>
                        <p>price: {data.sport}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Info;