import React from 'react';
import Ships from './Ships';


function ShipContainer({ships}) {
    console.log(ships)
    const boats = ships.map((boatObj) => { 
        const pirates = boatObj.pirates.map((pirate) => {
            return (
                <div key={pirate.id}>
                    <p>Name: {pirate.name}</p>
                    <p>Age: {pirate.age}</p>
                </div>
            );
          });
        return <Ships
            key = {boatObj.id}
            name = {boatObj.name}
            size = {boatObj.size}
            pirates = {pirates}
        />


    })

    return (
        <div>
            {boats}
        </div>
    )
}

export default ShipContainer