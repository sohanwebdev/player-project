import React from 'react';
import './Card.css';

const Card = (props) => {
    
    const { age, country, image, name, price, sport} = props.card;
    const cardInfoData = props.cardInfoData;

    return (
        <div className="card">
            <div className="card-header bg-success">
                <img className="rounded" style={{width: '100%', height: '180px'}} src={image}/>
            </div>
            <div className="card-body">
                <h6>Name: {name}</h6>
                <p>Age : {age}</p>
                <p>Country : {country}</p>
                <p>Price : {price}</p>
                <p>Sport : {sport}</p>
            </div>
            <div>
                <button className="btn btn-success d-block my-2 w-75 mx-auto" onClick={() => cardInfoData(props.card)}>Click thi button</button>
            </div>
        </div>
        
    );
};

export default Card;