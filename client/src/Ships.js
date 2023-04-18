import React from 'react';

function Ships({name,size,pirates}){

    return(
        <div>
            <h1>{name}</h1>
            <p>{size}</p>
           <p>{pirates}</p>
        </div>
    )
}


export default Ships