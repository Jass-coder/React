import React from 'react';

const Card = ({Show}) =>{
    
    return <div className="cotainer-row m-4">
        <div className="card-body">
            <div className="card mt-5 " style={{height:'18rem'}}>
                <img src={Show.src} alt="pic" style={{height:'10rem'}} />
                <h3 className="card-title">{Show.title}</h3>
                <p className="card-desc">{Show.desc}</p>
                <button className="btn btn-dark">Buy</button>
            </div>
        </div>
    </div>
}

export default Card ;