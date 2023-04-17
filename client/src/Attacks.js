import React from 'react';

function Attacks({name,location, date}){

    return(
        <div>
            <h1>{name}</h1>
            <p>{location}</p>
            <p>{date}</p>
        </div>
    )
}


export default Attacks