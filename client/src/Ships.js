import React from 'react';

function Ships({name,size,pirates,battles}){

    return(
        <div>
            <h1>{name}</h1>
            <p>{size}</p>
           <p>{pirates}</p>
           <p>{battles}</p>
        </div>
    )
}


export default Ships