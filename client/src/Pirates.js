import React from 'react';

function Pirates({name, age, rank}){

    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{rank}</p>
        </div>
    )
}


export default Pirates